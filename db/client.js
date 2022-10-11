'use strict';

const Knex = require('knex');

const knexfile = require('../knexfile')[process.env.NODE_ENV];

class DatabaseClient {
  initClient() { 
    // Initialize knex.
    const knex = Knex(knexfile);
    
    return knex;
  }
}

module.exports = new DatabaseClient();
