import {POST_TODO_ITEM} from '../actions/data-service-actions';
import {GET_TODO_LIST} from '../actions/data-service-actions';

export default (state = {}, action) => {
  switch (action.type) {
    case POST_TODO_ITEM:
    {	console.log("POST_TODO_ITEM Reducer called success")
         // return [action.payload, ...state];
      }
       case GET_TODO_LIST:
    {	console.log(" GET_TODO_LIST Reducer called success")
          return [action.payload, ...state];
      }
    default:
          return state;
  }
};