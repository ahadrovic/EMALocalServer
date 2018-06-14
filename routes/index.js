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


module.exports = router;
