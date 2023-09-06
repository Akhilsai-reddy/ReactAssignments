import axios from "axios"


export default class ProductsAPI{
 
    static getAllProducts(cb){       
             axios.get('http://localhost:3001/Product')
             .then(Response => cb(Response.data))
             .catch(error =>{throw error});     
    }
}