var express = require("express");  
var path = require("path");  
var bodyParser = require('body-parser');   
var db = require("./config.js");  
var todoModel = require("./model.js");  

//and create our instances
var app = express();
var router = express.Router();

//set our port to either a predetermined port number if you have set 
//it up, or 3001
var port = process.env.API_PORT || 3001;

var srcpath  =path.join(__dirname,'/public') ;  
app.use(express.static('public'));  

//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
  
//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
}); 

//now we can set the route path & initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});
//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests
app.listen(port, function() {
 console.log('api running on port ${port}');
}); 

//adding the /todolist route to our /api router to fetch todoList
router.route('/todolist')
 .get(function(req, res) {
 todoModel.find(function(err, todoList) {
 if (err)
 res.send(err);
 //responds with a json object of our database todos.
 console.log("Here is the todoList >> ",todoList)
 res.json(todoList)
 });
 })


  
