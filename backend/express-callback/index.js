const makeCallback = (controller) => {
  return (req, res) => {
    const signature = {
      author: {
        name: "Leandro",
        lastname: "Schmidt",
      },
    };
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
    };
    controller(httpRequest)
      .then((httpResponse) => {
        if (httpResponse.headers) {
          res.set(httpResponse.headers);
        }
        res.type("json");
        res.status(httpResponse.statusCode).send({
          ...signature,
          ...httpResponse.body,
        });
      })
      .catch((e) => {
        res.status(500).send({ error: "Something went wrong." });
      });
  };
};

module.exports = makeCallback;
