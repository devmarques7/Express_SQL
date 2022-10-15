import listByIdCategoriesService from "../../services/categories/listByIdCategories.Service.js";

const listByIdCategoriesController = async (request, response) => {
  const { id } = request.params;

  try {
    const product = await listByIdCategoriesService(id);

    response.status(200).json(product);
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
};

export default listByIdCategoriesController;
