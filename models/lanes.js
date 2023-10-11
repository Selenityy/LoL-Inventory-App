const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LaneSchema = new Schema({
  champion: { type: Schema.Types.ObjectId, ref: "Champion" },
  lane: {
    type: String,
    enum: ["Top", "Jungle", "Mid", "Bot", "Support"],
  },
});

LaneSchema.virtual("url").get(function () {
  // don't use arrow function as we'll need this object
  return `/catalog/lanes/${this._id}`;
});

module.exports = mongoose.model("Lanes", LaneSchema);
