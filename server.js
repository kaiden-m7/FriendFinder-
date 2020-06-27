
//request dependencies 
let express = require('express');
let path = require('path');

//creating app port 
let ap = express();
let PORT = 8080;

//using app to show public file on html 
app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//adding the routes to html and api pages 
require(path.join(__dirname. './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

//listening on port
app.listen(PORT, function () {
    console.log('Friend Finder app listening on PORT: ' + PORT);
});