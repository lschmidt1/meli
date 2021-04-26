const makeGetSearchItems = ({
  Exception,
  getMeliSearchItems,
  transformList,
}) => {
  return async (httpRequest) => {
    let httpResponse = {
      headers: {
        "Content-Type": "application/json",
      },
      statusCode: 200,
      body: null,
    };
    try {
      const query = httpRequest.query.q;
      if (!query) {
        throw new Exception(400, "No se ha buscado nada.");
      }

      results = await getMeliSearchItems(query);
      httpResponse.body = transformList(results);
    } catch (e) {
      httpResponse.body = { error: e.message };
      httpResponse.statusCode = e.code;
    } finally {
      return httpResponse;
    }
  };
};

module.exports = makeGetSearchItems;
