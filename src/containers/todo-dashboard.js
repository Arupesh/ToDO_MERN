import React, { Component } from 'react';
import {Button, form,  FormGroup, FormControl, Grid, Col, Row, ControlLabel, HelpBlock} from 'react-bootstrap';
import Axios from 'axios';

class Dashboard extends Component {

		constructor(...args) {
		super(...args);

		this.state = {
			value: '',
			todoList : []
		};
	}

	getValidationState() {
		const length = this.state.value.length;
		if (length > 10) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
		return null;
	}

	handleChange(e) {
		this.setState({ value: e.target.value });
	}

	makeApiCall = e => {
    	e.preventDefault();
    	const URL = "http://localhost:3001/api/todolist";
		 // Make HTTP reques with Axios
		const todoList = Axios.get(URL)
		      .then((res) => {
		       console.log("Axios call went thru and returned list >>", res)
		       this.props.makeTodoApiCall(res);
		        return res;
		      });
    }

  render() {
    return (
      <div>
      <Grid>
		<form onSubmit = {this.makeApiCall.bind(this)}>
				<FormGroup
					controlId="formBasicText"
					validationState={this.getValidationState()}
				>
					<ControlLabel>Enter the ToDO you want to remember :</ControlLabel>
					<Row className="show-grid">
				      <Col xs={12} md={10}>
						<FormControl
							type="text"
							value={this.state.value}
							placeholder="Enter text"
							onChange={this.handleChange.bind(this)}
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

export default Dashboard;
