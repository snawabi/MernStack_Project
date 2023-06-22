let mongoose = require("mongoose"),
Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1/mernstack15");

let CancelOrderSchema = new Schema ({
  userid: {type: String, required: true},
  cancelOrder: [Object],
  date: {type: Date, default: Date.now()}
  },
  {
    versionKey: false
  }
);

let CancelOrderDataModel = mongoose.model("CancelledOrder", CancelOrderSchema);
module.exports = CancelOrderDataModel;