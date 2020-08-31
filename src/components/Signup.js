import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Signup extends Component {
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSignUp = (e) => {
        e.preventDefault()
        // post fetch to users request
        
        fetch('http://localhost:3000/api/v1/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accepts": "application/json"
            }, 
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                image: this.state.image,
                description: this.state.description,
                up_votes: 0
            })
        })
        .then(resp => resp.json())
        .then(user => {
            localStorage.token = user.token
            localStorage.username = user.user.username
            localStorage.userId = user.user.id
        })
        
        this.props.toggle()
        e.target.reset()
    }

    render() {
        return (
            <form class="ui form" onSubmit={(e) => this.handleSignUp(e)}>
                <h3 class="ui dividing header">Create an account</h3>
                <div class="field">
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Username" onChange={this.handleChange}></input>
                </div>
                <div class="field">
                    <label>E-mail</label>
                    <input type="text" name="email" placeholder="E-mail" onChange={this.handleChange}></input>
                </div>
                <div class="field">
                    <label>Profile Picture</label>
                    <input type="text" name="image" placeholder="Please enter jpg. or png. files" onChange={this.handleChange}></input>
                </div>
                <div class="field">
                    <label>What makes your HomeSweetHome</label>
                    <input type="text" name="description" placeholder="talk about your perfect home" onChange={this.handleChange}></input>
                </div>
                <div class="field">
                    <label>Create your password</label>
                    <input type="password" name="password" placeholder="Password..." onChange={this.handleChange}></input>
                </div>
                <button class="ui yellow button" type="submit">Submit</button>
                <Link to="/login"><p>Log in to existing account?</p> </Link>
            </form>
        )
    }
}
