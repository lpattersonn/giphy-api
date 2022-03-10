const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.api_key}&q=${req.query.search}&limit=5`
    )
    .then((response) => {
      console.log(response.data.data)
      res.send(response.data.data);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

module.exports = router