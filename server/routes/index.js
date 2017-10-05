const router = require("express").Router();
const Hotel = require("../models").Hotel;
const Restaurant = require("../models").Restaurant;
const Activity = require("../models").Activity;;
const Itinerary = require("../models").Itinerary

router.get("/", (req, res, next) => {
  Promise.all([
    Hotel.findAll({ include: [{ all: true }] }),
    Restaurant.findAll({ include: [{ all: true }] }),
    Activity.findAll({ include: [{ all: true }] }),
    Itinerary.findAll({ include: [{ all: true}]})
  ])
    .then(([hotels, restaurants, activities, itineraries]) => {
      res.json({
        hotels,
        restaurants,
        activities,
        itineraries
      });
    })
    .catch(next);
});

router.get('/itineraries/:itineraryId', function (req,res,next) {

    Itinerary.findById(req.params.itineraryId, {
  
      include: [{ all: true, nested: true}]
    })
    .then((itinerary) => {
      res.json(itinerary)
    })
    .catch(next)
  // }
})

router.post('/itineraries', function(req,res,next){
  Itinerary.create({
    
  })
  .then(function(itinerary){

    const a = itinerary.setHotel(req.body.hotels})
    const b = itinerary.setRestaurant(req.body.restaurants)
    const c = itinerary.setActivity(req.body.activities)

    
    .then()
    res.json(itinerary);
  })
})
  

module.exports = router;
