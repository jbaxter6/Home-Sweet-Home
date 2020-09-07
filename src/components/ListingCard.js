import React, { Component } from 'react'
import {APIBASE} from '../constants/apiBase'

export default class ListingCard extends Component {

    handleLike = () => {
        console.log("this")
        fetch(APIBASE + 'listings/' + `${this.props.listing.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({
                likes: this.props.listing.likes + 1
            })
        })
        .then(resp => resp.json())
    }



    render() {
        return (
            <div class="ui raised link card">

                <div class="ui slide masked reveal image">

                    <img src={this.props.listing.image} class="visible content" alt="image1"></img>
                    <img src={this.props.listing.image_2} class="hidden content" alt="image2"></img>

                </div>

                <div class="extra content">
                        <a href={`/listings/${this.props.listing.id}`}>
                            <div class="ui animated yellow button" tabindex="0">
                                <div class="visible content">View Listing</div>
                                <div class="hidden content">
                                    <i class="home icon"></i>
                                    <i class="right arrow icon"></i>
                                </div>
                            </div>
                        </a>
                </div>

                <div class="ui clearing divider"></div>

                <div class="address">
                        <div class="address-inner"><h4>{this.props.listing.street_name}</h4></div>
                        <div class="meta">
                            {this.props.listing.city}, {this.props.listing.state} {this.props.listing.zip_code}
                        </div>
                        <div class="price">
                            <h1>${this.props.listing.purchase_price}</h1>
                        </div>
                </div>

                <div class="ui clearing divider"></div>

                <div class="room-specs">


                    {
                        this.props.listing.half_bathrooms > 1 ?
                        <div class="l description">
                            <h4>1/2 Baths: {this.props.listing.half_bathrooms}</h4> 
                        </div>
                        :
                        <div class="l description">
                            <h4>1/2 Baths: {this.props.listing.half_bathrooms}</h4>
                        </div>
                    }

                    <div class="c description">
                        <h4>Beds: {this.props.listing.bedrooms}</h4> 
                    </div>

                    {
                        this.props.listing.full_bathrooms > 1 ?
                        <div class="r description">
                            <h4>Full Baths: {this.props.listing.full_bathrooms}</h4>
                        </div>
                        :
                        <div class="r description">
                            <h4>Full Baths: {this.props.listing.full_bathrooms}</h4>
                        </div>
                    }

                </div>

                <div class="extra content">

                    <div class="l content">
                        <i class="heart big icon" onClick={this.handleLike}></i>
                        {this.props.listing.likes} 
                    </div>


                    <div class="r content">


                    {
                        this.props.listing.pet_friendly 
                        ?
                        <i class="paw large icon"></i>
                        :
                        null
                    }

                    </div>

                    


                </div>


            </div>
        )
    }
}
