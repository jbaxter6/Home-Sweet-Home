import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ShowContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            listing: {},
            showForm: false
        }
    }
    
    
    componentDidMount(){
        const listingId = this.props.match.params.id;

        fetch('http://localhost:3000/api/v1/listings/' + listingId)
                .then(resp => resp.json())
                .then(listing =>
                    this.setState({
                        listing: listing
                    })
                )
    }

    formToggle = () => {

    }

    render() {

        const { listing } = this.state
        
        return (
            <div className="show-container">
                
                <div class="ui raised very padded text container segment">

                    <div class="ui slide masked reveal image">
                        <img class="ui fluid image visible content" src={listing.image} alt="image1"></img>
                        <img class="ui fluid image hidden content" src={listing.image_2} alt="image2"></img>
                    </div>

                    <div class="ui clearing divider"></div>

                    <div>
                        <p>{listing.description}</p>
                    </div>

                    <div class="ui clearing divider"></div>

                    <div class="ui segment">
                        <div class="ui two column very relaxed grid">
                                <div class="column">
                                    <div>
                                        <h5>Address:</h5>
                                        <p>{listing.street_name}</p>
                                        <p>{listing.city}, {listing.state} {listing.zip_code}</p>
                                    </div>
                                    <div>
                                        <h5></h5>
                                        <p>{listing.street_name}</p>
                                    </div>
                                </div>
                                <div class="column">
                                    <p></p>
                                </div>
                            </div>
                        <div class="ui vertical divider">
                        and
                        </div>
                    </div>

                    <a>
                        <div class="ui animated yellow button" tabindex="0">
                            <div class="visible content">Make Offer</div>
                            <div class="hidden content">
                                <i class="home icon"></i>
                                <i class="right arrow icon"></i>
                            </div>
                        </div>

                    </a>

                </div>


            </div>
        )
    }
}

export default withRouter(ShowContainer)
