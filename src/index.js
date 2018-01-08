import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import {createStore, applyMiddleware} from 'redux';  
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/rootReducer';  

//Creating the store with thunk Middleware
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(

  <Provider store={createStoreWithMiddleware(rootReducer)}>
	<App />
  </Provider>
	, document.getElementById('root')

	);

registerServiceWorker();