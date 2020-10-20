import React, { Component } from "react";
import { Form, Segment, TextArea, Button } from "semantic-ui-react";
import apiHandler from "../../api/apiHandler";

class FormCreateCategory extends Component {
  state = {
    label: null,
  };

  handleChange = (event) => {
    const value =
      event.target.type === "file"
        ? event.target.files[0]
        : event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const key = event.target.name;
    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    apiHandler
      .createOne("/api/admin/categories", this.state)
      .then((apiResLabel) => {
        this.props.history.push("/Admin"); 
        console.log(apiResLabel)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h1>CREATE A CATEGORY</h1>
        <Form
          size="large"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <Segment stacked>
            <Form.Input
              fluid
              icon="heart"
              name="label"
              iconPosition="left"
              placeholder="Nouvelle catégorie"
            />
            <Button color="teal" fluid size="large">
              Go pour ta nouvelle catégorie
            </Button>
          </Segment>
        </Form>
      </div>
    );
  }
}

export default FormCreateCategory;