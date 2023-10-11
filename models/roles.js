const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  champion: { type: Schema.Types.ObjectId, ref: "Champion" },
  role: {
    type: String,
    enum: ["Assassins", "Fighters", "Mages", "Marksmen", "Supports", "Tanks"],
  },
});

RoleSchema.virtual("url").get(function () {
  // don't use arrow function as we'll need this object
  return `/catalog/roles/${this._id}`;
});

module.exports = mongoose.model("Roles", RoleSchema);
