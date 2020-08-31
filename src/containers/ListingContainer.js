import React, { Component } from 'react'
import ListingCard from '../components/ListingCard'

export default class ListingContainer extends Component {
    
    generateListing = () => {
        return this.props.listings.map(listing =>
            <ListingCard listing={listing} />
            )
    }

    render() {
        return (
            <div class="listing-cont">
                <h1> All Listings </h1>
                <div class="ui five cards">
                {this.generateListing()}
                </div>
            </div>
        )
    }
}
