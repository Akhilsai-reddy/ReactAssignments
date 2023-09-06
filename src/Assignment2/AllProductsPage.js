import React, { Component } from 'react'
import ProductAPI from './Data/ProductAPI'
import ProductList from './ProductList'

export default class AllProductsPage extends Component {
    constructor(props){
        super(props)
        this.state={
            Products:[]
        }
    }
    componentDidMount(){
       this.setState({Products:ProductAPI.getAllProducts()})
    }
  render() {
    return (
      <div>
        <h1>Products List</h1>
        <ProductList Products={this.state.Products}/>
      </div>
    )
  }
}
