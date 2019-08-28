const express = require('express');
const unirest = require('unirest');

const app = express();

app.use(express.static('dist'));

app.get('/cards', (req, res) => {
  unirest.get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/qualities/Legendary?collectible=1&type=Minions")
  .header("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com")
  .header("X-RapidAPI-Key", "acef16f727msha3aa0560d907f13p16f750jsn6a769cea90c9")
  .end( (result) => res.send(result.body))
});

module.exports = app;