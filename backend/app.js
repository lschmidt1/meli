const express = require("express");
const app = express();
const cors = require("cors");
const { getSearchItems, getItem, notFound } = require("./controllers");

const makeCallback = require("./express-callback");
const apiRoot = "/api/items";

app.set("PORT", process.env.PORT || 5000);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get(apiRoot, makeCallback(getSearchItems));
app.get(`${apiRoot}/:id`, makeCallback(getItem));
app.use(makeCallback(notFound));

module.exports = app;
