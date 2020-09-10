import React, { Component } from 'react'
import {APIBASE} from '../constants/apiBase'
import {Link} from 'react-router-dom'
import FormErrors from './FormErrors'

export default class ListingForm extends Component {

    state = {
        firstName: '',
        lastName: '',
        phoneNum: '',
        street: '',
        city: '',
        zip: '',
        desc: '',
        rent: 'null',
        rentPrice: 0,
        selling: 'null',
        sellPrice: 0,
        cond: 'null',
        propType: 'null',
        year: null,

        formErrors: {},
        formValid: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, this.validateForm)
    }

    validateForm = () => {
        let formErrors = {}
        let formValid = true
        if(this.state.firstName.length < 0) {
            formErrors.first_name = ["First name must be present"]
            formValid = false
        }

        else if(this.state.lastName.length < 0) {
            formErrors.last_name = ["Last name must be present"]
            formValid = false
        }

        else if(this.state.phoneNum.length <= 9) {
            formErrors.phone_num = ["Phone Number must be at least 10 digits"]
            formValid = false
        }

        else if(!this.state.street) {
            formErrors.email = ["Street is required for posted listing"]
            formValid = false
        }

        else if(!this.state.city) {
            formErrors.city = ["City is required for posted listing"]
            formValid = false
        }

        else if (this.state.rent === "null"){
            formErrors.rent = ["Specify whether you would like your property to be listed as a rentable"]
            formValid = false
        }

        else if(this.state.rent === "true" && this.state.rentPrice <= 0){
            formErrors.rentPrice = ["Property that is listed as up for rent must specify a monthly cost"]
            formValid = false
        }

        else if (this.state.selling === "null"){
            formErrors.rent = ["Specify whether you would like your property to be listed as for-sale"]
            formValid = false
        }

        else if(this.state.selling === "true" && this.state.sellPrice <= 0){
            formErrors.rentPrice = ["Property that is listed as up for sale must specify an asking-price"]
            formValid = false
        }

        else if (this.state.cond === "null"){
            formErrors.cond = ["Specify the condition of your listing"]
            formValid = false
        }

        else if (this.state.propType === "null"){
            formErrors.propType = ["Specify the type of property you will be listing"]
            formValid = false
        }

        else if(this.state.desc.length <= 99) {
            formErrors.desc = ["Describe your listing with at least 100 characters"]
            formValid = false
        }

        this.setState({formValid: formValid, formErrors: formErrors})
    }

    resetFormErrors = () => {
        this.setState({formErrors: {}})
    };

    handleCreatedListing = (e) => {
        e.preventDefault()

        fetch(APIBASE + '/listings', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
            "Authorization": `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            user_id: localStorage.userId,
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            contact_number: this.state.phoneNum,
            street_name: this.state.street,
            city: this.state.city,
            state: this.state.stATE,
            zip_code: this.state.zip,
            rent: this.state.rent,
            monthly_price: this.state.rentPrice,
            buy: this.state.selling,
            purchase_price: this.state.sellPrice,
            sold: false,
            condition: this.state.cond,
            type_of_house: this.state.propType,
            year_built: this.state.year, 
            sq_foot: this.state.sq,
            bedrooms: this.state.bedrooms,
            half_bathrooms: this.state.halfbath,
            full_bathrooms: this.state.fullbath,
            description: this.state.desc,
            nearest_elementary: this.state.elementary,
            nearest_middle: this.state.middle,
            nearest_high: this.state.high,
            image: this.state.img,
            image_2: this.state.image,
            heating: this.state.heating,
            cooling: this.state.cooling,
            parking: this.state.parking,
            garage: this.state.garage,
            hoa: this.state.hoa,
            pet_friendly: this.state.petfriendly,
            pet_size: this.state.petsize,
            likes: 0
        })

        })

        this.resetFormErrors()

        e.target.reset()
    }
    
    render() {
        return (
            <div class="main-container">
                <div class="form-cont">
                    <div class="list-house-header">
                        <h1>Time to put your Property on the Market?</h1>
                    </div>
                    
                    <div class="ui segment">
                            <form class="ui form" onSubmit={(e) => this.handleCreatedListing(e)}>
                                <div class="ui two column very relaxed grid">

                                    <div class="column">

                                        <div class="fields">

                                            <div class="field">
                                                <label> First Name</label>  
                                                <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}></input>
                                            </div>

                                            <div class="field">

                                                <label>Last Name</label>
                                                <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}></input>

                                            </div>

                                            <div class="field">

                                                <label>Phone Number</label>
                                                <input type="text" name="phoneNum" placeholder="Phone Number" onChange={this.handleChange}></input>

                                            </div>  

                                        </div>


                                        <div class="fields">

                                            <div class="field">
                                                <label> Street Name</label>  
                                                <input type="text" name="street" placeholder="Street Name" onChange={this.handleChange}></input>
                                            </div>

                                            <div class="field">

                                                <label>City</label>
                                                <input type="text" name="city" placeholder="City" onChange={this.handleChange}></input>

                                            </div>

                                            <div class="field" name="stATE" onChange={this.handleChange}>
                                                <label>State</label>
                                                <select class="ui search dropdown">
                                                    <option value="">State</option>
                                                    <option value="AL">Alabama</option>
                                                    <option value="AK">Alaska</option>
                                                    <option value="AZ">Arizona</option>
                                                    <option value="AR">Arkansas</option>
                                                    <option value="CA">California</option>
                                                    <option value="CO">Colorado</option>
                                                    <option value="CT">Connecticut</option>
                                                    <option value="DE">Delaware</option>
                                                    <option value="DC">District Of Columbia</option>
                                                    <option value="FL">Florida</option>
                                                    <option value="GA">Georgia</option>
                                                    <option value="HI">Hawaii</option>
                                                    <option value="ID">Idaho</option>
                                                    <option value="IL">Illinois</option>
                                                    <option value="IN">Indiana</option>
                                                    <option value="IA">Iowa</option>
                                                    <option value="KS">Kansas</option>
                                                    <option value="KY">Kentucky</option>
                                                    <option value="LA">Louisiana</option>
                                                    <option value="ME">Maine</option>
                                                    <option value="MD">Maryland</option>
                                                    <option value="MA">Massachusetts</option>
                                                    <option value="MI">Michigan</option>
                                                    <option value="MN">Minnesota</option>
                                                    <option value="MS">Mississippi</option>
                                                    <option value="MO">Missouri</option>
                                                    <option value="MT">Montana</option>
                                                    <option value="NE">Nebraska</option>
                                                    <option value="NV">Nevada</option>
                                                    <option value="NH">New Hampshire</option>
                                                    <option value="NJ">New Jersey</option>
                                                    <option value="NM">New Mexico</option>
                                                    <option value="NY">New York</option>
                                                    <option value="NC">North Carolina</option>
                                                    <option value="ND">North Dakota</option>
                                                    <option value="OH">Ohio</option>
                                                    <option value="OK">Oklahoma</option>
                                                    <option value="OR">Oregon</option>
                                                    <option value="PA">Pennsylvania</option>
                                                    <option value="RI">Rhode Island</option>
                                                    <option value="SC">South Carolina</option>
                                                    <option value="SD">South Dakota</option>
                                                    <option value="TN">Tennessee</option>
                                                    <option value="TX">Texas</option>
                                                    <option value="UT">Utah</option>
                                                    <option value="VT">Vermont</option>
                                                    <option value="VA">Virginia</option>
                                                    <option value="WA">Washington</option>
                                                    <option value="WV">West Virginia</option>
                                                    <option value="WI">Wisconsin</option>
                                                    <option value="WY">Wyoming</option>
                                                </select>

                                            </div> 

                                            <div class="field">

                                                <label>Zip Code</label>
                                                <input type="number" name="zip" placeholder="Zip Code" onChange={this.handleChange}></input>

                                            </div>   

                                        </div>

                                        <div class="fields">

                                            <div class="field">
                                                <label>For Rent</label>
                                                <select class="ui compact dropdown" name="rent" onChange={this.handleChange}>
                                                    <option value="null">Y / N</option>
                                                    <option value="true" >Yes</option>
                                                    <option value="false" >No</option>
                                                </select>
                                            </div>

                                            <div class="field">
                                                    <label>Monthly Rent</label>
                                                    <input type="number" name="rentPrice" placeholder="Rent due per month" onChange={this.handleChange}></input>
                                            </div> 

                                            <div class="field">
                                                <label>For Sale</label>
                                                <select class="ui compact dropdown" name="selling" onChange={this.handleChange}>
                                                    <option value="null">Y / N</option>
                                                    <option value="true" >Yes</option>
                                                    <option value="false" >No</option>
                                                </select>
                                            </div>  

                                            <div class="field">
                                                    <label>Asking Price</label>
                                                    <input type="number" name="sellPrice" placeholder="Asking Price" onChange={this.handleChange}></input>
                                            </div> 

                                        </div>   

                                        <div class="fields">

                                            <div class="field">
                                                <label>Condition</label>
                                                <select class="ui compact dropdown" name="cond" onChange={this.handleChange}>
                                                    <option value="null"></option>
                                                    <option value="New">New</option>
                                                    <option value="Vintage">Vintage</option>
                                                    <option value="Fixer-Upper">Fixer-Upper</option>
                                                </select>
                                            </div>

                                            <div class="field">
                                                <label>Property Type</label>
                                                <select class="ui compact dropdown" name="propType" onChange={this.handleChange}>
                                                    <option value="null"></option>
                                                    <option value="Single-Family">Single-Family</option>
                                                    <option value="Condominium">Condominium</option>
                                                    <option value="Townhouse">Townhouse</option>
                                                    <option value="Apartment">Apartment</option>
                                                    <option value="Land">Land</option>
                                                </select>
                                            </div>

                                            <div class="field">
                                                    <label>Year Built</label>
                                                    <input type="number" name="year" placeholder="Year Built" onChange={this.handleChange}></input>
                                            </div>  

                                            <div class="field">
                                                    <label>Square Ft.</label>
                                                    <input type="number" name="sq" placeholder="Square Ft." onChange={this.handleChange}></input>
                                            </div>    


                                        </div>  

                                        <div class="fields">

                                                <div class="field">
                                                        <label>Bedrooms</label>
                                                        <input type="number" name="bedrooms" placeholder="Quantity" onChange={this.handleChange}></input>
                                                </div>   

                                                <div class="field">
                                                        <label>Half Bathrooms</label>
                                                        <input type="number" name="halfbath" placeholder="Quantity" onChange={this.handleChange}></input>
                                                </div>   

                                                <div class="field">
                                                        <label>Full Bathrooms</label>
                                                        <input type="number" name="fullbath" placeholder="Quantity" onChange={this.handleChange}></input>
                                                </div>   

                                            </div>                                   

                                    </div>




                                    <div class="column">

                                    <div class="field">
                                                <label>Description</label>
                                                <textarea rows="5" name="desc" placeholder="Describe your home" onChange={this.handleChange}></textarea>
                                    </div> 

                                    <div class="fields">

                                                <div class="field">
                                                    <label>Elementary School</label>  
                                                    <input type="text" name="elementary" placeholder="Elementary School" onChange={this.handleChange}></input>
                                                </div>

                                                <div class="field">

                                                    <label>Middle School</label>
                                                    <input type="text" name="middle" placeholder="Middle School" onChange={this.handleChange}></input>

                                                </div>

                                                <div class="field">

                                                    <label>High School</label>
                                                    <input type="text" name="high" placeholder="High School" onChange={this.handleChange}></input>

                                                </div>  

                                            </div>


                                        <div class="fields">

                                                <div class="field">
                                                        <label>Image</label>
                                                        <input type="text" name="img" placeholder="jpg. or png." onChange={this.handleChange}></input>
                                                </div>   

                                                <div class="field">
                                                        <label>Image</label>
                                                        <input type="text" name="image" placeholder="jpg. or png." onChange={this.handleChange}></input>
                                                </div>

                                                <div class="field">
                                                    <label>Heating</label>
                                                    <select class="ui compact dropdown" name="heating" onChange={this.handleChange}>
                                                        <option value="null">Y / N</option>
                                                        <option value="true" >Yes</option>
                                                        <option value="false" >No</option>
                                                    </select>
                                                </div>  

                                                <div class="field">
                                                    <label>Cooling</label>
                                                    <select class="ui compact dropdown" name="cooling" onChange={this.handleChange}>
                                                        <option value="null">Y / N</option>
                                                        <option value="true" >Yes</option>
                                                        <option value="false" >No</option>
                                                    </select>
                                                </div>     

                                        </div>

                                        <div class="fields">

                                                <div class="field">
                                                    <label>Parking</label>
                                                    <select class="ui compact dropdown" name="parking" onChange={this.handleChange}>
                                                        <option value="null">Y / N</option>
                                                        <option value="true" >Yes</option>
                                                        <option value="false" >No</option>
                                                    </select>
                                                </div>  

                                                <div class="field">
                                                    <label>Garage</label>
                                                    <select class="ui compact dropdown" name="garage" onChange={this.handleChange}>
                                                        <option value="null">Y / N</option>
                                                        <option value="true" >Yes</option>
                                                        <option value="false" >No</option>
                                                    </select>
                                                </div>  

                                                <div class="field">
                                                    <label>HOA</label>
                                                    <select class="ui compact dropdown" name="hoa" onChange={this.handleChange}>
                                                        <option value="null">Y / N</option>
                                                        <option value="true" >Yes</option>
                                                        <option value="false" >No</option>
                                                    </select>
                                                </div>  

                                                <div class="field">
                                                    <label>Pet Friendly</label>
                                                    <select class="ui compact dropdown" name="petfriendly" onChange={this.handleChange}>
                                                        <option value="null">Y / N</option>
                                                        <option value="true" >Yes</option>
                                                        <option value="false" >No</option>
                                                    </select>
                                                </div>  

                                                <div class="field">
                                                    <label>Size of Pet</label>
                                                    <select class="ui compact dropdown" name="petsize" onChange={this.handleChange}>
                                                        <option value="null">Size</option>
                                                        <option value="Small" >Small</option>
                                                        <option value="Medium" >Medium</option>
                                                        <option value="Large" >Large</option>
                                                    </select>
                                                </div>  

                                            </div>


                                    </div>

                                </div>

                                <FormErrors formErrors={this.state.formErrors}/>
                                
                                <Link to="/account"><p class="redirect-link">Not ready to list your property? </p> </Link>

                                <div class="button-list">
                                    <button class="ui yellow massive button" type="submit" disabled={!this.state.formValid}>Post House</button>
                                </div>
                            </form>

                            <div class="ui vertical divider">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
