import listAllCategoriesService from "../../services/categories/listAllCategories.Service.js";

const listAllCategoriesController = async (request, response) => {
  try {
    const products = await listAllCategoriesService();

    response.status(200).json(products);
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
};

export default listAllCategoriesController;
