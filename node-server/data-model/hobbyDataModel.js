const mongoose = require("mongoose");
const schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1/mernstack15");

let HobbySchema = new schema({
  hobby: String
},
{
  versionKey: false
});

let HobbyDataModel = mongoose.model("hobby", HobbySchema);
export default HobbyDataModel;

