const express = require('express');

const router = express.Router();

const gmsApiKey = process.env.GMS_API_KEY;
const googleMapsClient = require('@google/maps').createClient({
  key: gmsApiKey
});



router.get('/gms', (req, res) => {
  // Geocode an address.
  googleMapsClient.geocode({
    address: 'Kona'
  }, function(err, response) {
    if (!err) {
      // console.log(response.json.status);
      res.send(response.json.results[0].geometry);
    }
  });
});

module.exports = router;
