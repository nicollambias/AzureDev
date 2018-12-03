var express = require('express');
var { MongoClient } = require('mongodb');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const url = process.env.URL;
  const user = process.env.USER;
  const password = process.env.PASSWORD;
  const dbName = 'library';
  
  (async function mongo(){
    let client;
    try {
      client = await MongoClient.connect(url, {auth: {user, password}, useNewUrlParser: true
      });
      
      const db = client.db(dbName);
      const response = await db.collection('books').find().toArray();
      res.json(response);
      
    } catch(err) {
      console.log(err);
    }
  }());
  
  
});

module.exports = router;
