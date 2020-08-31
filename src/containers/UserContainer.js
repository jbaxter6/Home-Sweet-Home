import React, { Component } from 'react'
import './UserContainer.css'
import ListingCard from '../components/ListingCard'

export default class UserContainer extends Component {
    
    state = {
        user: {}
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/users/' + localStorage.userId)
        .then(resp => resp.json())
        .then(user => this.setState({
            user: user
        }))
        
    }

    generateListing = () => {
        console.log(this.state.user)
        // console.log(this.state.user.listings[0])
        // return this.state.user.listings.map(listing =>  
        //     <ListingCard listing={listing} />
        // )
    }

    render() {
        return (
            <div className="user-container">
                <div class="ui centered card">
                    <div class="image">
                        <img src={this.state.user.image}></img>
                    </div>
                    <div class="content">
                        <p class="header">{this.state.user.username}</p>
                        <p class="header">{this.state.user.email}</p>
                        <div class="description">
                            {this.state.user.description}
                        </div>
                    </div>
                    <div class="extra content">
                        <a>
                            <i class="user icon"></i>
                            {this.state.user.up_votes} up-votes
                        </a>
                    </div>
                </div>
                {
                this.generateListing()
                // this.state.user.listings.map((listing) => 
                //     {return listing.zip_code})
                }
            </div>
        )
    }
}
