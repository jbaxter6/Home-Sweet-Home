import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import FormErrors from './FormErrors'
import '../containers/Container.css'

export default class Login extends Component {

    state = {
        username: '',
        password: '',
        formErrors: {},
        formValid: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, this.validateForm)
    }

    validateForm = () => {
        let formErrors = {}
        let formValid = true
        if(this.state.username.length < 0) {
            formErrors.first_name = ["Username must be present"]
            formValid = false
        }

        else if(this.state.password.length < 0) {
            formErrors.last_name = ["Password must be present"]
            formValid = false
        }


        this.setState({formValid: formValid, formErrors: formErrors})
    }

    resetFormErrors = () => {
        this.setState({formErrors: {}})
    };
    
    handleLogIn = (e) => {
        e.preventDefault()
        // post fetch to users request
        
        fetch('http://localhost:3000/api/v1/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accepts": "application/json"
            }, 
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(resp => resp.json())
        .then(user => {
            localStorage.token = user.token
            localStorage.username = user.user.username
            localStorage.userId = user.user.id
        })

        this.resetFormErrors()
        
        this.props.toggle()

        e.target.reset()
    }

    render() {
        return (

            <div class="main-container">
                <div className="form-cont">
                    
                    <form class="ui form" onSubmit={(e) => this.handleLogIn(e)}>
                        
                        <h1 class="ui dividing header">Log in to account</h1>
                        
                        <div class="field">
                            <label htmlFor="username" >Username</label>
                            <input id="username" type="text" name="username" placeholder="Username..." onChange={this.handleChange}></input>
                        </div>

                        <div class="field">
                            <label htmlFor="password" >Password</label>
                            <input id="password" type="password" name="password" placeholder="Password..." onChange={this.handleChange}></input>
                        </div>

                        <FormErrors formErrors={this.state.formErrors}/>

                        <button class="ui yellow button" type="submit" disabled={!this.state.formValid}>LOG IN</button>
                        
                        <div class="ui message">
                            <Link to="/signup"><p>Want to register for new account?</p> </Link>
                        </div>

                    </form>

                </div>
            </div>
        )
    }
}
