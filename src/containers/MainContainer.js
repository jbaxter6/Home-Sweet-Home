import React, { Component } from 'react'
import './Container.css'
import ListingContainer from './ListingContainer';
import FilterContainer from './FilterContainer';
import Pagination from '../components/Pagination'
import {APIBASE} from '../constants/apiBase';



export default class MainContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            listings: [],
            loading: false,
            currentPage: 1,
            listingsPerPage: 12,
            

            filterBy: 'All',
            filterCond: 'All',
            filterState: 'All',

            parking: false,
            heating: false,
            ac: false,
            pet: false,
            hoa: false,
            garage: false,

        }
    }

    componentDidMount(){
        
        fetch(APIBASE + '/listings')
        .then(resp => resp.json())
        .then(listings => this.setState({
            listings: listings,
        }))

    }

    // Switch pages of listings


    nextPageClick = () => {
        window.scrollTo(0, 0)
    }

    paginate = (pageNumber) => {
        window.scrollTo(0, 0)
        this.setState({
            currentPage: pageNumber
        })
    }


    // Affect state

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

    changeState = (value) => {
        this.setState({
            filterState: value
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

    sortPet = (value) => {
        this.setState({
            pet: value
        })
    }

    sortHoa = (value) => {
        this.setState({
            hoa: value
        })
    }

    sortGarage = (value) => {
        this.setState({
            garage: value
        })
    }


    // filter and sort based on state

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

        return this.filterPet(listings)
    }

    filterPet = (listings) => {
        let filterPet = this.state.pet

        if(filterPet === true)
            listings = listings.filter(listing => listing.pet_friendly === filterPet)

        return this.filterGarage(listings)
    }

    filterGarage = (listings) => {
        let filterGarage = this.state.garage

        if(filterGarage === true)
            listings = listings.filter(listing => listing.garage === filterGarage)

        return this.filterHoa(listings)
    }

    filterHoa = (listings) => {
        let filterHoa = this.state.hoa

        if(filterHoa === true)
            listings = listings.filter(listing => listing.hoa === filterHoa)

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
        
        if(filterAc === true){
            listings = listings.filter(listing => listing.cooling === filterAc)
        }

        console.log(listings)
        return listings
    }
    

    render() {

        let indexOfLastListing = this.state.currentPage * this.state.listingsPerPage
        let indexOfFirstListing = indexOfLastListing - this.state.listingsPerPage

        let houses = this.filterListings(this.state.listings)
        console.log(houses)

        let currentListings = houses.slice(indexOfFirstListing, indexOfLastListing);


        return (
            <div class="list-filt-container">
                {/* <div class="ui raised padded container segment"> */}
                <FilterContainer 
                changeFilter={this.changePropType} 
                changeCond={this.changeCond} 
                sortPark={this.sortPark}
                sortHeat={this.sortHeat}
                sortAc={this.sortAc}
                sortPet={this.sortPet}
                sortHoa={this.sortHoa}
                sortGarage={this.sortGarage}

                parking={this.state.parking}
                heating={this.state.heating}
                ac={this.state.ac}
                pet={this.state.pet}
                hoa={this.state.hoa}
                garage={this.state.garage}
                />

                <ListingContainer 
                listings={currentListings} 
                currentPage={this.state.currentPage}
                listingsPerPage={this.state.listingsPerPage}
                totalListings={houses.length} 
                paginate={this.paginate}
                />
            
            </div>

        )
    }
}
