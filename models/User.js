const mongoose = require("mongoose");
const { Schema } = mongoose;

// Schema
const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {type:String, required:true, default: 'user'},
  // we can make separate schema for this
  address: { type: [Schema.Types.Mixed] },
  name: { type: String },
  orders: { type: [Schema.Types.Mixed] },
});

const virtual = userSchema.virtual("id");

virtual.get(function () {
  return this._id;
});

userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Brand = mongoose.model("Brand", userSchema);
