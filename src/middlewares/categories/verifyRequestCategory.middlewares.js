import database from "../../database";

const verifyRequestCategory = async (request, response, next) => {
  const { name } = request.body;

  if (!name) {
    return response.status(400).send({
      message: "Missing request parameter",
    });
  }

  const categories = await database.query("SELECT name FROM categories");

  const existing = categories.rows.find((category) => category.name === name);

  if (existing) {
    return response.status(400).json({
      message: "Duplicate category",
    });
  }

  next();
};

export default verifyRequestCategory;
