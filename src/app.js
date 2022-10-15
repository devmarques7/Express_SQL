import express from "express";
import "dotenv/config";

import { startDatabase } from "./database/index.js";

import routeProduct from "./router/products.routes.js";
import routeCategory from "./router/category.routes.js";

const app = express();

app.use(express.json());

app.use("/products", routeProduct);
app.use("/categories", routeCategory);

const PORT = process.env.PORT || 2509;
const DB_PORT = process.env.DB_PORT || 5423;

export default app.listen(PORT, () => {
  console.log(`Server running at port ${PORT} S3-17`);
  startDatabase();
  console.log(`Database running at port ${DB_PORT} S3-17`);
});
