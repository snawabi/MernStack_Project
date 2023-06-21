function User(lname, fname, id){
  return {lname, fname, id}
}

function GetUserInfo(callback, param1, param2, param3){
  console.log(callback(param1, param2, param3))
}

GetUserInfo(User,"James", "Gomez", 1234)