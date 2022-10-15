import deleteCategoryService from "../../services/categories/deleteCategory.Service.js";

const deleteCategoryController = async (request, response) => {
  const { id } = request.params;

  try {
    const reponse = await deleteCategoryService(id);

    response.status(204).json(reponse);
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
};

export default deleteCategoryController;
