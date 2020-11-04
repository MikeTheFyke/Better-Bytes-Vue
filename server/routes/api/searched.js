"use strict";

const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();
const cheerio = require('cheerio');

// GET Posts
router.get('/:query', async (req, res) => {
    const searched = await loadSearchedCollection();
    console.log("Your query params are : ", req.params.query)
    var query2 = req.params.name;
    let searchResults = [], cart = [];

    request(`https://www.metro.ca/en/search?filter=${query2}&freeText=true`, (error, response, html) => {
    console.log ("Metro Prices");
    if(!error && response.statusCode === 200){
      const $ = cheerio.load(html)
      let items = [], prices = [], quantities = [];
      let testArray = [];
      
      $('.pt--name div').each((i, gl) => {
        const name = $(gl).text();
        console.log(name);
        // searchResults.name = name;
        items.push(name);
      });

      $('.pi--main-price').each((i, el) => {
        const price = $(el).text();
        var regexprice = /\$\s?(\d+[\.\s,\dk]+)|(\d+[\.\s,\dk]+)\$/mig;
        var foundprice = price.match(regexprice)[0].trim().slice(1);
        console.log(foundprice)
        prices.push(foundprice);
      });

      $('.pi--main-price span.pi--price').each((i, fl) => {
        const quantity = $(fl).text();
        var unit_quantity = 0;
        if(quantity.includes ("/")){
          unit_quantity = quantity.substring(0, 1);
        } else {
          unit_quantity = 1;
        }
        console.log(unit_quantity)
        quantities.push(unit_quantity);
      });

      console.log(items,prices,quantities)

      var length = items.length;
      for (var i = 0; i<length; i++){
        testArray.push({id: "Metro   :",name: items[i], price: prices[i], quantity: quantities[i]})
      }
      const list = (testArray.sort((a, b) => (a.price > b.price) ? 1 : -1));
      searchResults.push(list[0])
      getLoblawsData();
      res.json(searchResults);
    }});
    return router;
})

// ADD Posts
router.post('/', async (req, res) => {
    const posts = await loadSearchedCollection();
    await posts.insertOne({
        name: req.body.name,
        price: "$0.00",
        quantity: req.body.quantity,
        createdAt: new Date()
    });
    res.status(201).send();
});

// Connection to MongoDB
async function loadSearchedCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://mike_123:mike123@cluster0.r3pvv.mongodb.net/vue_bytes?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });
    return client.db('vue_bytes').collection('searched');
}

module.exports = router;