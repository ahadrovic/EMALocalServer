var express = require('express');
var router = express.Router();


var items = [{"itemId": 1, "itemName":"iPhone X","itemQuant":11,"itemDesc":"Apple phone"},
				{"itemId": 2,"itemName":"Google Pixel","itemQuant":11,"itemDesc":"Google phone"},
				{"itemId": 3,"itemName":"Samsung Galaxy S9","itemQuant":11,"itemDesc":"Samsung phone"}]


router.get('/items', function(req, res, next) {
  
  res.json(items)

});

router.post('/items',function(req,res,next) {
    
    var newItem = req.body
	
	items.push(newItem)

    res.json(req.body)

});

router.delete('/items',function(req,res,next) {
    
	var selectedItem = req.body

    items = items.filter(function(index) {
    	return index.itemId !== selectedItem["itemId"] && index.itemName !== selectedItem["itemName"];
    });

   	res.json(items)

});


var employees = [
	{
		"id":1,
		"fname":"Adem",
		"lname":"Hadrovic",
		"dob":"27-03-1996",
		"hasDrivingLicense":"Yes",
		"position":"Software Engineer"
	},

	{	"id":2,
  		"fname" : "Test",
  		"lname" : "Testson",
  		"dob" : "01-01-1970",
  		"hasDrivingLicense" : "No",
  		"position" : "Tester"
	}
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/employees', function(req, res, next) {
  res.json(employees)
});

router.post('/employees',function(req,res,next) {
    

	var newEmployee = req.body
	employees.push(newEmployee)

    res.json(req.body)

});

router.delete('/employees',function(req,res,next) {
    
    var selectedEmployee = req.body

    employees = employees.filter(function(index) {
    	return index.id !== selectedEmployee["id"] && index.dob !== selectedEmployee["dob"];
    });

   	res.json(employees)

});


var products = [
  { "name": "Test product", "price": 100 }
];


app.get('/ping', function(req, res) {
  res.send({ "status": "pong" })
})

app.post('/login', function(req, res) {
  if (req.body.email === "test@ssst.ba" && req.body.pass === "pass") {
    res.send({"status": "valid"})
  } else {
    res.send({"status": "invalid"})
  }
})

app.post('/register', function(req, res) {
  if (req.body.email === "test2@ssst.ba" && req.body.pass === "pass2") {
    res.send({"status": "valid"})
  } else {
    res.send({"status": "invalid"})
  }
})
app.get('/products', function(req, res) {
  res.send(products)
})

app.get('/products/:id', function(req, res) {
  res.send(products[req.params.id])
})

app.delete('/products/:id', function(req, res) {
  products.splice(req.params.id, 1)
  res.send({"status": "deleted"})
})

app.post('/products', function(req, res) {
  products.push({
    "name": req.body.name,
    "price": req.body.price
  })
  res.send({"status": "created"})
})



module.exports = router;
