import React, { Component } from 'react'

export default class FilterContainer extends Component {
    render() {
        return (
            <div className="ui right visible sidebar">
                <h1> Filters</h1> 

                <label>Property-Type <i class="home icon"></i></label>
                <select onChange={(e) => this.props.changeFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Single-Family">Single-Family</option>
                    <option value="Condominium">Condominium</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Land">Land</option>
                </select>

                <label>Condition <i class="home icon"></i></label>
                <select onChange={(e) => this.props.changeCond(e.target.value)}>
                    <option value="All">All</option>
                    <option value="New">New</option>
                    <option value="Vintage">Vintage</option>
                    <option value="Fixer-Upper">Fixer-Upper</option>
                </select>

                <div class="ui toggle checkbox">
                    <input type="checkbox" value="parking" checked={this.props.parking} onChange={(e) => this.props.sortPark(e.target.checked)}></input>
                    <label>Parking</label>
                </div>

                <div class="ui toggle checkbox">
                    <input type="checkbox" value="heating" checked={this.props.heat} onChange={(e) => this.props.sortHeat(e.target.checked)}></input>
                    <label>Heating</label>
                </div>

                <div class="ui toggle checkbox">
                    <input type="checkbox" value="ac" checked={this.props.ac} onChange={(e) => this.props.sortAc(e.target.checked)}></input>
                    <label>Air-Conditioning</label>
                </div>

            </div>
        )
    }
}
