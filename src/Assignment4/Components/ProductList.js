import React from "react";
import Products from "./Products";

function ProductsList(){
  

    return (
      <>
        <table border={2}>
          <thead>
            <tr>
              <th>PRODUCT NAME</th>
              <th>QUANTITY</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody>
            <Products/>
          </tbody>
        </table>
      </>
    );
  
}

export default ProductsList;
