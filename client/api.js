const fetchAttractions = () =>
  fetch("/api")
    .then(result => result.json())
    .catch(err => console.error(err));

const fetchItineraries = (itineraryId) => 

    fetch(`/api/itineraries/${ itineraryId }`)
    .then(result => result.json())
    .catch(err => console.error(err));

module.exports = {
  fetchAttractions,
  fetchItineraries
};
