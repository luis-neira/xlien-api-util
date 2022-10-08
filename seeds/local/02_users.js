'use strict';

const passwords = require('../../src/lib/passwords');

// Adds users for local development.
exports.seed = async knex => {
  await knex('workers').del();

  const password = await passwords.hashPassword('password1234');

  await knex('users').insert([
    {
      vendor_id: 'LE',
      user_id: '79ba8da5-5b51-47c6-a016-5f98c0e22916',
      username: 'admin',
      password,
      email_address: 'local-admin@lossexpress.car',
      mailing_street_address: '1000 Main Street',
      mailing_city: 'Dallas',
      mailing_state: 'TX',
      mailing_zip_code: '75204',
      mailing_care_of: 'TEST',
      mailing_additional_info: 'XXX-XXXX',
      name: 'Local Admin',
      user_role: 'Administrator',
      requesting_company_id: '931cbbba-3ff6-487f-b3b5-76a27c897af2',
      last_logged_in: '2021-07-12T20:37:03.656+00:00',
      last_password_change: new Date(Date.now()),
      disclaimer_acknowledged: new Date(Date.now()),
    },
    {
      vendor_id: 'LE',
      user_id: '79ba8da5-5b51-47c6-a016-5f98c0e12916',
      username: 'user',
      password,
      email_address: 'local-user@lossexpress.car',
      mailing_street_address: '1000 Main Street',
      mailing_city: 'Dallas',
      mailing_state: 'TX',
      mailing_zip_code: '75204',
      mailing_care_of: 'TEST',
      mailing_additional_info: 'XXX-XXXX',
      name: 'Local User',
      user_role: 'User',
      requesting_company_id: '931cbbba-3ff6-487f-b3b5-76a27c897af2',
      last_logged_in: '2021-07-12T20:37:03.656+00:00',
      last_password_change: new Date(Date.now()),
      disclaimer_acknowledged: new Date(Date.now()),
    },
  ]);

  await knex('password_resets').insert([
    {
      utilized: true,
      user_id: '79ba8da5-5b51-47c6-a016-5f98c0e22916',
      created_at: new Date(Date.now()),
      updated_at: new Date(Date.now()),
    },
    {
      utilized: true,
      user_id: '79ba8da5-5b51-47c6-a016-5f98c0e12916',
      created_at: new Date(Date.now()),
      updated_at: new Date(Date.now()),
    },
  ]);
};
