import database from "../../database/index.js";

const listByIdProductsService = async (productId) => {
  try {
    const response = await database.query(
      "SELECT * FROM products WHERE  id = $1;",
      [productId]
    );

    if (response.rows.length === 0) {
      throw new Error("No product found");
    }
    return response.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default listByIdProductsService;
