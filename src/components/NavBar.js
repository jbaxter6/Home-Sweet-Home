import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class NavBar extends Component {

    logout = () => {
        localStorage.clear()
        this.props.toggle()
    }

    render() {
        return (
            <div class="ui fixed top sticky menu">
                
                <a href="/" class="yellow item" >Home</a>
                
                <a href="/listings" class="yellow item">All Listings</a>

                {!this.props.logged ? 
                <a href="/signup" class="yellow item" >Sign Up</a> 
                :
                null
                }

                {!this.props.logged ?
                <a href="/login" class="yellow item" >Log In</a> 
                :
                null
                }

                {this.props.logged ?
                <a href="/account" class="yellow item">Account Info</a>
                : 
                null
                }

                {this.props.logged ?
                <a href="/create-listing" class="yellow item">Create Listing</a>
                :
                null   
                }
                
                {this.props.logged ?
                <a href="/apply" class="yellow item">Apply for Loan</a> 
                : 
                null
                }

                {this.props.logged ?
                <a href="/" class="yellow item" onClick={this.logout}>Log Out</a> 
                :
                null
                }
                
                {/* <a class="yellow item">Sound On</a> */}
            </div>
        )
    }
}



