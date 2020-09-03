import React, { Component } from 'react'
import Pagination from '../components/Pagination'
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

                <div class="cont-header">
                    <h1> Active Listings </h1>
                </div>

                <div class="ui four cards">
                {this.generateListing()}
                </div>

                <Pagination listingsPerPage={this.props.listingsPerPage}  totalListings={this.props.totalListings} paginate={this.props.paginate} nextPage={this.props.nextPage} />
            
            </div>
        )
    }
}
