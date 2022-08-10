const express = require("express");
const app = express();
const Web3 = require('web3');
// const axios = require('axios')
const request = require('request');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const web3 = new Web3(ethrpc);
const web3bsc = new Web3(bscrpc)

/* import moralis */
const Moralis = require("moralis/node");

app.get("/", (request, response) => {
    response.send("Hi there BSC");
});

app.listen(3001, () => {
    console.log("Listen on the port 3000...");
});