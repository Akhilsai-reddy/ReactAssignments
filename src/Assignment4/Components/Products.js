
import React, { Component } from "react";
import { Link, Prompt } from "react-router-dom";
import { productContext } from "./ConetxtApi";
class Products extends Component {

  constructor(props){
   super(props)
   this.state={
    touched:false
   }
  }
  render()
  {
  return (
    <productContext.Consumer>
      {(contextVal) =>
        contextVal.Products.map((product, index) => (
          
            <tr key={index}>
            <Prompt when={this.state.touched} message="Are you sure, you want to see the Details"/>
              <td><Link to={ "/Products/" + product.Product_Name} onMouseDown={() =>this.setState({touched:true})}>{product.Product_Name}</Link></td>
              <td>{product.Quantity}</td>
              <td>${product.Price}</td>
            </tr>
        ))
      }
    </productContext.Consumer>
  );
    }
};

export default Products;
