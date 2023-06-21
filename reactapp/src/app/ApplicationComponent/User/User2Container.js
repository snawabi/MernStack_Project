import User2 from "./User2Component";
import { connect } from "react-redux";
import { AddUser2ToStoreAction } from "../../State/UserState/userActions";
import { user2SaveToDB } from "../../State/UserState/user2SaveToDb";

let mapStateToprop = (state) => {
  return {
    User2: state.userReducer.User2,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addUser2: (newuser2) => {
      dispatch(AddUser2ToStoreAction(newuser2));
    },

    signUpNewUser2: (newUser2) => {
      dispatch(user2SaveToDB(newUser2));
    },
  };
};

export default connect(mapStateToprop, mapDispatchToProps)(User2);
