import React, { Component } from 'react'
import './Container.css'

export default class FilterContainer extends Component {
    render() {
        return (

            <div class="filter-cont">

                <h1> Filters <i class="filter icon"></i></h1> 

                <div class="pickone">

                    <div>

                        <div class="pick-label">
                            <label>Property-Type <i class="home icon"></i></label>
                        </div>

                        <select onChange={(e) => this.props.changeFilter(e.target.value)}>
                            <option value="All">All</option>
                            <option value="Single-Family">Single-Family</option>
                            <option value="Condominium">Condominium</option>
                            <option value="Townhouse">Townhouse</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Land">Land</option>
                        </select>
                    </div>

                    <div class="ui clearing divider"></div>


                    <div>

                        <div class="pick-label">
                            <label>Condition <i class="home icon"></i></label>
                        </div>

                        <select onChange={(e) => this.props.changeCond(e.target.value)}>
                            <option value="All">All</option>
                            <option value="New">New</option>
                            <option value="Vintage">Vintage</option>
                            <option value="Fixer-Upper">Fixer-Upper</option>
                        </select>
                    </div>

                    <div class="ui clearing divider"></div>

                    <div>

                        <div class="pick-label">
                            <label>State <i class="flag icon"></i></label>
                        </div>

                        <select onChange={(e) => this.props.changeState(e.target.value)}>
                            <option value="All">All</option>
                            <option value="Alabama">Alabama</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Arizona">Arizona</option>
                            <option value="Arkansas">Arkansas</option>
                            <option value="California">California</option>
                            <option value="Colorado">Colorado</option>
                            <option value="Connecticut">Connecticut</option>
                            <option value="Deleware">Delaware</option>
                            <option value="District Of Colombia">District Of Columbia</option>
                            <option value="Florida">Florida</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Hawaii">Hawaii</option>
                            <option value="Idaho">Idaho</option>
                            <option value="Illinois">Illinois</option>
                            <option value="Indiana">Indiana</option>
                            <option value="Iowa">Iowa</option>
                            <option value="Kansas">Kansas</option>
                            <option value="Kentucky">Kentucky</option>
                            <option value="Louisiana">Louisiana</option>
                            <option value="Maine">Maine</option>
                            <option value="Maryland">Maryland</option>
                            <option value="Massachusetts">Massachusetts</option>
                            <option value="Michigan">Michigan</option>
                            <option value="Minnesota">Minnesota</option>
                            <option value="Mississippi">Mississippi</option>
                            <option value="Missouri">Missouri</option>
                            <option value="Montana">Montana</option>
                            <option value="Nebraska">Nebraska</option>
                            <option value="Nevada">Nevada</option>
                            <option value="New Hampshire">New Hampshire</option>
                            <option value="New Jersey">New Jersey</option>
                            <option value="New Mexico">New Mexico</option>
                            <option value="New York">New York</option>
                            <option value="North Carolina">North Carolina</option>
                            <option value="North Dakota">North Dakota</option>
                            <option value="Ohio">Ohio</option>
                            <option value="Oklahoma">Oklahoma</option>
                            <option value="Oregon">Oregon</option>
                            <option value="Pennsylvania">Pennsylvania</option>
                            <option value="Rhode Island">Rhode Island</option>
                            <option value="South Carolina">South Carolina</option>
                            <option value="South Dakota">South Dakota</option>
                            <option value="Tennessee">Tennessee</option>
                            <option value="Texas">Texas</option>
                            <option value="Utah">Utah</option>
                            <option value="Vermont">Vermont</option>
                            <option value="Virginia">Virginia</option>
                            <option value="Washington">Washington</option>
                            <option value="West Virginia">West Virginia</option>
                            <option value="Wisconsin">Wisconsin</option>
                            <option value="Wyoming">Wyoming</option>  
                        </select>
                    </div>

                </div>

                

                <div class="on-and-off-filter">

                    <div class="tog">
                        <div class="ui toggle yellow checkbox">
                            <input type="checkbox" value="sale" checked={this.props.sale} onChange={(e) => this.props.sortSale(e.target.checked)}></input>
                            <label>For-Sale</label>
                        </div>
                    </div>

                    <div class="ui clearing divider"></div>

                    <div class="tog">
                        <div class="ui toggle yellow checkbox">
                            <input type="checkbox" value="rent" checked={this.props.rent} onChange={(e) => this.props.sortRent(e.target.checked)}></input>
                            <label>For-Rent</label>
                        </div>
                    </div>

                    <div class="ui clearing divider"></div>

                    <div class="tog">
                        <div class="ui toggle yellow checkbox">
                            <input type="checkbox" value="pet" checked={this.props.pet} onChange={(e) => this.props.sortPet(e.target.checked)}></input>
                            <label>Pet-friendly</label>
                        </div>
                    </div>

                    <div class="ui clearing divider"></div>


                    <div class="tog">
                        <div class="ui toggle yellow checkbox">
                            <input type="checkbox" value="parking" checked={this.props.parking} onChange={(e) => this.props.sortPark(e.target.checked)}></input>
                            <label>Parking</label>
                        </div>
                    </div>

                    <div class="ui clearing divider"></div>


                    <div class="tog">
                        <div class="ui toggle yellow checkbox">
                            <input type="checkbox" value="garage" checked={this.props.garage} onChange={(e) => this.props.sortGarage(e.target.checked)}></input>
                            <label>Garage</label>
                        </div>
                    </div>

                    <div class="ui clearing divider"></div>


                    <div class="tog">
                        <div class="ui toggle checkbox">
                            <input type="checkbox" value="heating" checked={this.props.heat} onChange={(e) => this.props.sortHeat(e.target.checked)}></input>
                            <label>Heating</label>
                        </div>
                    </div>

                    <div class="ui clearing divider"></div>

                    
                    <div class="tog">
                        <div class="ui toggle checkbox">
                            <input type="checkbox" value="ac" checked={this.props.ac} onChange={(e) => this.props.sortAc(e.target.checked)}></input>
                            <label>Cooling</label>
                        </div>
                    </div>

                    <div class="ui clearing divider"></div>


                    <div class="tog">
                        <div class="ui toggle yellow checkbox">
                            <input type="checkbox" value="hoa" checked={this.props.hoa} onChange={(e) => this.props.sortHoa(e.target.checked)}></input>
                            <label>HOA</label>
                        </div>
                    </div>


                </div>

            </div>

        )
    }
}
