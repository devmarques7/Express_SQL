import database from "../../database/index.js";

const listByIdCategoriesService = async (categoryId) => {
  try {
    const response = await database.query(
      "SELECT * FROM categories WHERE  id = $1;",
      [categoryId]
    );

    if (response.rows.length === 0) {
      throw new Error("No category found");
    }

    return response.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default listByIdCategoriesService;
