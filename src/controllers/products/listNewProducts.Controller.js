import listNewProductService from "../../services/products/listNewproducts.service.js";

const listNewProductController = async (request, response) => {
  const { id } = request.params;
  const { name, price } = request.body;
  console.log(id);

  try {
    const newProduct = await listNewProductService(name, price, id);

    response.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
};

export default listNewProductController;
