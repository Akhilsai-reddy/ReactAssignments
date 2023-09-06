import React from 'react'
import Products from './Products'

const ProductsList = (props) => {

  return (
    <>
     <table border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>PRODUCT NAME</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
        {
            props.Products.map((product,index)=>
            <Products key={index} ID={product.ID} Name={product.Product_Name} Quantity={product.Quantity} Price={product.Price}/>)
        }
        </tbody>
     </table>
    </>
  )
}

export default ProductsList