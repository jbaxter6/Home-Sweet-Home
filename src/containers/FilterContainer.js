import React, { Component } from 'react'
import './Container.css'

export default class FilterContainer extends Component {
    render() {
        return (

            <div class="filter-cont">

                <h1> Filters</h1> 

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

                </div>

                <div class="on-and-off-filter">

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
