let path = require('path');
let friends = require('../data/friends');

module.exports = function (app) {
    app.get('/api/friends', function(req, res) {
        res.Json(friends);
    });

    app.post('/api/friends', function(req, res) {
        let userInput = req.body;
        let userResponses = userInput.scores;

        let matchName = '',
        let matchImage = '',
        let totalDifference = 10000; 

        for (let i = 0; i < friends.length; i++) {
            let diff = 0;
            for (let j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }

            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }

        friends.push(userInput);

        res.Json({status: 'OK', matchName: matchName, matchImage: matchImage});
    });
};
