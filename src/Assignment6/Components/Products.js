
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Prompt } from "react-router-dom";
const Products=()=> {

  const Products=useSelector(state=>state.Products)
   const [touched,setTouched]=useState(false)
  
   console.log(Products)
 const handleTouch=()=>{
     setTouched(true)  
       setTimeout(()=>{
      setTouched(false)
    },2000)
  }
 
  return (
    <>    
    {Products.map((product,index)=>
            <tr key={index}>
            <Prompt when={touched} message="Are you sure, you want to see the Details"/>
              <td><Link to={ "/Products/" + product.Product_Name} onMouseDown={() =>handleTouch()}>{product.Product_Name}</Link></td>
              <td>{product.Quantity}</td>
              <td>${product.Price}</td>
            </tr>
        )
      }
    </>
  );
    
};

export default Products;
