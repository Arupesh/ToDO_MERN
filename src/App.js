import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Support, Link, Route} from 'react-router-dom';
import Dashboard from './containers/todo-dashboard';
import ToDoList from './containers/todo-list';
import Axios from 'axios';
import {connect} from 'react-redux';

import {getTodoList} from './actions/data-service-actions';

class App extends Component {
    constructor(props) {
    super(props);

    this.state = {
      todoList : []
    };
    }

  componentDidMount(){
  
    this.props.getTodoList();
  }

  render() {
    
    return (
      <div className="App">
        <Dashboard/>
        <ToDoList todoList = {this.props.todoList} />
      </div>
    );
    }
  }




  function mapStateToProps(state) {
    console.log("mapStateToProps >>", state)
    return {
      todoList: state.todoList[0]
    }
  }


export default connect(mapStateToProps, {getTodoList})(App);
