const express = require('express')
const path = require('path')
const parentFolder = path.join(__dirname, "..");
const router = express.Router();

module.exports = {
  parentFolder,
  router
}