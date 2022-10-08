'use strict';

exports.seed = async knex => {
  await knex('requesting_companies').insert([
    {
      'requesting_company_id': '931cbbba-3ff6-487f-b3b5-76a27c897afc',
    },
  ]);

  await knex('vendors').insert([
    {
      'vendor_id': 'FL',
      'vendor_secret': 'SECRET_SECRET',
    },
  ]);

  await knex('packets').insert([
    {
      'packet_id': 'd26a97bb-951b-4a9c-a421-637f3184bbea',
      'requesting_company_id': '931cbbba-3ff6-487f-b3b5-76a27c897afc',
      'vendor_id': 'FL',
    },
  ]);
};
