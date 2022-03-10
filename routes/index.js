const express = require("express");
const router = express.Router();
const axios = require("axios");

require("dotenv/config")

/*  */
router.get("/", function (req, res, next) {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.api_key}&q=spongebob`
    )
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
