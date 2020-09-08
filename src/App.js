import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MainContainer from './containers/MainContainer';
import Login from './components/Login';
import Signup from './components/Signup';
import ListingForm from './components/ListingForm'
import Slider from './components/Slider'
import UserContainer from './containers/UserContainer'
import ShowContainer from './containers/ShowContainer'
import {BrowserRouter, Route, Redirect} from 'react-router-dom';


export default class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
      logged: false,
      listings: []
    }
  }

  toggleLogged = () => {
    this.setState({
      logged: !this.state.logged
    })
    
  }

  componentDidMount(){
    if(localStorage.token){
      this.setState({
        logged: !this.state.logged
      })
    }

  }

  render() {
    return (
      <BrowserRouter>
      <div class="body">
        <NavBar logged={this.state.logged} toggle={this.toggleLogged} />

            <Route exact path='/' render = {(routeProps) => <Slider {...routeProps}  /> } />

            <Route path='/login' render = {(routeProps) => this.state.logged ? <Redirect to="/listings" /> : 
            <Login {...routeProps} toggle={this.toggleLogged} /> } />

            <Route path='/signup' render = {(routeProps) => this.state.logged ? <Redirect to="/listings" /> : 
            <Signup {...routeProps} toggle={this.toggleLogged} /> } />

            <Route path='/create-listing' render = {(routeProps) => <ListingForm {...routeProps} toggle={this.toggleLogged} /> } />
            <Route path='/account' render = {(routeProps) => <UserContainer {...routeProps} toggle={this.toggleLogged} /> } />
            <Route exact path='/listings' render = {(routeProps) => <MainContainer {...routeProps}  listings={this.state.listing}/> } />
            <Route path='/listings/:id' render = {(routeProps) => <ShowContainer {...routeProps} /> } />
            
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

// MainContainer
//     |
//     |
//     FilterContainer
//     |
//     ListingContainer
