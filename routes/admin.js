var express = require('express');
var { MongoClient } = require('mongodb');
var router = express.Router();

const title = process.env.TITLE;
const books = [
  {
  "title": "War and Peace",
  "genre": "Historical Fiction",
  "author": "Lev Nikolayevich Tolstoy",
  "bookId": 656,
  "read": false
  },
  {
  "title": "Les Misérables",
  "genre": "Historical Fiction",
  "author": "Victor Hugo",
  "bookId": 24280,
  "read": false
  },
  {
  "title": "The Time Machine",
  "genre": "Science Fiction",
  "author": "H. G. Wells",
  "bookId": null,
  "read": false
  },
  {
  "title": "A Journey into the Center of the Earth",
  "genre": "Science Fiction",
  "author": "Jules Verne",
  "bookId": null,
  "read": false
  },
  {
  "title": "The Dark World",
  "genre": "Fantasy",
  "author": "Henry Kuttner",
  "bookId": null,
  "read": false
  },
  {
  "title": "The Wind in the Willows",
  "genre": "Fantasy",
  "author": "Kenneth Grahame",
  "bookId": null,
  "read": false
  },
  {
  "title": "Life On The Mississippi",
  "genre": "History",
  "author": "Mark Twain",
  "bookId": null,
  "read": false
  },
  {
  "title": "Childhood",
  "genre": "Biography",
  "author": "Lev Nikolayevich Tolstoy",
  "bookId": null,
  "read": false
  },
  {
  "title": "War and Peace",
  "genre": "Historical Fiction",
  "author": "Lev Nikolayevich Tolstoy",
  "bookId": 656,
  "read": false
  },
  {
  "title": "Les Misérables",
  "genre": "Historical Fiction",
  "author": "Victor Hugo",
  "bookId": 24280,
  "read": false
  },
  {
  "title": "The Time Machine",
  "genre": "Science Fiction",
  "author": "H. G. Wells",
  "bookId": null,
  "read": false
  },
  {
  "title": "A Journey into the Center of the Earth",
  "genre": "Science Fiction",
  "author": "Jules Verne",
  "bookId": null,
  "read": false
  },
  {
  "title": "The Dark World",
  "genre": "Fantasy",
  "author": "Henry Kuttner",
  "bookId": null,
  "read": false
  },
  {
  "title": "The Wind in the Willows",
  "genre": "Fantasy",
  "author": "Kenneth Grahame",
  "bookId": null,
  "read": false
  },
  {
  "title": "Life On The Mississippi",
  "genre": "History",
  "author": "Mark Twain",
  "bookId": null,
  "read": false
  },
  {
  "title": "Childhood",
  "genre": "Biography",
  "author": "Lev Nikolayevich Tolstoy",
  "bookId": null,
  "read": false
  },
  {
  "title": "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
  "genre": "Corporate",
  "author": "Mark Mason",
  "bookId": null,
  "read": false
  }
];

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
      const response = await db.collection('books').insertMany(books);
      res.json(response);
      
    } catch(err) {
      console.log(err);
    }
  }());
  
});

module.exports = router;
