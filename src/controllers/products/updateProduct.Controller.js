import updateProductService from "../../services/products/updateProduct.Service.js";

const updateProductController = async (request, response) => {
  const { id } = request.params;
  const updates = request.body;

  try {
    const newUpdate = await updateProductService(id, updates);
    response.status(200).json({
      message: "Product updated",
      product: newUpdate,
    });
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
};

export default updateProductController;
