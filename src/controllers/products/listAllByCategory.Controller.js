import listAllByCategoryService from "../../services/products/listAllByCategory.Service.js";

const listAllByCategoryController = async (request, response) => {
  const { id } = request.params;

  try {
    const ByCategory = await listAllByCategoryService(id);

    response.status(200).json(ByCategory);
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
};

export default listAllByCategoryController;
