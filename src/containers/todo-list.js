import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class ToDoList extends Component {

		constructor(props) {
		super(props);

	}


	renderList (eachItem) {
		console.log("EachItem is >>", eachItem)
		return (
				<ListGroupItem key= {eachItem._id}>
					<label> {eachItem.name}'s TODO : </label>	{eachItem.todo}
				</ListGroupItem>
			)
	}

  render() {
    return (
      <div>
      <ListGroup>
      		{this.props.todoList.map(this.renderList)}
      </ListGroup>
      </div>
    );
  }
}

export default ToDoList;
