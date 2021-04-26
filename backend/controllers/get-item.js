const makeGetItem = ({
  Exception,
  getMeliItem,
  getMeliItemDescription,
  getMeliCategory,
  transformItem,
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
      const id = httpRequest.params.id;
      if (!id) {
        throw new Exception(400, "Es necesario enviar un id.");
      }

      const [item, itemDescription] = await Promise.all([
        getMeliItem(id),
        getMeliItemDescription(id),
      ]);
      const categoryData = await getMeliCategory(item.category_id);
      httpResponse.body = transformItem(item, itemDescription, categoryData);
    } catch (e) {
      httpResponse.body = { error: e.message };
      httpResponse.statusCode = e.code;
    } finally {
      return httpResponse;
    }
  };
};

module.exports = makeGetItem;
