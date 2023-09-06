import React from 'react'
import { Link } from 'react-router-dom'

class ProdDetails extends React.Component {

  render(){
  return (
    <div>
      <h1>Product Details:</h1>
      <h4>Product Name:-  {this.props.match.params.Product_Name}</h4>
      <Link to='/Products'>Back</Link>
    </div>
  )
}
}

export default ProdDetails