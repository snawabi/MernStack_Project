//here we will define all the action types to be used in reducers and actions
//action type
export const AddUserToStore = "USER.ADDUSERTOSTORE";
export const USER_LOGOUT = "USER_LOGOUT";
export const AddUser2ToStore = "USER2.ADDUSERTOSTORE";
//export const AddProductToStore = "PRODUCT.ADDPRODUCTTOSTORE";

//Product Action Types
export const ADD_PRODUCTS_TOSTORE = "PRODUCT.ADD_PRODUCTS_TOSTORE";
export const FETCH_PRODUCTS_FULFILLED = "PRODUCT.FETCH_PRODUCTS_FULFILLED";
export const FETCH_PRODUCTS_REJECTED = "PRODUCT.FETCH_PRODUCTS_REJECTED";

//For Cart //action types for cart operations
export const ADD_ITEM = "CART.ADD_ITEM";
export const REMOVE_ITEM = "CART.REMOVE_ITEM";
export const UPDATE_ITEM = "CART.UPDATE_ITEM";
export const EMPTY_CART = "CART.EMPTY_CART";

//Coupon Action Types
export const ADD_COUPAN = "COUPAN.ADD_COUPAN";

//Recent Order Action Types
export const ADD_PAID_ITEM = "RECENTORDER.ADD_PAID_ITEM";
export const UPDATE_PAID_ORDER = "RECENTORDER.UPDATE_PAID_ORDER"
export const REMOVE_PAID_ITEM = "RECENTORDER.REMOVE_PAID_ITEM";
export const EMPTY_PAID_ITEM = "RECENTORDER.EMPTY_PAID_ITEM";
export const ORDER_DATE = "RECENTORDER.ORDER_DATE";

//Cancel Order Action Types
export const ADD_CANCEL_ORDER = "CANCELORDER.ADD_CANCEL_ORDER";
export const CANCEL_ORDER_DATE = "CANELORDER.CANCEL_ORDER_DATE";
export const REMOVE_ORDER = "CANCELORDER.CANCEL_REMOVE_ORDER";
export const EMPTY_CANCEL_ORDER_CART = "CANCELORDER.EMPTY_ORDER_CART";

//Customer Review
export const ADD_REVIEW = "REVIEW.ADD_REVIEW";
export const EMPTY_CART_REVIEW = "REVIEW.EMPTY_CART_REVIEW";