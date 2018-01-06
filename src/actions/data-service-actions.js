
import Axios from 'axios';

const 'POST_TODO_ITEM' = POST_TODO_ITEM;
const 'GET_TODO_LIST' = GET_TODO_LIST;

export postTodoItem = () => {

const URL = "http://localhost:3001/api/todolist";
 // Make HTTP reques with Axios
   const todoList = axios.get(URL)
      .then((res) => {
        // Set state with result
        return res;
      });

	return {
		type: POST_TODO_ITEM;
		payload: 	
	}
} 
export getTodoList = () => {
	return {
		type: GET_TODO_LIST;
		payload:		
		}
}