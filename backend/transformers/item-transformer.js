const transformItem = (item, description = null, categoryData = null) => {
  const getAmount = (price) => {
    if (Number.isInteger(price)) return price;
    return Math.trunc(price);
  };

  const getDecimals = (price) => {
    if (Number.isInteger(price)) return 0;
    const decimals = price.toFixed(2).split(".")[1];
    return parseInt(decimals, 10);
  };

  let transformedItem = {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: getAmount(item.price),
      decimals: getDecimals(item.price),
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
  };

  if (item.pictures) {
    transformedItem.picture = item.pictures[0].url;
  }

  if (item.address) {
    transformedItem.state = item.address.state_name;
  }

  if (description) {
    transformedItem.sold_quantity = item.sold_quantity;
    transformedItem.description = description.plain_text;
  }

  if (categoryData) {
    transformedItem.categories = categoryData.path_from_root.map(
      (category) => category.name
    );
  }

  return { item: transformedItem };
};

module.exports = transformItem;
