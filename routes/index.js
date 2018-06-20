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

  { "id": 1, "name": "Shoes", "price": 100},
  { "id":2, "name": "T-Shirt", "price": 50}

];

var carts = 

	[	
		{
			"id":1,
			"items":[

				{"item":{ "name": "Shoes", "price": 100} ,"quant":1},
				{"item":{ "name": "T-Shirt", "price": 50}, "quant":2}		

			],

			"total": 200

		}
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


router.get('/cart/:id',function(req,res) {
    var foundCart = carts.find(function(cart){
  		return cart.id == req.params.id
  })

    res.json(foundCart)

});

router.post('/cart',function(req,res) {
    carts.append(req.body.newCart)
});

router.delete('/cart/:id',function(req,res) {
	carts.splice(req.params.id, 1)
    res.send({"status": "deleted"})
    
});





var googlePlaces = []

var savedPlaces = []

var interests = []
 

router.get('/interests', function(req, res) {
  res.json(interests)
})

router.post('/interests', function(req, res) {
  	
  for (var i = req.body.chosenInterests.length - 1; i >= 0; i--) {
  	interests.push(req.body.chosenInterests[i])
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
  	
 
  googlePlaces.push(req.body.storedPlaces)

  res.send({"status": "created"})

})


router.get('/savedPlaces', function(req, res) {
  res.send(savedPlaces)
})

/*
router.get('/savedPlaces', function(req, res) {
  
  var foundPlace = savedPlaces.find(function(place){
  		return place.placeLatitude == req.body.checkedPlace.placeLatitude && place.placeLongitude == req.body.checkedPlace.placeLongitude
  })

  if(foundPlace == null){
  	
  	res.send({"status": "not found"})	
  	
  }

  else{
  	res.send({"status": "found"})
  	
  }
})
*/

router.delete('/savedPlaces/:id', function(req, res) {
  savedPlaces.splice(req.params.id, 1)
  res.send({"status": "deleted"})
})

router.post('/savedPlaces', function(req, res) {
  
 
  var foundPlace = savedPlaces.find(function(place){
  		return place.placeLatitude == req.body.placeLatitude && place.placeLongitude == req.body.placeLongitude
  })

  if(foundPlace == null){
  	
  	var newPlace = {

  		"placeName": req.body.placeName,
  		"placeAddress": req.body.placeAddress,
  		"placeRating": req.body.placeRating,
  		"placeLatitude": req.body.placeLatitude,
  		"placeLongitude": req.body.placeLongitude,
  		"placePriceLevel": req.body.placePriceLevel,
  		"saved": req.body.saved,
  	}
  	
  	savedPlaces.push(newPlace)

    res.send({"status": "valid"})
  	
  }

  else{

  	res.send({"status": "invalid"})
  	
  }

})

module.exports = router;
