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
                <Link to='/'> <a class="yellow item" >Home</a> </Link>
                <Link to='/listings'> <a class="yellow item">All Listings</a> </Link>

                {!this.props.logged ? 
                <Link to='/signup'> <a class="yellow item" as={Link} to='/signup'>Sign Up</a> </Link>
                :
                null
                }

                {!this.props.logged ?
                <Link to='/login'> <a class="yellow item" as={Link} to='/login'>Log In</a> </Link>
                :
                null
                }

                {this.props.logged ?
                <Link to='/account'> <a class="yellow item">Account Info</a> </Link>
                : 
                null
                }
                
                {this.props.logged ?
                <Link to='/apply'> <a class="yellow item">Apply for Loan</a> </Link>
                : 
                null
                }

                {this.props.logged ?
                <Link to='/' > <a class="yellow item"onClick={this.logout}>Log Out</a> </Link>
                :
                null
                }
                
                <a class="yellow item">Sound On</a>
            </div>
        )
    }
}



