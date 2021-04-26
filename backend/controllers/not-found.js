const notFound = async () => {
  return {
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      error: "Endpoint no disponible.",
    },
    statusCode: 404,
  };
};

module.exports = notFound;
