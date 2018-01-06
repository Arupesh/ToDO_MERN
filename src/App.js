import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Support, Link, Route} from 'react-router-dom';
import Dashboard from './containers/todo-dashboard';
import ToDoList from './containers/todo-list';

class App extends Component {
    constructor(props) {
    super(props);

    this.state = {
      todoList : []
    };
  }

  updateList({data}) {
    console.log("Callback with list >>", data)
    this.setState({todoList: data});
  }

  render() {
    return (
      <div className="App">
        <Dashboard makeTodoApiCall = {this.updateList.bind(this)}/>
        <ToDoList todoList = {this.state.todoList} />
      </div>
    );
  }
}

export default App;
