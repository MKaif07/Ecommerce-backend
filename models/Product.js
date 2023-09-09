const mongoose = require("mongoose");
const { Schema } = mongoose;

// Schema
const productSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  // min[0 -> min value, 'wrong min price' -> err message]
  discountPercentage: {
    type: Number,
    min: [0, "wrong min discount"],
    max: [100, "wrong max discount"],
    required: true,
  },
  price: {
    type: Number,
    min: [1, "wrong min price"],
    max: [10000, "wrong max price"],
    required: true,
  },
  rating: {
    type: Number,
    min: [0, "wrong min rating"],
    max: [5, "wrong max rating"],
    required: true,
    default: 0,
  },
  stock: {
    type: Number,
    min: [0, "wrong min stock"],
    required: true,
    default: 0,
  },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: { type: [String], required: true },
  deleted: { type: Boolean, default: false },
});

const virtual = productSchema.virtual("id");

virtual.get(function () {
  return this._id;
});

productSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Product = mongoose.model("Product", productSchema);
