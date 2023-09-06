import React, { useState,useEffect } from 'react'
import ProductsAPI from '../Data/ProductsAPI'
import ProductList from './ProductList'

 const AllProductsPage =()=> {
    const[products,setProducts]=useState([])
    
    useEffect(()=>{
      ProductsAPI.getAllProducts(data => setProducts(data))
    },[])
 
    return (
      <div>
        <h1>Products List (Using functional componets)</h1>
        {products.length>0?<ProductList Products={products}/>:<h3>Loading........!</h3>}
      </div>
    )

}
export default AllProductsPage