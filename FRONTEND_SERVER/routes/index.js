var express = require('express');
var router = express.Router();

const index = require('../controller/index');
const auth = require('../controller/auth');
const hotel = require('../controller/hotel');
const airport = require('..//controller/flight');

router.get('/', index.index);
router.get('/login', auth.login); //To render login page
router.get('/booking',index.booking) //To render booking page  
router.get('/about', index.about) //To render about page
router.post("/signin", auth.login_cred); // for  login page
router.post('/signup',auth.AddNewlogin); // For creating new user 


router.post('/hotels', hotel.bycountry); // for hotels by country
router.post('/airport', airport.nearby); // for flights nearby



module.exports = router;