import database from "../../database";

const listAllCategoriesService = async () => {
  try {
    const response = await database.query("SELECT * FROM categories", []);

    return response.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default listAllCategoriesService;
