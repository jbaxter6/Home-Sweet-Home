import React, { Component } from 'react'

export default class OfferForm extends Component {
    render() {
        return (
            <div class="ui raised very padded text container segment">
                        <h2 class="ui header">Offer Sheet</h2>

                        <form class="ui form">

                            <div class="fields">
                                <div class="field">

                                    <label> First Name</label>
                                    <input type="text" name="first-name" placeholder="First Name"></input>
                            
                                </div>

                                <div class="field">

                                    <label>Last Name</label>
                                    <input type="text" name="last-name" placeholder="Last Name"></input>
                            
                                </div>

                                <div class="field">

                                    <label>Phone Number</label>
                                    <input type="text" name="last-name" placeholder="Phone Number"></input>
                            
                                </div>  
                            </div>

                            <div class="fields">

                                <div class="field">
                                    <label>E-mail</label>
                                    <input type="text" name="email" placeholder="E-mail"></input>
                                </div>  

                                <div class="field">
                                    <label>Offer Price</label>
                                    <input type="number" min="0.00" max="10000000.00" step="100.00" />
                                </div>

                                <div class="field">
                                    <label>Money Down</label>
                                    <input type="number" min="0.00" max="600000.00" step="100.00" />
                                </div>

                                <div class="field">
                                    <label>Loan Application</label>
                                    <select class="ui compact dropdown">
                                        <option value=""></option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>
                                

                            </div>

                            <button class="ui yellow button" type="submit">Submit</button>

                        </form>

            </div>
        )
    }
}
