'use strict';

const knex = require('../knex');

// All notes, no searchTerm
// knex
//   .select('notes.id', 'title', 'content')
//   .from('notes')
//   .orderBy('notes.id')
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Get All Notes
// let searchTerm = 'gaga';
// knex
//   .select('notes.id', 'title', 'content')
//   .from('notes')
//   .modify(queryBuilder => {
//     if (searchTerm) {
//       queryBuilder.where('title', 'like', `%${searchTerm}%`);
//     }
//   })
//   .orderBy('notes.id')
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Get Note By Id
// let id = 1003;
// knex
//   .first('notes.id', 'title', 'content')
//   .from('notes')
//   .where('id', id)
//   .then(results => console.log(JSON.stringify(results, null, 2)))
//   .catch(err => console.error(err));

// Update Note By Id
// let id = 1006;
// let updateObj = { title: 'Updated title', content: 'This content was updated by the scratch file'};
// knex('notes')
//   .update(updateObj)
//   .where('id', id)
//   .returning('*')
//   .then(([results]) => console.log(JSON.stringify(results, null, 2)))
//   .catch(err => console.error(err));

// Create a Note
// let newObj = { title: 'New scratch note', content: 'This content was created by the scratch file'};
// knex
//   .insert(newObj)
//   .into('notes')
//   .returning('*')
//   .then(([results]) => console.log(JSON.stringify(results, null, 2)))
//   .catch(err => console.error(err));

// Delete Note
// knex('notes')
//   .del()
//   .where('id', '1010')
//   .then(results => console.log(JSON.stringify(results, null, 2)))
//   .catch(err => console.error(err));