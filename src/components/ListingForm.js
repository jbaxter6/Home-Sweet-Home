import React, { Component } from 'react'
import {APIBASE} from '../constants/apiBase'

export default class ListingForm extends Component {

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCreatedListing = (e) => {
        e.preventDefault()

    //     fetch(APIBASE + `/users/${localStorage.userId}/offers`, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "accept": "application/json",
    //         "Authorization": `Bearer ${localStorage.token}`
    //     },
    //     body: JSON.stringify({
    //         user_id: localStorage.userId,
    //         first_name: this.state.firstName,
    //         last_name: this.state.lastName,
    //         phone_num: this.state.phoneNum,
    //         email: this.state.email,
    //         offer_price: this.state.offerPrice,
    //         money_down: this.state.moneyDown,
    //         loan_app: this.state.loanApp,
    //     })

    //     })

    //     e.target.reset()
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
