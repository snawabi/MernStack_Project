let mongoose = require("mongoose"),
Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1/mernstack15");

let ReviewSchema = new Schema ({
  name: {type: String, require: true},
  rating: {type: String, require: true},
  comment: {type: String}
},
{
  versionKey: false
});

let ReviewModel = mongoose.model("review", ReviewSchema);
module.exports = ReviewModel;