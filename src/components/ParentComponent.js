import React, { Component } from 'react';
import Form from './Form'
import DisplayData from './DisplayData'

export default class ParentComponent extends Component {
    state = {
        firstName: "",
        lastName: "",
    }
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    // handleFirstNameChange = event => {
    //     this.setState({
    //       firstName: event.target.value
    //     })
    //   }
    
    // handleLastNameChange = event => {
    //     this.setState({
    //       lastName: event.target.value
    //     })
    //   }


    render() {
        return (
            <div>
            <Form
            formData={this.state}
            handleChange={this.handleChange}
            />
            <DisplayData formData={this.state} />
            </div>
        )
    }
}
