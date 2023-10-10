const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChampionSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  role: [{ type: Schema.Types.ObjectId, ref: "Roles", required: true }],
  lane: [{ type: Schema.Types.ObjectId, ref: "Lanes", required: true }],
});

ChampionSchema.virtual("url").get(function () {
  // don't use arrow function as we'll need this object
  return `/catalog/champions/${this._id}`;
});

module.exports = mongoose.model("Champions", ChampionSchema);
