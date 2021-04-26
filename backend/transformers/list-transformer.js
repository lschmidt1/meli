const makeListTransformer = ({ transformItem }) => {
  return (list) => {
    let transformedList = {
      categories: [],
      items: list.results.map((item) => transformItem(item).item),
    };

    if (list.filters.length) {
      const categoriesData = list.filters.find(
        (filter) => filter.id === "category"
      );
      categoriesData.values.map((category) => {
        Object.keys(category.path_from_root).map((key) =>
          transformedList.categories.push(category.path_from_root[key].name)
        );
      });
    }

    return transformedList;
  };
};

module.exports = makeListTransformer;
