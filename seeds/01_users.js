'use strict';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {username: 'neo', email: 'neo@gmail'},
    {username: 'trinity', email: 'trinity@gmail'},
    {username: 'morpheus', email: 'morpheus@gmail'}
  ]);
};
