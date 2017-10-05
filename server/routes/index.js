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
    console.log('hi')
    res.json(itinerary)
  })
  .catch(next)
})

module.exports = router;
