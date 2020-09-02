import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import OfferForm from '../components/OfferForm'

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
        this.setState({
            showForm: !this.state.showForm
        })
    }

    render() {

        const { listing } = this.state
        
        return (
            <div className="main-container">
            
                <div class="show-cont">

                    <h1>Home Sweet Home</h1>

                    <div class="ui clearing divider"></div>

                    <div class="show ui slide masked reveal image">
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
                                        <h5>SquareFt:</h5>
                                        <p>{listing.sq_foot} Sq.Ft.</p>
                                    </div>

                                    <div>
                                        <h5>SquareFt:</h5>
                                        <p>{listing.sq_foot} Sq.Ft.</p>
                                    </div>

                                </div>

                                <div class="column">
                                    <p></p>
                                </div>

                            </div>

                        <div class="ui vertical divider">

                        <a>
                            <div class="ui animated yellow massive button" tabindex="0" onClick={this.formToggle} >

                                <div class="visible content">Make Offer</div>
                                <div class="hidden content">
                                    <i class="home icon"></i>
                                </div>

                            </div>
                        </a>

                        </div>
                    </div>

                    <div class="ui clearing divider"></div>

                    {/* form conditionally renders based on button click */}
                    {this.state.showForm ?
                    <OfferForm />
                    :
                    null
                    }

                </div>

            </div>
        )
    }
}

export default withRouter(ShowContainer)
