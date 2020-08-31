import React, { Component } from 'react'
import ListingContainer from './ListingContainer';
import FilterContainer from './FilterContainer';
import {APIBASE} from '../constants/apiBase';

export default class MainContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            listings: [],
            filterBy: 'All',
            filterCond: 'All'
        }
    }

    componentDidMount(){
        fetch(APIBASE + '/listings')
        .then(resp => resp.json())
        .then(listings => this.setState({listings}))
    }

    changePropType = (value) => {
        this.setState({
            filterBy: value
        })
    }

    changeCond = (value) => {
        this.setState({
            filterCond: value
        })
    }

    filterListings = () => {
        let listings = [...this.state.listings]
        let filterProp = this.state.filterBy
    
        if(filterProp !== "All")
           listings = listings.filter(listing => listing.type_of_house === filterProp)

        return this.filterCond(listings)
    }

    filterCond = (listings) => {
        let filterCond = this.state.filterCond
        if(filterCond !== "All")
            listings = listings.filter(listing => listing.condition === filterCond)
            
        return listings
    }
    
    render() {
        return (
            <div class="main-container">
                <FilterContainer changeFilter={this.changePropType} changeCond={this.changeCond} />
                <ListingContainer listings={this.filterListings()} />
            </div>
        )
    }
}
