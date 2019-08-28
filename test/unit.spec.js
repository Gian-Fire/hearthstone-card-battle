const express = require('express');
const path = require('path');
const expect = require('chai').expect;
const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

describe("Unit Tests", () => {
  let pageObject = null;
  let url = "http://localhost:8080";

  before(done => {
    pageObject = app.listen(8080);
    done();
  });

  after(done => {
    pageObject.close();
    done();
  });

  it('page should load', () => {
    axios.get(url)
      .then(r => expect(r.status === 200))
      .catch(err => console.log(err))
  })

  it('should have card data', () => {
    axios.get(`${url}/cards`)
      .then(r => expect(r.data).to.be.an('object'))
      .catch(err => console.log(err))
  })

});
