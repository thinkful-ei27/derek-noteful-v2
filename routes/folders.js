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
router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  knex
    .first('id', 'name')
    .from('folders')
    .where('id', id)
    .then(item => {
      if (item) {
        res.json(item);
      } else {
        next();
      }
    })
    .catch(err => next(err));
});

// Update Folder
router.put('/:id', (req, res, next) => {
  const id = req.params.id;

  /***** Never trust users - validate input *****/
  const updateObj = {};
  const updateableFields = ['name'];

  updateableFields.forEach(field => {
    if (field in req.body) {
      updateObj[field] = req.body[field];
    }
  });

  /***** Never trust users - validate input *****/
  if (!updateObj.name) {
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
  }

  knex('folders')
    .update(updateObj)
    .where('id', id)
    .returning('*')
    .then(([item]) => {
      if (item) {
        res.json(item);
      } else {
        next();
      }
    })
    .catch(err => next(err));
});

// Create a Folder
router.post('/', (req, res, next) => {
  const { name } = req.body;

  const newFolder = { name };

  /***** Never trust users - validate input *****/
  if (!newFolder.name) {
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
  }

  knex
    .insert(newFolder)
    .into('folders')
    .returning('*')
    .then(([item]) => {
      if (item) {
        res
          .location(`http://${req.headers.host}/folders/${item.id}`)
          .status(201)
          .json(item);
      }
    })
    .catch(err => next(err));
});

// Delete Folder
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;

  knex('folders')
    .del()
    .where('id', id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch(err => next(err));
});