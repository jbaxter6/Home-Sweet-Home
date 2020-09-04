import React, { Component } from 'react'
import {APIBASE} from '../constants/apiBase';

export default class OfferForm extends Component {
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

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
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            phone_num: this.state.phoneNum,
            email: this.state.email,
            offer_price: this.state.offerPrice,
            money_down: this.state.moneyDown,
            loan_app: this.state.loanApp,
        })

        })

        e.target.reset()
    }
    
    render() {
        return (
            <div class="ui raised very padded text container segment">
                        <h2 class="ui header">Offer Sheet</h2>

                        <form class="ui form" onSubmit={(e) => this.handleOffer(e)}>

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
                                    <label>E-mail</label>
                                    <input type="text" name="email" placeholder="E-mail" onChange={this.handleChange}></input>
                                </div>  

                                <div class="field">
                                    <label>Offer Price</label>
                                    <input type="number" name="offerPrice" min="0.00" max="10000000.00" step="100.00" onChange={this.handleChange}/>
                                </div>

                                <div class="field">
                                    <label>Money Down</label>
                                    <input type="number" name="moneyDown" min="0.00" max="600000.00" step="100.00" onChange={this.handleChange}/>
                                </div>

                                <div class="field">
                                    <label>Loan Application</label>
                                    <select class="ui compact dropdown" name="loanApp" onChange={this.handleChange}>
                                        <option value="null">Y / N</option>
                                        <option value="true" >Yes</option>
                                        <option value="false" >No</option>
                                    </select>
                                </div>
                                

                            </div>

                            <button class="ui yellow button" type="submit">Place Your Offer</button>

                        </form>

            </div>
        )
    }
}
