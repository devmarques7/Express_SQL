import updateCategoryService from "../../services/categories/updateCategory.Service.js";

const updateCategoryController = async (request, response) => {
  const { id } = request.params;
  const updates = request.body;

  try {
    const newUpdate = await updateCategoryService(id, updates);
    response.status(200).json({
      message: "Product updated",
      category: newUpdate,
    });
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
};

export default updateCategoryController;
