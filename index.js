const express = require("express");
const server = express();
const mongoose = require("mongoose");
const cors = require("cors");

const { createProduct } = require("./controllers/Product");
const productsRouters = require("./routes/Products");
const categoriesRouter = require("./routes/Categories");
const brandsRouter = require("./routes/Brands");
const usersRouter = require("./routes/User");
const authRouter = require("./routes/Auth");
const cartRouter = require("./routes/Cart");
const ordersRouter = require("./routes/Order");
// middlewares
server.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
server.use(express.json());
server.use("/products", productsRouters.router);
server.use("/categories", categoriesRouter.router);
server.use("/brands", brandsRouter.router);
server.use("/users", usersRouter.router);
server.use("/auth", authRouter.router);
server.use("/cart", cartRouter.router);
server.use("/order", ordersRouter.router);

// main().catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect("");
//   console.log("database connected");
// }

server.get("/", (req, res) => {
  res.json({ status: "success" });
});

server.post("/products", (req, res) => {
  res.json({ status: "success" });
});
server.post("/products", createProduct);

server.listen(8080, () => {
  console.log("server started");
});
