import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ListingContainer from './containers/ListingContainer'
import Login from './components/Login'
import Signup from './components/Signup';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {APIBASE} from './constants/apiBase'

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

  // componentDidMount(){
  //   fetch(APIBASE + '/listings')
  //   .then(resp => resp.json())
  //   .then(records => this.setState({records}))
  // }

  render() {
    return (
      <BrowserRouter>
        <div>
         <NavBar logged={this.state.logged} toggle={this.toggleLogged} />
         <Switch>
            <Route path='/login' render = {(routeProps) => <Login {...routeProps} toggle={this.toggleLogged} /> } />
            <Route path='/signup' render = {(routeProps) => <Signup {...routeProps} toggle={this.toggleLogged} /> } />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
