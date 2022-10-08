'use strict';

exports.seed = async knex => {
  await knex('lenders').del();
  await knex('lenders').insert([
    {
      lender_id: '991bc552-230d-4568-af03-7231c4270f4e',
      lender_name: 'Fastlane Test Bank (Automatic)',
      originating_lender_id: '000FL1',
      origin: 'RO',
      lender_information: '{"availablePayoffQueries":["vin","accountNumber","socialSecurityNumber"],"requiredLetterOfGuaranteeFields":["accountNumber","vin","settlementAmount","dateOfLoss","adjusterName","adjusterPhoneNumber","adjusterEmailAddress","financeType"],"requiredPayoffQuoteFields":["accountNumber","vin","ownersName"]}',
      created_at: knex.raw('NOW()'),
      updated_at: knex.raw('NOW()'),
      fax_number: '+999-9999-0',
      fax_template: 'request-form.template',
      verified: true,
    },
    {
      lender_id: '191bc552-230d-4568-af03-7231c4270f5e',
      lender_name: 'Fastlane Test Bank (Not-Automatic)',
      originating_lender_id: '000FL2',
      origin: 'FL',
      lender_information: '{"requiredLetterOfGuaranteeFields":["accountNumber","vin","settlementAmount","dateOfLoss","adjusterName","adjusterPhoneNumber","adjusterEmailAddress","financeType"],"requiredPayoffQuoteFields":["accountNumber","vin","ownersName"]}',
      created_at: knex.raw('NOW()'),
      updated_at: knex.raw('NOW()'),
      fax_number: '+999-9999-0',
      fax_template: 'request-form.template',
      verified: true,
    },
  ]);
};
