import React, { Component } from 'react'
import AllProductsPage from './AllProductsPage'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Navbar from './Navbar'
import About from './About'
import './App.css'
import ConetxtApi from './ConetxtApi'
import AddProduct from './AddProduct'
import ProdDetails from './ProdDetails'
export default class App extends Component {

  render() {
    return (
      <ConetxtApi>
        <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={About}/>
          <Route exact path='/AddProduct' component={AddProduct}/>
          <Route exact path='/Products' render={()=><AllProductsPage/>}/>
          <Route exact path='/Products/:Product_Name' component={ProdDetails}/>
        </Switch>
        </BrowserRouter>
      </ConetxtApi>
    )
  }
}
