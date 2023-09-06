import { createContext } from "react";
import React, { Component } from 'react'

export const productContext=createContext();

export default class ConetxtApi extends Component {
    constructor(props){
        super(props)
        this.state={
            Products:[]
        }
    }
   
  render() {
    return (
     <productContext.Provider value={{...this.state,
     ProductsData:(products)=>this.setState({Products:products}),
     addProduct:(product)=>(prevState)=>this.setState({...prevState.Products,Products:product})}}>
        {this.props.children}
     </productContext.Provider>
    
    )
  }
}
