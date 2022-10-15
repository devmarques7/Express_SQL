import deleteProductService from "../../services/products/deleteProduct.Service.js";

const deleteProductController = async (request, response) => {
  const { id } = request.params;

  try {
    const deleteResponse = await deleteProductService(id);

    return response.status(204).json(deleteResponse);
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
};

export default deleteProductController;
