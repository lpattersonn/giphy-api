const express = require("express");
const route = express.Router();
const axios = require("axios");

route.get("/", (req, res) => {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.api_key}&q=funny&limit=5`
    )
    .then((response) => {
      res.send(response.data.data);
    })
    .catch((err) => {
      res.send(err.message);
    });
});
