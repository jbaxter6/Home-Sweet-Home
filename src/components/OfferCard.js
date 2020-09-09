import React, { Component } from 'react'
import {APIBASE} from '../constants/apiBase';
import numberWithCommas from '../helpers/numberWithCommas.js'

export default class OfferCard extends Component {

    deleteOffer = () => {

        fetch(APIBASE + `users/${localStorage.userId}/offers/${this.props.offer.id}`, {
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
                        Offer Price: ${numberWithCommas(this.props.offer.offer_price)}
                    </div>
                    <div class="description">
                        Down Payment: ${numberWithCommas(this.props.offer.money_down)}
                    </div><br></br>
                    <div class="meta">
                        {this.props.listing.street_name}
                    </div>
                    <div class="meta">
                        {this.props.listing.city}, {this.props.listing.state} {this.props.listing.zip_code}
                    </div>
                </div>

                <div class="ui clearing divider"></div>
                <button class="ui red button" onClick={this.deleteOffer}>Rescind Offer</button>
            </div>
        )
    }
}
