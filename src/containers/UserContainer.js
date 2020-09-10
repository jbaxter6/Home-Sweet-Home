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

                    <div class="user ui card">
                        <div class="image-c">
                            <img class="card ui image" src={this.state.user.image}></img>
                        </div>
                        <div class="user content">
                            <div>
                                <h4> Username: </h4>
                                {this.state.user.username}
                            </div>
                            <div class="user d">
                                <h4> E-mail: </h4>{this.state.user.email}
                            </div>
                        </div>
                    </div>

                    <div class="your-listing-cont">

                    {
                        this.state.user.listings.length > 0 ?
                            <div>
                                <div class="prop head">
                                    <h1>Your Properties</h1>
                                </div>
                                    <div class="list offer ui cards">
                                        {
                                            this.generateListing()
                                        }  
                                    </div>  
                            </div>
                        :
                        null
                    }

                    {
                        this.state.user.offers.length > 0 ?
                            <div >
                                <div class="prop head">
                                    <h1>Your Offers</h1>
                                </div>
                                    <div class="list offer ui cards">
                                    {
                                        this.generateOffer()
                                    }
                                    </div>  
                            </div>
                        :
                        null
                    }

                    </div>
                    

                </div>

            </div>
        )
    }
}
 
// This is a beautiful home that