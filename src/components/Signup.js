import React, { Component } from 'react'

export default class Signup extends Component {
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSignUp = (e) => {
        e.preventDefault()
        // post fetch to users request
        
        // fetch('http://localhost:3000/api/v1/users', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "accepts": "application/json"
        //     }, 
        //     body: JSON.stringify({
        //         username: this.state.username,
        //         password: this.state.password
        //     })
        // })
        // .then(resp => resp.json())
        // .then(user => {
        //     localStorage.token = user.token
        // })
        
        this.props.toggle()
    }

    render() {
        return (
            <form class="ui form">
                <h3 class="ui dividing header">Create an account</h3>
                <div class="field">
                    <label>Username</label>
                    <input type="text" name="first-name" placeholder="First Name"></input>
                </div>
                <div class="field">
                    <label>E-mail</label>
                    <input type="text" name="last-name" placeholder="Last Name"></input>
                </div>
                <div class="field">
                    <label>Last Name</label>
                    <input type="text" name="last-name" placeholder="Last Name"></input>
                </div>
                <div class="field">
                    <label>Profile Picture</label>
                    <input type="text" name="last-name" placeholder="Last Name"></input>
                </div>
                <div class="field">
                    <label>What makes your HomeSweetHome</label>
                    <input type="text" name="last-name" placeholder="Last Name"></input>
                </div>
                <button class="ui yellow button" type="submit">Submit</button>
            </form>
        )
    }
}
