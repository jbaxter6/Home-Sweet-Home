import React, { Component } from 'react'
import './Container.css'
import ListingCard from '../components/ListingCard'
import OfferCard from '../components/OfferCard'

export default class UserContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {
                listings: [],
                offers: []
            }
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/users/' + localStorage.userId)
        .then(resp => resp.json())
        .then(user => this.setState({
            user: user
        }))
    }
    
    
    generateListing = () => {
        return this.state.user.listings.map(listing =>  
            <ListingCard listing={listing} />
            )
    }

    generateOffer = () => {
        return this.state.user.offers.map(offer => 
                <OfferCard offer={offer}/>
            )
    }

    render() {
        return (
            <div class="main-container">

            <div class="ui container segment">
                <div class="ui centered card">
                    <div class="image">
                        <img src={this.state.user.image} alt="user"></img>
                    </div>
                    <div class="content">
                        <p class="header">{this.state.user.username}</p>
                        <p class="header">{this.state.user.email}</p>
                        <div class="description">
                            {this.state.user.description}
                        </div>
                    </div>
                    <div class="extra content">
                            <i class="user icon"></i>
                            {this.state.user.up_votes} up-votes
                    </div>
                </div>
                <div className="your-listing-container">
                    <h1>Your Listings</h1>
                {
                this.generateListing()
                }
                </div>
                <div className="your-offers-container">
                {
                this.generateOffer()
                }
                </div>
            </div>

            </div>
        )
    }
}
