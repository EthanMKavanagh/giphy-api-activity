const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite 
router.post('/', (req, res) => {
  console.log('here is my req.body', req.body);

  const newFave = req.body;
  const queryString = `INSERT INTO "favorite" ("url")
                        VALUES ($1)`;
  const queryValues = [newFave];
  pool.query(queryString, queryValues)
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('getting an error in post route', err);
      res.sendStatus(500);
    })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
