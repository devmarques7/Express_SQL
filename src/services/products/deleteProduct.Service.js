import database from "../../database/index.js";

const deleteProductService = async (categoryId) => {
  try {
    const response = await database.query(
      "DELETE FROM products WHERE  id = $1 RETURNING*;",
      [categoryId]
    );

    if (response.rows.length === 0) {
      throw new Error("No product found");
    }

    return {
      message: "Delete is success",
    };
  } catch (error) {
    throw new Error(error);
  }
};

export default deleteProductService;
