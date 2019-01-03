'use strict';

const express = require('express');

// Create a router instance
const router = express.Router();

const knex = require('../knex');

module.exports = router;

// Get All Folders
router.get('/', (req, res, next) => {
  knex.select('id', 'name')
    .from('folders')
    .then(results => {
      res.json(results);
    })
    .catch(err => next(err));
});

// Get Folder by id

// Update Folder

// Create a Folder

// Delete Folder