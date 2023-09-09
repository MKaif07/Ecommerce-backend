const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const cartSchema = new Schema({
  qunatity: { type: Number, required: true },
//   ref -> Product Schema 
// we can fetch product using this object
productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
//   ref -> User Schema 
// we can fetch user using this object
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const virtual = cartSchema.virtual("id");

virtual.get(function () {
  return this._id;
});

cartSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Product = mongoose.model("Product", cartSchema);
