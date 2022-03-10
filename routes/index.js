const express = require("express");
const router = express.Router();
const axios = require("axios");
const { getYear, dataFormat } = require("../helpers/helper_functions.js")

require("dotenv/config");

/* Receive all funny gifs */
router.get("/", function (req, res, next) {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.api_key}&q=coding&limit=10`
    )
    .then((response) => {
      res.send(dataFormat(response.data.data));
    })
    .catch((err) => {
      console.log(err.message);
      res.send("Error please try again")
    });
});

module.exports = router;
