
import {combineReducers} from 'redux';  
import todoReducer from './todoReducer';

const rootReducer = combineReducers({  
  // short hand property names
  todoList : todoReducer
})

export default rootReducer; 