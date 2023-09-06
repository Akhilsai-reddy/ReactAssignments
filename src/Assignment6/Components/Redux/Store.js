import { createStore } from "redux";
import ACTIONS from "./Actions";


const {GET_ALL_PRODUCTS,ADD_PRODUCT}=ACTIONS
const initialState={
  Products:[],
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return {
        Products: action.payload
            }
        case ADD_PRODUCT:
            return{    
              Products:[...state.Products,action.payload]
            }
         
        default :
        return state
    }
}
export const store= createStore(reducer)
export default reducer