const { default: Axios } = require("axios");
const express = require("express");
const pool = require("../modules/pool");
require("dotenv").config();

const router = express.Router();

router.get("/", (req, res) => {
  Axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: process.env.GIPHY_API_KEY,
    },
  })
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log("error is", error);
    });
});

module.exports = router;
