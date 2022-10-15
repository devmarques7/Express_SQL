import database from "../../database/index.js";

const updateProductService = async (productId, updates) => {
  try {
    let query = "UPDATE products SET ";
    const keys = Object.keys(updates);
    const values = Object.values(updates);

    keys.forEach((key, index) => {
      if (key === "id") {
        throw new Error("Invalid id update");
      }

      query += `${key} = \$${(index += 1)}, `;
    });

    query = query.slice(0, -2);

    query += `WHERE id = \$${(keys.length += 1)} RETURNING*;`;

    const response = await database.query(query, [...values, productId]);

    if (response.rowCount === 0) {
      throw new Error("User not found");
    }

    return response.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default updateProductService;
