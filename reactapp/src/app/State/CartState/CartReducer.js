import * as ActionTypes from "../actionTypes";

const INITIAL_STATE = [] //instead of object in array we are directly putting array. This way we could manage the cart the way we want to.

export default function CartReducer(state = INITIAL_STATE, action) 
{
    // console.log("cart Reducer state ", state, ":action below ", action.payload);
    // additem, removeitem, updateitem, emptyitem

    switch(action.type) 
    {
        case ActionTypes.ADD_ITEM:
            //checking for duplicate item with _id state=>list of products (cart list)
            //if same item is select twice, not adding to cart
            let newState = state.filter(item => item._id != action.payload.item._id);
            // console.log("CartReducer.js newState ", newState )
            // console.log("CartReducer.js state ", state )

            //checking if quantity is present or not, if no then add default quantity to 1 else do nothing 
           // !action.payload.item["qty"] ? action.payload.item["qty"] = 1 : "";

            //add in INITIAL_STATE = [...newState, action.payload.item]
            return [...newState, action.payload.item];//creating a new state with new item
        
         //to select all the items except the one which we click to remove
        case ActionTypes.REMOVE_ITEM:
            return state.filter(item => item._id!=action.payload.id)

        //empty cart
        case ActionTypes.EMPTY_CART:
            return [];
        
        //update quantity of an item in cart
        case ActionTypes.UPDATE_ITEM:
            return state.map((item)=>{
                if (item._id == action.payload.id) { //update the qty of item we want to update with selected id
                    return {...item, qty:action.payload.qty} //...item means {name, desc, rating, qty, price}
                }
                return item;//for all other items in cart do not update anything
            })
        
        default:
            return state;
    }
}