import * as actionTypes from "../actionTypes";

const initialState = {
  User: {
    userName: "",
    password: "",
    street: "",
    mobile: 0,
  },

  User2: {
    email: "James@yahoo.com",
    password: "myPassword",
    address: "myAddress",
    city: "Manteca",
    state: "CA",
    zip: 98732,
  },

  // Product: {
  //   name: "Potatoe",
  //   price: 1.99,
  //   description: "good product",
  //   rating: 4,
  // },
};

const userReducer = (state = initialState, action) => {
  //console.log("We are in user userReducer with action ", action);

  switch (action.type) {
    case actionTypes.AddUserToStore:
      return { ...state, User: action.payload }; //action.payload is new user that we need do return in newstate

    case actionTypes.AddUser2ToStore:
      return { ...state, User2: action.payload };
    // case actionTypes.AddProductToStore:
    //   return { ...state, Product: action.payload };

    case actionTypes.USER_LOGOUT:
      return {};
      
    default:
      return state;
      break;
  }
};

export default userReducer;
