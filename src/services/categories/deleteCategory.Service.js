import database from "../../database/index.js";

const deleteCategoryService = async (categoryId) => {
  try {
    const response = await database.query(
      "DELETE FROM categories WHERE  id = $1 RETURNING*;",
      [categoryId]
    );

    if (response.rows.length === 0) {
      throw new Error("No category found");
    }

    return {
      message: "Delete is success",
    };
  } catch (error) {
    throw new Error(error);
  }
};

export default deleteCategoryService;
