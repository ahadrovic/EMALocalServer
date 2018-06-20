var express = require('express');
var router = express.Router();


var products = [

  { "name": "Test product 1", "price": 100},
  { "name": "Test product 2", "price": 50}

];

router.get('/', function(req, res) {
  res.send(products)
})

router.get('/:id', function(req, res) {
  res.send(products[req.params.id])
})

router.delete('/:id', function(req, res) {
  products.splice(req.params.id, 1)
  res.send({"status": "deleted"})
})

router.post('/p', function(req, res) {
  products.push({
    "name": req.body.name,
    "price": req.body.price,
  })
  res.send({"status": "created"})
})
