
//request dependencies 
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');

//creating app port 
let app = express();
let PORT = 8080

//using app to show public file on html 
app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//adding the routes to html and api pages 
require(path.join(__dirname, './app/routing/apiRoutes'));
require(path.join(__dirname, './app/routing/htmlRoutes'));

//listening on port
app.listen(PORT, function () {
    console.log('Friend Finder app listening on PORT: ' + PORT);
});