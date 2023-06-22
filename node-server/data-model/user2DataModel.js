let mongoose = require("mongoose");
let schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1/mernstack15");

let user2Schema = new schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: String,
    city: String,
    state: String,
    zip: String,
  },
  {
    versionKey: false,
  }
);

let user2Model = mongoose.model("user2", user2Schema);
module.exports = user2Model;
