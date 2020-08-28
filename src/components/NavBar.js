import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {

    logout = () => {
        localStorage.clear()
        this.props.toggle()
    }

    render() {
        return (
            <div class="ui menu">
                <a class="yellow item" as={Link} to='/'>Home</a>
                <a class="yellow item">All Listings</a>
                <a class="yellow item" as={Link} to='/signup'>Sign Up</a>
                <a class="yellow item" as={Link} to='/login'>Log In</a>
                <a class="yellow item">Apply for Loan</a>
                <a class="yellow item"onClick={this.logout}>Log Out</a>
                <a class="yellow item">Sound On</a>
            </div>
        )
    }
}



