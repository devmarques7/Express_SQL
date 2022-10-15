const verifyRequestProducts = (request, response, next) => {
  const { name, price } = request.body;

  console.log(name, price);

  if (!name) {
    return response.status(400).json({
      message: "Missing required parameter",
    });
  }

  if (!price) {
    return response.status(400).json({
      message: "Missing required parameter",
    });
  }

  next();
};

export default verifyRequestProducts;
