import database from "../../database/index.js";

const listAllByCategoryService = async (categoryId) => {
  try {
    const response = await database.query(
      `SELECT pro.name, pro.price, ca.name category 
        FROM products pro
        JOIN categories ca ON ca.id = pro.category_id 
        WHERE  pro.category_id = $1;`,
      [categoryId]
    );

    if (response.rows.length === 0) {
      throw new Error("Category not found");
    }

    return response.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default listAllByCategoryService;
