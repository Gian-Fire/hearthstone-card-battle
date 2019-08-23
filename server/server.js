const express = require('express');
const axios = require('axios');
const unirest = require('unirest');
const port = 5000;

const app = express();

app.use(express.static('dist'));

app.get('/api/cards', (req, res) => {
  unirest.get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/qualities/Legendary?collectible=1&type=Minions")
  .header("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com")
  .header("X-RapidAPI-Key", "acef16f727msha3aa0560d907f13p16f750jsn6a769cea90c9")
  .end( (result) => res.send(result.body))
});

app.get('/api/cardart', (req, res) => {
  axios.get('https://api.hearthstonejson.com/v1/30795/enUS/cards.collectible.json')
    .then( (response) => res.status(200).send(response.data))
    .catch( err => console.log(err));
});

module.exports = app;