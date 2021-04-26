const transformItem = require("./item-transformer");
const makeListTransformer = require("./list-transformer");

const transformList = makeListTransformer({ transformItem });

module.exports = {
  transformItem,
  transformList,
};
