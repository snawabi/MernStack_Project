import axios from "axios";
import { AddUser2ToStoreAction } from "./userActions";

export const user2SaveToDB = (newUser2) => {
  return (dispatch) => {
    axios
      .post("http://localhost:9000/user2/api/signUp", newUser2)
      .then((serverData) => {
        let signUpuser2 = serverData.data;
        // console.log("in file user2SaveToDb.js getting data ", signUpuser2);
        dispatch(AddUser2ToStoreAction(signUpuser2));
      })
      .catch((error) => {
        console.log("eror in file user2SaveToDb.js ", error);
      });
  };
};
