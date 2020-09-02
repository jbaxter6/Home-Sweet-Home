import React, { Component } from 'react'
import './Container.css'
import ListingContainer from './ListingContainer';
import FilterContainer from './FilterContainer';
import {APIBASE} from '../constants/apiBase';

export default class MainContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            listings: [],
            filterBy: 'All',
            filterCond: 'All',
            parking: false,
            heating: false,
            ac: false
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

    sortPark = (value) => {
        this.setState({
            parking: value
        })
    }

    sortHeat = (value) => {
        this.setState({
            heating: value
        })
    }

    sortAc = (value) => {
        this.setState({
            ac: value
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

        return this.filterParking(listings)
    }

    filterParking = (listings) => {
        let filterpark = this.state.parking

        if(filterpark === true)
            listings = listings.filter(listing => listing.parking === filterpark)

        return this.filterHeat(listings)
    }

    filterHeat = (listings) => {
        let filterHeat = this.state.heating

        if(filterHeat === true)
            listings = listings.filter(listing => listing.heating === filterHeat)

        return this.filterAc(listings)
    }

    filterAc = (listings) => {
        let filterAc = this.state.ac

        if(filterAc === true)
            listings = listings.filter(listing => listing.cooling === filterAc)

        return listings
    }
    
    render() {
        return (
            <div class="list-filt-container">
                {/* <div class="ui raised padded container segment"> */}
                <FilterContainer 
                changeFilter={this.changePropType} 
                changeCond={this.changeCond} 
                sortPark={this.sortPark}
                sortHeat={this.sortHeat}
                sortAc={this.sortAc}
                parking={this.state.parking}
                heating={this.state.heating}
                ac={this.state.ac}
                />

                <ListingContainer listings={this.filterListings()} />
            
                {/* </div> */}
            </div>

        )
    }
}
