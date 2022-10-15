import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.Controller.js";
import deleteCategoryController from "../controllers/categories/deleteCategory.Controller.js";
import listAllCategoriesController from "../controllers/categories/listAllCategories.Controller.js";
import listByIdCategoriesController from "../controllers/categories/listByIdCategories.controller.js";
import updateCategoryController from "../controllers/categories/updateCategory.Controller.js";
import verifyRequestCategory from "../middlewares/categories/verifyRequestCategory.middlewares.js";

const routeCategory = Router();

routeCategory.post("", verifyRequestCategory, createCategoryController);
routeCategory.get("", listAllCategoriesController);
routeCategory.patch("/:id", updateCategoryController);
routeCategory.delete("/:id", deleteCategoryController);
routeCategory.get("/:id", listByIdCategoriesController);

export default routeCategory;
