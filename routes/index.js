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

var users = [

	{
		"email": "test@ssst.ba",
		"pass": "pass"
	}

]

router.get('/ping', function(req, res) {
  res.send({ "status": "pong" })
})

router.get('/users', function(req, res) {
  res.json(users)
})

router.post('/login', function(req, res) {
  
/*
  if (req.body.email === "test@ssst.ba" && req.body.pass === "pass") {
    res.send({"status": "valid"})
  } else {
    res.send({"status": "invalid"})
  }
*/
  
  var foundUser = users.find(function(user){
  		return user.email === req.body.email && user.pass === req.body.pass
  })

  if(foundUser == null){
  	
  	res.send({"status": "invalid"})
  	
  }
  else{
  	
  	res.send({"status": "valid"})	

  }

})

router.post('/register', function(req, res) {
  
/*
  if (req.body.email === "test2@ssst.ba" && req.body.pass === "pass2") {
    res.send({"status": "valid"})
  } else {
    res.send({"status": "invalid"})
  }
*/

  var foundUser = users.find(function(user){
  		return user.email === req.body.email && user.pass === user.pass
  })

  if(foundUser == null){
  	
  	users.push({"email":req.body.email,"pass":req.body.pass})
  	
  	res.send({"status": "valid"})	

  }
  else{

  	res.send({"status": "invalid"})

  }
	
})

router.get('/products', function(req, res) {
  res.send(products)
})

router.get('/products/:id', function(req, res) {
  res.send(products[req.params.id])
})

router.delete('/products/:id', function(req, res) {
  products.splice(req.params.id, 1)
  res.send({"status": "deleted"})
})

router.post('/products', function(req, res) {
  products.push({
    "name": req.body.name,
    "price": req.body.price
  })
  res.send({"status": "created"})
})




var googlePlaces = []

var savedPlaces = []

var interests = []
 

router.get('/interests', function(req, res) {
  res.json(interests)
})

router.post('/interests', function(req, res) {

  for(var interest in req.body.chosenInterests){
  	interests.push(interest[1])	
  }  	
  


  res.json(interests)

})

router.get('/places', function(req, res) {
  res.json(googlePlaces)
})

router.get('/places/:id', function(req, res) {
  res.send(googlePlaces[req.params.id])
})

router.delete('/places/:id', function(req, res) {
  googlePlaces.splice(req.params.id, 1)
  res.send({"status": "deleted"})
})

router.post('/places', function(req, res) {
  	
  for(var place in req.body.storedPlaces){
  	googlePlaces.push(place[0])
  }  	
  

  res.send({"status": "created"})

})


router.get('/places_saved', function(req, res) {
  res.json(savedPlaces)
})

router.get('/places_saved', function(req, res) {
  
  var foundPlace = savedPlaces.find(function(place){
  		return place.placeLatitude == req.body.checkedPlace.placeLatitude && place.placeLongitude == req.body.checkedPlace.placeLongitude && place.saved == req.body.checkedPlace.saved
  })

  if(foundPlace == null){
  	
  	res.send({"status": "not found"})	
  	
  }

  else{
  	res.send({"status": "found"})
  	
  }
})

router.delete('/places_saved/:id', function(req, res) {
  savedPlaces.splice(req.params.id, 1)
  res.send({"status": "deleted"})
})

router.post('/places_saved', function(req, res) {
  
 
  var foundPlace = savedPlaces.find(function(place){
  		return place.placeLatitude == req.body.checkedPlace.placeLatitude && place.placeLongitude == req.body.checkedPlace.placeLongitude && place.saved == req.body.checkedPlace.saved
  })

  if(foundPlace == null){
  	
  	savedPlaces.push(req.body.checkedPlace)
    res.send({"status": "valid"})
  	
  }

  else{

  	res.send({"status": "invalid"})
  	
  }

})

module.exports = router;
