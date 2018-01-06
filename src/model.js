var mongoose = require('mongoose'); 
//compiling the schema 
var Schema = mongoose.Schema;  

var todoSchema = new Schema({      
    name: { type: String   },       
    todo: { type: String   },        
},{ versionKey: false });  
   
//compiling our schema into a Model.
module.exports = mongoose.model('todoModel', todoSchema, 'todo_collection'); 
