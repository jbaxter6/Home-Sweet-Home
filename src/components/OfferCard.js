import React, { Component } from 'react'

export default class OfferCard extends Component {
    render() {
        return (
            <div class="card">
                <div class="content">
                    <img class="right floated medium ui image" src={this.props.listing.image}></img>
                    <div class="header">
                        Offer Price: $ {this.props.offer.offer_price}
                    </div>
                    <div class="description">
                        Down Payment: ${this.props.offer.money_down}
                    </div><br></br>
                    <div class="meta">
                        {this.props.listing.street_name}
                    </div>
                    <div class="meta">
                        {this.props.listing.city}, {this.props.listing.state} {this.props.listing.zip_code}
                    </div>
                </div>
            </div>
        )
    }
}
