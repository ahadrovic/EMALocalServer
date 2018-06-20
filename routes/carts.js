var express = require('express');
var router = express.Router();

var carts = [

	{
		"id" : 1,
		"items": [

			{ "name": "Test product 1", "price": 100.50, quant: 11 },		


		],

		"subtotal": 1105.5

	},
	
	{
		"id" : 2,
		"items": [

			{ "name": "Test product 1", "price": 100.50, quant: 2 },		
			{ "name": "Test product 2", "price": 50, quant: 10}	

		],
		
		"subtotal": 1105.5


	}


]

router.get('/:id',function(req,res) {
    
});

router.post('/',function(req,res) {
    carts.append(req.params.newCart)
});

router.delete('/:id',function(req,res) {
	carts.splice(req.params.id, 1)
    res.send({"status": "deleted"})
    
});



module.exports = router;

