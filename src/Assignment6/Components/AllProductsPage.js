
import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import ProductsAPI from '../Data/ProductsAPI'
import ACTIONS from './Redux/Actions';
import ProductList from './ProductList'

const  AllProductsPage=()=>  {
   const {GET_ALL_PRODUCTS}=ACTIONS;
    const dispatch=useDispatch()
    useEffect(()=>{
      ProductsAPI.getAllProducts( (data)=>dispatch({type:GET_ALL_PRODUCTS,payload:data}))
    },[])
    return (
      <div>
        <h1>Products List</h1>
       <ProductList/>
        <Link to="/AddProduct">Add Product</Link>
      
      </div>
    )
}

export default AllProductsPage