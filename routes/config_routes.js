const express = require('express')
const path = require('path')
const cep_promise = require('cep-promise')
const parentFolder = path.join(__dirname, "..");
const router = express.Router();

module.exports = {
  router,
  cep_promise
}