import React, { Component } from 'react'
import './Container.css'
import YourListingCard from '../components/YourListingCard'
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
            <YourListingCard listing={listing} />
            )
    }

    generateOffer = () => {
        return this.state.user.offers.map((offer, index ) => 
            <OfferCard listing={offer.listing} offer={offer}/>
        )
    }


    render() {
        return (
            <div class="user main-container">

            <div class="user-container">

                <div class="user-card" >
                    <div class="image-c">
                        <img class="card ui image" src={this.state.user.image} alt="user"></img>
                    </div>

                    <div class="desc-c">
                        <p class="header">{this.state.user.username}</p>
                        <p class="header">{this.state.user.email}</p>
                        <div class="description">
                            {this.state.user.description}
                        </div>
                    </div>
                </div>



                <div class="ui centered card">
                    
                    <div class="extra content">
                            <i class="user icon"></i>
                            {this.state.user.up_votes} up-votes
                    </div>
                </div>

                <div className="your-listing-container">
                    
                    {
                        this.state.user.listings.length > 0 ?
                        <h1>Your Properties</h1>
                        :
                        null
                    }
                    
                    <div class="ui cards">
                    {
                    this.generateListing()
                    }  
                    </div>   

                </div>

                <br></br>
                <br></br>

                <div className="your-offers-container">

                    {
                        this.state.user.offers.length > 0 ?
                        <h1> Created Offers </h1> 
                        :
                        null
                    }

                    <div class="ui cards">

                {
                this.generateOffer()
                }

                    </div>
                </div>
            </div>

            </div>
        )
    }
}
