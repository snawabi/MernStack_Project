import * as actionTypes from "../actionTypes";

//product calls
//Product Action and Server Call
//when saved in the database then also add,save, or update the productReducer as well
export const saveProduct = (product)=>{
    console.log("in file productAction.js above window.fetch Product ", product);

    return function (dispatch) {
        //dispatch(loading(true));

        //window.fetch - is reacts way to make ajax call to server
        //save into database
        window.fetch("http://localhost:9000/product/api/saveProduct",{
            method: 'POST', //rest method type 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(productresp => productresp.json()) // to convert to json object
        .then((productresp)=>{
            console.log("product save response ", productresp);
            //dispatch(loading(false));
            dispatch(fetchProducts());//fetched database at the time of saving prod.
        })
        .catch((err)=>{
            console.log("Error While Saving Product", err)
        })
    }
};

export const addProduct = (products)=>{
    return {
        type : actionTypes.ADD_PRODUCTS_TOSTORE,
        payload : {products}
    }
}

//fetch the product from server and add to productReducer.js and store makes it available to all.
export const fetchProducts = ()=>{
    console.log("in file productAction.js fetchProducts");

    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9000/product/api/getproducts",{
            method: 'GET' //rest method type             
        })
        .then(productresp => productresp.json())
        .then((productresp)=>{
            console.log("file: productAction.js get products response", productresp);
            //dispatch(loading(false));
            dispatch(addProduct(productresp))
            
        })
        .catch((err)=>{
            console.log("Error While fetching Product", err)
        })
    }
};