import database from "../../database/index.js";

const listAllproductsService = async () => {
  try {
    const response = await database.query("SELECT * FROM products;", []);

    return response.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default listAllproductsService;
