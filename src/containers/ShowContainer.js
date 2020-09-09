import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import OfferForm from '../components/OfferForm'
import MapContainer from './MapContainer'
import numberWithCommas from '../helpers/numberWithCommas.js'

class ShowContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            listing: {
                purchase_price: '',
                monthly_price: ''
            },
            showForm: false,
            submittedOffer: false
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

    submittedOffer = () => {
        this.setState({
            submittedOffer: !this.state.submittedOffer
        })
    }

    makeOfferButton = () => {
        
        if(localStorage.token && !this.state.showForm && !this.state.submittedOffer){
                return <button class="ui large yellow button" type="submit" onClick={this.formToggle}>Make Offer</button>
        }
        else{
            return <Fragment>and</Fragment>
        }
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

                                    <div class="left detail container">

                                        <div>

                                            <div>
                                                <h5>Address:</h5>
                                            </div>

                                            <div>
                                                <p>{listing.street_name}</p>
                                            </div>
                                            
                                            <p>{listing.city}, {listing.state} {listing.zip_code}</p>

                                        </div>

                                        <div class="l details">

                                            <div>
                                                <h5>Asking Purchase Price:</h5>
                                            </div>

                                            <p>${numberWithCommas(listing.purchase_price)}</p>

                                        </div>

                                        {
                                            listing.rent ?
                                                <div class="l details">
                                                <div>
                                                <h5>Available for Rent:</h5>
                                                </div>
                                                <p>Yes</p>
                                                </div>
                                            :
                                                null
                                        }
                                        
                                        {
                                            listing.rent ?
                                                <div class="l details">
                                                <div>
                                                <h5>Asking Monthly Rent:</h5>
                                                </div>
                                                <p>${numberWithCommas(listing.monthly_price)} </p>
                                                </div>
                                            :
                                                null
                                        }
                                            
                                        <div class="l details">
                                            
                                            <div>
                                                <h5>Bedrooms:</h5>
                                            </div>

                                            <p>{listing.bedrooms} Beds</p>

                                        </div>

                                        <div class="l details">
                                            
                                            <div>
                                                <h5>Half-Bathrooms:</h5>
                                            </div>

                                            <p>{listing.half_bathrooms} Half-Baths</p>

                                        </div>

                                        <div class="l details">
                                            
                                            <div>
                                                <h5>Full-Bathrooms:</h5>
                                            </div>

                                            <p>{listing.full_bathrooms} Baths</p>

                                        </div>

                                        <div class="l details">
                                            
                                            <div>
                                                <h5>Nearest Elementary School:</h5>
                                            </div>

                                            <div>
                                                <p>{listing.nearest_elementary} Elementary School</p>
                                            </div>

                                        </div>

                                        <div class="l details">

                                            <div>
                                                <h5>Nearest Middle School:</h5>
                                            </div>

                                            <div class="right detail">
                                                <p>{listing.nearest_middle} Middle School</p>
                                            </div>
                                        
                                        </div>

                                        <div class="l details">

                                            <div>
                                                <h5>Nearest High School:</h5>
                                            </div>

                                            <div class="right detail">
                                                <p>{listing.nearest_high} Senior High School</p>
                                            </div>

                                        </div>

                                        
                                        
                                    </div>

                                </div>

                                <div class="column">

                                    <div class="right detail container">

                                            <div>
                                            
                                            <div>
                                                
                                                <div>
                                                    <h5>Style of Home:</h5>
                                                </div>

                                                <div class="right detail">
                                                    <p>{listing.type_of_house}</p>
                                                </div>

                                            </div>

                                            <div class="details">
                                                
                                                <div>
                                                    <h5>Year Built:</h5>
                                                </div>

                                                <div class="right detail">
                                                    <p>{listing.year_built}</p>
                                                </div>

                                            </div>

                                            <div class="details">
                                                
                                                <div>
                                                    <h5>Condition:</h5>
                                                </div>

                                                <div class="right detail">
                                                    <p>{listing.condition}</p>
                                                </div>

                                            </div>
                                            
                                            <div class="details">
                                                
                                                <div>
                                                    <h5>Square Footage:</h5>
                                                </div>

                                                <div class="right detail">
                                                    <p>{listing.sq_foot} Sq. Ft.</p>
                                                </div>

                                            </div>


                                            {
                                            listing.rent ?
                                                <div class="details">
                                                <div>
                                                <h5>Smoke Friendly:</h5>
                                                </div>
                                                
                                                {
                                                listing.smoker ?
                                                <p>Yes</p>
                                                :
                                                <p>No</p>
                                                }
                    
                                                </div>
                                            :
                                                null
                                            }

                                            {
                                            listing.rent ?
                                                <div class="details">
                                                <div>
                                                <h5>Pet Friendly:</h5>
                                                </div>
                                                
                                                {
                                                listing.pet_friendly ?
                                                <p>Yes</p>
                                                :
                                                <p>No</p>
                                                }
                    
                                                </div>
                                            :
                                                null
                                            }
                                        



                                            <div class="details">

                                            <div>
                                                <h5>HOA:</h5>
                                            </div>

                                            {
                                                listing.hoa ?
                                                <p>Yes</p>
                                                :
                                                <p>No</p>
                                            }

                                            </div>

                                            <div class="details">

                                            <div>
                                                <h5>Parking:</h5>
                                            </div>

                                            {
                                                listing.parking ?
                                                <p>Yes</p>
                                                :
                                                <p>No</p>
                                            }

                                            </div>

                                            <div class="details">

                                            <div>
                                                <h5>Garage:</h5>
                                            </div>

                                            {
                                                listing.garage ?
                                                <p>Yes</p>
                                                :
                                                <p>No</p>
                                            }

                                            </div>


                                            <div class="details">
                                                
                                                <div>
                                                    <h5>Heating:</h5>
                                                </div>

                                                {
                                                listing.heating ?
                                                <p>Yes</p>
                                                :
                                                <p>No</p>
                                            }

                                            </div>

                                            <div class="details">
                                                
                                                <div>
                                                    <h5>Cooling:</h5>
                                                </div>

                                                {
                                                listing.cooling ?
                                                <p>Yes</p>
                                                :
                                                <p>No</p>
                                            }

                                            </div>
                                            

                                            

                                        </div>

                                    </div>

                                </div>

                            </div>

                        <div class="ui vertical divider">

                            {
                                this.makeOfferButton()
                                // ((localStorage.token && !this.state.showForm) || (!this.state.submittedOffer))?
                                // <button class="ui large yellow button" type="submit" onClick={this.formToggle}>Make Offer</button>
                                // :
                                // <Fragment>and</Fragment>
                            }

                        </div>
                    </div>

                    <div class="ui clearing divider"></div>

                    {/* form conditionally renders based on button click */}
                    {this.state.showForm ?
                    <OfferForm listing={listing} formToggle={this.formToggle} submittedOffer={this.submittedOffer}/>
                    :
                    null
                    }

                    {this.state.showForm ?
                    <div class="ui clearing divider"></div>
                    :
                    null
                    }

                    <MapContainer 
                    street={listing.street_name}
                    city={listing.city}
                    state={listing.state}
                    zip={listing.zip_code}
                    />


                </div>

            </div>
        )
    }
}

export default withRouter(ShowContainer)
