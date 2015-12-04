// BASE SETUP
// =============================================================================
'use strict';

// call the packages we need
var express    		= require('express');        // call express
var app        		= express();                 // define our app using express
var bodyParser 		= require('body-parser');
var methodOverride 	= require('method-override');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});

var port = process.env.PORT || 1337;        // set local port	

// FAKE DATA SOURCE OF TRUTH
// =============================================================================

var allData = [
	{
		id: 1,
		name: 'Item 1'
	},
	{
		id: 2,
		name: 'Item 2'
	},
	{
		id: 3,
		name: 'Item 3'
	},
	{
		id: 4,
		name: 'Item 4'
	},
	{
		id: 5,
		name: 'Item 5'
	},
	{
		id: 6,
		name: 'Item 6'
	}
];

// API ROUTES
// =============================================================================
var router = express.Router();              // get an instance of the express Router

//-------------- Test route to make sure everything is working (accessed at GET http://localhost:1337/api)
router.get('/', function(req, res) {
	res.json({ message: 'Successfully set up dummy API!' });   
});

//-------------- GET /api/data
router.get('/data', function(req, res) {

	res.json({
		"data": allData
	});
});

//-------------- GET /api/data/:id
router.get('/data/:id', function(req, res) {

	console.log('GET data with sample ID ', req.params.id);

	var dataMatch;

	for (var i = 0; i < allData.length; i++) {
		var _item = allData[i];

		if (_item.id == req.params.id) {
			dataMatch = _item;
			break;
		}
	}

	res.json({
		"data": dataMatch
	});

});

//-------------- POST /api/save
router.post('/save', function(req, res) {
	console.log('Saved data:', req.body);

	req.body.id = 7;

	res.json({ 
		"data": {
			"responseCode": "success",
			"saved": req.body
		}
	});
});

//-------------- PUT /api/update/:id
router.put('/update/:id', function(req, res) {

	console.log('Item ID updated:', req.params.id, req.body);

	req.body.id = req.params.id;

	// since we're just faking this, return whatever was sent and overwrite ID passed
	res.json({ 
		"data": req.body
	});
});

// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server listening at port: ' + port);