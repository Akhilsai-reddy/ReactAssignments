import React from 'react'
import ProductForm from './ProductForm'
import { productContext } from './ConetxtApi'
import ProductsAPI from '../Data/ProductsAPI'

const AddProduct = (props) => {

  const addProduct=(Product,contextval)=>{
    ProductsAPI.addProduct(Product)
    .then((newProduct)=>{
      contextval.addProduct(newProduct)
    })
    props.history.push('/products')
  }
  return (
    <div>
      <productContext.Consumer>
        {
          (contextval)=>(
            <ProductForm onSubmit={(Product)=>addProduct(Product,contextval)}/>
          )
        }
      </productContext.Consumer>
        
    </div>
  )
}

export default AddProduct