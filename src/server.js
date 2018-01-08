var express = require("express");  
var path = require("path");  
var bodyParser = require('body-parser');   
var db = require("./config.js");  
var todoModel = require("./model");  

//and create our instances
var app = express();
var router = express.Router();

//set our port to either a predetermined port number if you have set 
//it up, or 3001
var port = process.env.API_PORT || 3001;
app.listen(port, function() {
 console.log('api running on port ${port}');
}); 

var srcpath  =path.join(__dirname,'/public') ;  
app.use(express.static('public'));  

//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
//The urlencoded method within body-parser tells body-parser to extract data from the <form> element and add them to the body property in the request object.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

  
//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
var myLogger = function (req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
  console.log('Request made >>',req.originalUrl)
  next()
}
app.use(myLogger);

app.get('/api/todolist',function(req,res){

   todoModel.find(function(err, todoList) {
	 if (err)
	 res.send(err);
	 //responds with a json object of our database todos.
	 console.log("Here is the todoList >> ",todoList)
	 res.send(todoList)
	 });

});

app.post('/api/save',function(req,res){

  console.log("Post Call ",req.body);

	var awesome_instance = new todoModel({ name: req.body.name, todo: req.body.todo});
	 awesome_instance.save(function(err, todoModel) {
	 if (err)
	 res.send(err);
	 res.send({ message: 'ToDoList successfully added!' });
	 res.end();
	 });
});

