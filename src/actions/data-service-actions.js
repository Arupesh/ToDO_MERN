
import Axios from 'axios';

export const POST_TODO_ITEM = 'POST_TODO_ITEM';
export const GET_TODO_LIST = 'GET_TODO_LIST';


export const fetchTodoList = (todolist) => {
	console.log("fetchTodoList >>", todolist)
	return {
			type: GET_TODO_LIST,
			payload: todolist	
	}
    
}

// export const saveTodoList = (todolist) => {
// 	console.log("saveTodoList >>", todolist)
// 	return {
// 			type: POST_TODO_ITEM,
// 			payload: todolist	
// 	}
    
// }

export function postTodoItem (details){
  
  console.log("details>>",details)
  const URL = "http://localhost:3001/api/save";
  return(dispatch) => {
  	
  	return Axios.post(URL, {
	    name: details.name,
	    todo: details.todo
		  })
		  .then(function (response) {
		    console.log("Data saved >>", response);
		     dispatch(fetchTodoList(response.data));
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
  	} 
} 


export const getTodoList = (state) => {

	const URL = "http://localhost:3001/api/todolist";
 	// Make HTTP reques with Axios
 	return(dispatch) => {
 		return Axios.get(URL)
	      .then((res) => {
	        dispatch(fetchTodoList(res.data));
	      })
	      .catch(function (error) {
	    	throw(error);
	  		});
 	}
    
}
