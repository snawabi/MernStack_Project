let mongoose = require("mongoose"),
Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1/mernstack15");

let RecentOrderSchema = new Schema({
  userid: {type: String, required: true},
  order: [Object],
  date: {type: Date, default: Date.now()}
},
{
  versionKey: false
}
);

let RecentOrderDataModel = mongoose.model("RecentOrder", RecentOrderSchema);
module.exports = RecentOrderDataModel;

