import React from 'react'
import ACTIONS from './Redux/Actions'
import ProductForm from './ProductForm'
import ProductsAPI from '../Data/ProductsAPI'
import { useDispatch } from 'react-redux'

const AddProduct = (props) => {

  const {ADD_PRODUCT}=ACTIONS;
  const dispatch=useDispatch()
  const addProduct=(Product)=>{
    ProductsAPI.addProduct(Product)
     dispatch({type:ADD_PRODUCT,payload:Product})
    props.history.push('/products')
  }
  return (
    <div>
      <>  
         <ProductForm onSubmit={(Product)=>addProduct(Product)}/>       
      </>
        
    </div>
  )
}

export default AddProduct