const express = require('express')
const path = require('path')
const parentFolder = path.join(__dirname, "..");
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(parentFolder + "/public/pag-loja/loja.html")
})

module.exports = router