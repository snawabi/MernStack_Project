import React from "react";
import { useSelector } from "react-redux";
import DisplayProduct from "./DisplayProduct";
import SaveProductComponent from "./SaveProductComponent";
import userReducer from './../../State/UserState/userReducer';


let ProductComponent = () => {

    let userName = useSelector((state)=>state.userReducer.User.userName)

    return(
        <>
         {userName == "admin" ?
            <>
                <SaveProductComponent />
                <DisplayProduct />
            </>      
         :
            <DisplayProduct />
         }
         
        </>
    )
}

export default ProductComponent;