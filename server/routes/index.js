const router = require("express").Router();
const Hotel = require("../models").Hotel;
const Restaurant = require("../models").Restaurant;
const Activity = require("../models").Activity;

router.get("/", (req, res, next) => {
  Promise.all([
    Hotel.findAll({ include: [{ all: true }] }),
    Restaurant.findAll({ include: [{ all: true }] }),
    Activity.findAll({ include: [{ all: true }] })
  ])
    .then(([hotels, restaurants, activities]) => {
      res.json({
        hotels,
        restaurants,
        activities
      });
    })
    .catch(next);
});

router.get('/api/itineraries/:itineraryId', function (req,res,next) {
  Itinerary.findById(req.params.itineraryId, {
    include: [{ all: true, nested: true}]
  })
  .then((itinerary) => {
    res.json(itinerary)
  })
})

module.exports = router;
