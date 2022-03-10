const express = require("express");
const router = express.Router();
const axios = require("axios");

require("dotenv/config");

/* Receive all funny gifs */
router.get("/", function (req, res, next) {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.api_key}&q=funny&limit=10`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err.message);
      res.send("Error please")
    });
});

module.exports = router;
