'use strict';

exports.seed = async knex => {
  await knex('phone_numbers').insert([
    {
      'is_fax': true,
      'created_at': '2021-12-13 21:59:50.575579+00',
      'processing_group': 'lossexpress',
      'efax_user_id': 'f4d78b8b-f6bd-455f-9ff9-8229911bf3b0',
      'phone_number_id': '2db73c83-84e0-471a-8c10-eeedb1fca140',
      'phone_number': '12145010977',
      'updated_at': '2021-12-13 21:59:50.575579+00',
    },
  ]);
};
