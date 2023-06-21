// import axios from "axios";
// import { AddProductToStoreAction } from "./userActions";

// export const productSaveToDB = (newProduct) => {
//   return (dispatch) => {
//     axios
//       .post("http://localhost:9000/product/api/productlist", newProduct)
//       .then((productData) => {
//         let addProductList = productData.data;
//         console.log(
//           "product added in file productSaveToDb.js ",
//           addProductList
//         );
//         dispatch(AddProductToStoreAction(addProductList));
//       })
//       .catch((error) => {
//         console.log("error could not send to Db ", error);
//       });
//   };
// };
