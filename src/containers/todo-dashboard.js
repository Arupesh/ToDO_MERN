import React, { Component } from 'react';
import {Button, form,  FormGroup, FormControl, Grid, Col, Row, ControlLabel, HelpBlock} from 'react-bootstrap';
import Axios from 'axios';
import {connect} from 'react-redux';
import {postTodoItem} from '../actions/data-service-actions';

class Dashboard extends Component {

		constructor(props) {
		super(props);

		this.state = {
			name: '',
			todo : ''
		};
	}

	getValidationState() {
		const length = this.state.todo.length;
		if (length > 10) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
		return null;
	}

	onTodoChange(e) {
		this.setState({ todo: e.target.value });
	}

	onNameChange(e) {
		this.setState({ name: e.target.value });
	}

    onSubmit(e)
    {
    	this.props.postTodoItem(this.state);
    }

  render() {
    return (
      <div>
      <Grid>
		<form onSubmit = {this.onSubmit.bind(this)}>
				<FormGroup
					controlId="formBasicText"
					validationState={this.getValidationState()}
				>
					<ControlLabel>Enter the ToDO you want to remember :</ControlLabel>
					<Row className="show-grid">
				      <Col xs={12} md={3}>
						<FormControl
							type="text"
							value={this.state.name}
							placeholder="Person the todo is related to!!"
							onChange={this.onNameChange.bind(this)}
						/>
					  </Col>
					   <Col xs={12} md={7}>
						<FormControl
							type="text"
							value={this.state.todo}
							placeholder="Enter one's todo!!"
							onChange={this.onTodoChange.bind(this)}
						/>
					  </Col>
					   <Col xs={12} md={2}>
				      	  <Button 
				      	  	type= "submit" 
				      	  	bsStyle="primary" 
				      	  	bsSize="large">
				      	  	Enter
				      	  	</Button>
				      </Col>
		    		</Row>
					<FormControl.Feedback />
					<HelpBlock>Validation is based on string length.</HelpBlock>
				</FormGroup>
			</form>
			</Grid>
      </div>
    );
  }
}

export default connect(null, {postTodoItem})(Dashboard);
