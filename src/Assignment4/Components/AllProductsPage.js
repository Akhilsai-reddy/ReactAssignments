import React, { Component } from 'react'
import { Link} from 'react-router-dom';
import { productContext } from './ConetxtApi';
import ProductsAPI from '../Data/ProductsAPI'
import ProductList from './ProductList'

export default class AllProductsPage extends Component {

   Data=false
    
  static contextType=productContext;
    componentDidMount(){
     setTimeout(()=>{
      ProductsAPI.getAllProducts(data =>this.context.ProductsData(data), this.Data=true)
     },300)
    }
  render() {
    return (
      <div>
        <h1>Products List</h1>
       {this.Data?<ProductList/>:<h3>Loading.............</h3>}<br/>
     
        <Link to="/AddProduct">Add Product</Link>
      
      </div>
    )
  }
}
