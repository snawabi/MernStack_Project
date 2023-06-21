import * as actionTypes from "../actionTypes";

let INITIAL_STATE = {
    products:[],
    defaultProduct : {
        name : "Product Name",
        price : 1,
        desc : "Product Description",
        rating : "Product Rating",
        qty : 1
    }
}

export default function ProductReducer(state=INITIAL_STATE, action)
{
    //console.log("We are in ProductReducer reducer with action ", action.payload);
    switch (action.type) {        

        case actionTypes.ADD_PRODUCTS_TOSTORE :
            //..state - products[] and defaultProduct
            return { ...state, products : action.payload.products } //we update products and then retrun a new state

        // case ActionTypes.FETCH_PRODUCTS_FULFILLED:            
        //     return {...state, products:action.payload};

        default:
            return state;
    }
}