import { Router } from "express";

import listNewProductController from "../controllers/products/listNewProducts.Controller.js";
import listAllproductsController from "../controllers/products/listAllProducts.Controller.js";
import updateProductController from "../controllers/products/updateProduct.Controller.js";
import listByIdProductsController from "../controllers/products/listByIdProduct.controller.js";
import deleteProductController from "../controllers/products/deleteProduct.Controller.js";
import listAllByCategoryController from "../controllers/products/listAllByCategory.Controller.js";

import verifyRequestProducts from "../middlewares/products/verifyRequest.middlewares.js";

const routeProduct = Router();

routeProduct.get("", listAllproductsController);
routeProduct.patch("/:id", updateProductController);
routeProduct.post("/:id", verifyRequestProducts, listNewProductController);
routeProduct.get("/:id", listByIdProductsController);
routeProduct.delete("/:id", deleteProductController);
routeProduct.get("/category/:id", listAllByCategoryController);

export default routeProduct;
