const Exception = require("../utils/exception");
const makeGetSearchItems = require("./get-search-items");
const makeGetItem = require("./get-item");
const notFound = require("./not-found");
const {
  getMeliSearchItems,
  getMeliItem,
  getMeliItemDescription,
  getMeliCategory,
} = require("../meli-repository");

const { transformItem, transformList } = require("../transformers");

const getSearchItems = makeGetSearchItems({
  Exception,
  getMeliSearchItems,
  transformList,
});
const getItem = makeGetItem({
  Exception,
  getMeliItem,
  getMeliItemDescription,
  getMeliCategory,
  transformItem,
});

const controllers = {
  getSearchItems,
  getItem,
  notFound,
};

module.exports = controllers;
