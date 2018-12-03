var express = require('express');
var { MongoClient } = require('mongodb');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const url = process.env.URL;
  const user = process.env.USER;
  const password = process.env.PASSWORD;
  const dbName = 'library';
  
  const title = process.env.TITLE;
  
  
  (async function mongo(){
    let client;
    try {
      client = await MongoClient.connect(url, {auth: {user, password}, useNewUrlParser: true
      });
      
      const db = client.db(dbName);
      const books = await db.collection('books').find().toArray();
      res.render('index', {books} );
      
    } catch(err) {
      console.log(err);
    }
  }());
  
  
});

module.exports = router;
