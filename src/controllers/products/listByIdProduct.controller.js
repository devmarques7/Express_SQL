import listByIdProductsService from "../../services/products/listByIdProducts.Service.js";

const listByIdProductsController = async (request, response) => {
  const { id } = request.params;

  try {
    const product = await listByIdProductsService(id);

    response.status(200).json(product);
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
};

export default listByIdProductsController;
