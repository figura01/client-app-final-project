import React, { Component } from "react";

import { UserContext } from "../Auth/UserContext";
import { withRouter, Link } from "react-router-dom";
import apiHandler from "../../api/apiHandler";

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';

class FormSignin extends Component {
  static contextType = UserContext;

  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const key = event.target.name;

    // You can test more if you have to handle different sorts of inputs.
    const value =
      event.target.type === "file"
        ? event.target.files[0]
        : event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signin(this.state)
      .then((data) => {
        console.log(data);
        this.context.setUser(data);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
      });
  };

  render() {
    return (
      <>
        {/* 
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <button>Submit</button>
        </form>
        */}
        <Grid 
          textAlign='center'
          style={
            {height: '100vh'}
          }
                verticalAlign='middle'>
                <Grid.Column style={
                    {maxWidth: 300}
                }>
                    <Header as='h2' color='teal' textAlign='center'>
                      Sign In
                    </Header>
                    <Form size='large'
                      onChange={
                          this.handleChange
                      }
                      onSubmit={
                          this.handleSubmit
                    }>
                        <Segment stacked>
                          <Form.Input fluid icon='user' name='email' iconPosition='left' placeholder='E-mail address'/>
                          <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' name='password'/>

                          {this.state.errorMessage && (
                            <p className="error-message">* {this.state.errorMessage}</p>
                          )}

                          <Button color='teal' fluid size='large'>
                            Login
                          </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us?
                        <Link to="signup"> Sign Up</Link>
                    </Message>
                </Grid.Column>
            </Grid>
      </>
    );
  }
}

export default withRouter(FormSignin);
