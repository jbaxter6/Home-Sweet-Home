import React, { Component } from 'react'
import {APIBASE} from '../constants/apiBase';
import FormErrors from './FormErrors'

export default class OfferForm extends Component {

    state = {
        first_name: '',
        last_name: '',
        phone_num: '',
        email: '',
        offer_price: 0,
        money_down: 0,
        formErrors: {},
        formValid: false
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        }, this.validateForm)
    }

    validateForm = () => {
        let formErrors = {}
        let formValid = true
        if(this.state.first_name.length < 0) {
            formErrors.first_name = ["First name must be present"]
            formValid = false
        }

        else if(this.state.last_name.length < 0) {
            formErrors.last_name = ["Last name must be present"]
            formValid = false
        }

        else if(this.state.phone_num.length <= 9) {
            formErrors.phone_num = ["Phone Number must be at least 10 digits"]
            formValid = false
        }

        else if(!this.state.email.includes("@")) {
            formErrors.email = ["Email must be valid"]
            formValid = false
        }

        else if(this.state.offer_price < 2000) {
            formErrors.email = ["Offer must be greater than $2,000"]
            formValid = false
        }

        this.setState({formValid: formValid, formErrors: formErrors})
    }

    resetFormErrors = () => {
        this.setState({formErrors: {}})
    };

    handleOffer = (e) => {
        e.preventDefault()

        fetch(APIBASE + `/users/${localStorage.userId}/offers`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
            "Authorization": `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            user_id: localStorage.userId,
            listing_id: this.props.listing.id,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            phone_num: this.state.phone_num,
            email: this.state.email,
            offer_price: this.state.offer_price,
            money_down: this.state.money_down,
            loan_app: this.state.loan_app,
        })

        })

        this.resetFormErrors()

        this.props.formToggle()

        e.target.reset()
    }
    
    render() {
        return (
            <div class="ui raised very padded text container segment">
                        <div>
                            <div class='close'>
                                <i class="close large icon" onClick={this.props.formToggle}></i>
                            </div>
                            <div>
                                <h2 class="ui header">Offer Sheet</h2>
                            </div>
                        </div>

                        <form class="ui form" onSubmit={(e) => this.handleOffer(e)}>

                            <div class="fields">
                                <div class="field">

                                    <label> First Name</label>
                                    <input type="text" name="first_name" placeholder="First Name" onChange={this.handleChange}></input>
                            
                                </div>

                                <div class="field">

                                    <label>Last Name</label>
                                    <input type="text" name="last_name" placeholder="Last Name" onChange={this.handleChange}></input>
                            
                                </div>

                                <div class="field">

                                    <label>Phone Number</label>
                                    <input type="text" name="phone_num" placeholder="Phone Number" onChange={this.handleChange}></input>
                            
                                </div>  
                            </div>

                            <div class="fields">

                                <div class="field">
                                    <label>E-mail</label>
                                    <input type="text" name="email" placeholder="E-mail" onChange={this.handleChange}></input>
                                </div>  

                                <div class="field">
                                    <label>Offer Price</label>
                                    <input type="number" name="offer_price" min="0.00" max="10000000.00" step="100.00" onChange={this.handleChange}/>
                                </div>

                                <div class="field">
                                    <label>Money Down</label>
                                    <input type="number" name="money_down" min="0.00" max="600000.00" step="100.00" onChange={this.handleChange}/>
                                </div>

                                <div class="field">
                                    <label>Loan Application</label>
                                    <select class="ui compact dropdown" name="loan_app" onChange={this.handleChange}>
                                        <option value="null">Y / N</option>
                                        <option value="true" >Yes</option>
                                        <option value="false" >No</option>
                                    </select>
                                </div>
                                

                            </div>

                            <FormErrors formErrors={this.state.formErrors}/>

                            <button class="ui yellow button" type="submit" disabled={!this.state.formValid}>Place Your Offer</button>

                        </form>

            </div>
        )
    }
}
