'use strict';

// Adds vendors and requesting companies.
exports.seed = async knex => {
  await knex('users').del();
  await knex('requesting_companies_vendors').del();
  await knex('requesting_companies').del();
  await knex('vendors').del();

  await knex('vendors').insert([
    {
      vendor_id: 'LE',
      vendor_secret: 'SECRET_SECRET',
      created_at: knex.raw('NOW()'),
      updated_at: knex.raw('NOW()'),
      interface_domain: 'localhost', // LOCAL USE,
      device_validation_enabled: false,
    },
  ]);

  await knex('requesting_companies').insert([
    {
      requesting_company_id: '931cbbba-3ff6-487f-b3b5-76a27c897af2',
      name: 'Loss Express',
      logo: 'fastlane-logo-large.png',
      street_address: '1000 Main Street',
      attn_line: 'TEST',
      city: 'Dallas',
      state: 'TX',
      zip_code: '75204',
      payout_methodology: {},
      route_one_only: false,
      log_enabled: true,
      log_on_negative_equity: true,
      log_on_lease: true,
    },
  ]);

  await knex('requesting_companies_vendors').insert([
    {
      requesting_company_id: '931cbbba-3ff6-487f-b3b5-76a27c897af2',
      vendor_id: 'LE',
    },
  ]);
};
