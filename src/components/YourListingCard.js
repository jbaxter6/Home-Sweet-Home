import React, { Component } from 'react'
import {APIBASE} from '../constants/apiBase';

export default class YourListingCard extends Component {

    deleteListing = () => {

        fetch(APIBASE + `listings/${this.props.listing.id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
            "Authorization": `Bearer ${localStorage.token}`
        }
        })
        .then(resp => resp.json())
        .then(
            window.location.reload(true)
        )
        
    }

    
    render() {
        return (
            <div class="card">
                <div class="content">
                    <img class="right floated medium ui image" src={this.props.listing.image}></img>
                    <div class="header">
                        {this.props.listing.street_name}
                    </div>
                    <div class="description">
                    {this.props.listing.city}, {this.props.listing.state} {this.props.listing.zip_code}
                    </div>   
                </div>

                <button class="ui red button" onClick={this.deleteListing}>Delete Listing</button>
            </div>
        )
    }
}
