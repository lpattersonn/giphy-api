const express = require("express");
const router = express.Router();
const axios = require("axios");
const { dataFormat } = require("../helpers/helper_functions.js");

router.get("/", (req, res) => {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.api_key}&q=${req.query.search}&limit=${req.query.result}`
    )
    .then((response) => {
      res.send(dataFormat(response.data.data));
    })
    .catch((err) => {
      res.send(err.message);
    });
});

module.exports = router;
