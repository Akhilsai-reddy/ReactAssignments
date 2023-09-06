import React from 'react'

const Product = ({ID,Name,Quantity,Price}) => {
  return (
   
        <tr>
            <td>{ID}</td>
            <td>{Name}</td>
            <td>{Quantity}</td>
            <td>{Price}</td>
        </tr>
   
  ) 
}

export default Product