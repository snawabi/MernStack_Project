import * as ActionTypes from "../actionTypes";

export const addItemToCart = (item)=>({
    type: ActionTypes.ADD_ITEM,
    payload: {item} //{item:item}
})

export const emptyTheCart = () => ({
    type: ActionTypes.EMPTY_CART
});

export const removeItem = (id) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: { id }//id: 4
});

export const updateItem = (id, qty) => ({
    type: ActionTypes.UPDATE_ITEM,
    payload: {
        id, //id : 5
        qty: parseInt(qty) // update the quantity
    }
});


//save cart coming from product(cart) DB and userid coming from userReducer DB saved in cart DB.
export const saveCartToDb = (cart, userid)=>{

    console.log("Items To Be Saved", cart); 
    return function(dispatch) {
        //dispatch(loading(true));
        window.fetch("http://localhost:9000/cart/api/saveUserCart",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid, cart:cart})})
        .then (response => response.json())  // to convert to json object
        .then (usercartresponse => {
            console.log("\\\\\\\\\\\\\\response /////////////", usercartresponse.clearCart); //{_id: " ", userid: "", cart:[{_id:"", name:"", price:"", desc:"", rating:""},{..}] }
            //dispatch(loading(false));
        })
        .catch((err)=>{
            //dispatch(loading(false));
            console.log("Error While Saving Cart", err);
        }) 
    }
}

//delete cart from db
export const deleteCartDb = (cart, userid, clearCart)=>{

    console.log("Items To Be Saved", clearCart); 
    return function(dispatch) {
        //dispatch(loading(true));
        window.fetch("http://localhost:9000/cart/api/deleteUserCart",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid, cart:cart, clearCart:clearCart})})
        .then (response => response.json())  // to convert to json object
        .then (usercartresponse => {
            console.log("\\\\\\\\\\\\\\delete response /////////////", usercartresponse.clearCart); //{_id: " ", userid: "", cart:[{_id:"", name:"", price:"", desc:"", rating:""},{..}] }
            //dispatch(loading(false));
        })
        .catch((err)=>{
            //dispatch(loading(false));
            console.log("Error While Saving Cart", err);
        }) 
    }
}



//fetching the user cart when sign in. userid is comming from database from userReducer.js
export const getUserCart = (userid) => {
        
    return function(dispatch) {
        console.log("Get List Of items");
        window.fetch("http://localhost:9000/cart/api/getUserCart",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid})})
        .then (response => response.json())
        .then (usercartresponse => {
            console.log("response - get user cart ", usercartresponse);
            
            dispatch(emptyTheCart()); //remove the duplicacy first empty the cart 
            
            //add cart item one by one into CartReducer.js
            for (const item of usercartresponse.cart) {
                console.log("item in for of", item);
                let action = addItemToCart(item);
                dispatch(action);    
            }                
                       
        })
        .catch((err)=>{
            console.log("Error While Login", err)
        })  
    }       
}