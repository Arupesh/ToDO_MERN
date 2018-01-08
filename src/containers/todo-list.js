import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class ToDoList extends Component {

		constructor(props) {
		super(props);

	}

	renderList (eachItem) {
		return (
				<ListGroupItem key= {eachItem._id} bsStyle="success">
					<label> {eachItem.name}'s TODO : </label>	{eachItem.todo}
				</ListGroupItem>
			)
	}

  render() {
    return (
      <div>
      <ListGroup>
      		{this.props.todoList ? this.props.todoList.map(this.renderList): "..Loading"}
      </ListGroup>
      </div>
    );
  }
}

export default ToDoList;
