import React, { Component } from 'react'
import AllProductsPage from './AllProductsPage'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Navbar from './Navbar'
import About from './About'
import './App.css'
export default class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/' element={<About/>}/>
          <Route path='/Products' element={<AllProductsPage/>}/>
        </Switch>
        </BrowserRouter>
     
      </div>
    )
  }
}
