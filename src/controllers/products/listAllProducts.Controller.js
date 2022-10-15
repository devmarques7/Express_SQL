import listAllproductsService from "../../services/products/listAllProducts.Service.js";

const listAllproductsController = async (request, response) => {
  try {
    const products = await listAllproductsService();

    response.status(200).json(products);
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
};

export default listAllproductsController;
