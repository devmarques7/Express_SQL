import createCategoryService from "../../services/categories/createCategory.Service.js";

const createCategoryController = async (request, response) => {
  const { name } = request.body;

  try {
    const newCategory = await createCategoryService(name);

    response.status(201).json({
      message: "Category created successfully",
      category: newCategory,
    });
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
};

export default createCategoryController;
