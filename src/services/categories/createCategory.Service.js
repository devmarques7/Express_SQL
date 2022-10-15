import database from "../../database/index.js";

const createCategoryService = async (name) => {
  try {
    const response = await database.query(
      "INSERT INTO categories(name) VALUES ($1) RETURNING *;",
      [name]
    );

    return response.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default createCategoryService;
