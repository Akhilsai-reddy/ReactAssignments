import React, { Component } from 'react'
import ProductsAPI from './Data/ProductsAPI'
import ProductList from './ProductList'

export default class AllProductsPage extends Component {
    constructor(props){
        super(props)
        this.state={
            Products:[]
        }
    }
    componentDidMount(){
      ProductsAPI.getAllProducts(data => this.setState({Products:data}))
    }
  render() {
    return (
      <div>
        <h1>Products List</h1>
        {this.state.Products.length>0?<ProductList Products={this.state.Products}/>:<h3>Loading........!</h3>}
      </div>
    )
  }
}
