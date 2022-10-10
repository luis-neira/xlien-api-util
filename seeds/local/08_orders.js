'use strict';

const faker = require('@faker-js/faker').faker;
const { v4: uuidv4 } = require('uuid');
const { add } = require('date-fns');

const orderTypes = require('../../mocks/order-types');
const taskTypes = require('../../mocks/task_types');

// Adds vendors and requesting companies.
exports.seed = async knex => {
  await knex('event_logs').del()
  await knex('packets').del()
  await knex('order_tasks').del();
  await knex('orders').del();
  await knex('tasks').del();
  await knex('documents').del();

  const packetId = uuidv4();
  const orderId = uuidv4();
  let taskId = uuidv4();
  const orderType = faker.helpers.arrayElement(orderTypes);

  await knex('packets').insert([
    {
      'packet_id': 'd26a97bb-951b-4a9c-a421-637f3184bbea',
      'requesting_company_id': '931cbbba-3ff6-487f-b3b5-76a27c897afc',
      'vendor_id': 'FL',
    },
  ]);

  await knex('packets').insert([
    {
      packet_id: packetId,
      lender_id: '191bc552-230d-4568-af03-7231c4270f5e', // depend
      lender_name: 'Fastlane Test Bank (Not-Automatic)',
      vin: '1N4AL3AP8JC231502',
      claim_number: faker.random.numeric(8),
      account_number: '20351b4f6f1b322a582a29c29ccc6a30$8760a991f6eee2d6d765e1e701906e5c09cbf39bf18ca4da$f91dd28ec538a7287b435c205571176fd0a87ee59534324ac0f65c7e549f9c5c',
      owners_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      owners_street_address: `${faker.random.numeric(2, { allowLeadingZeros: true })} ${faker.address.street()}`,
      owners_phone_number: faker.phone.number('(###) ###-###'),
      settlement_amount: faker.commerce.price(20_000, 50_000),
      deductible: faker.commerce.price(500, 2_000),
      date_of_loss: '2022-04-03',
      finance_type: 'Retial',
      requesting_company_id: '931cbbba-3ff6-487f-b3b5-76a27c897af2',
      vendor_id: 'LE',
      created_at: knex.raw('NOW()'),
      updated_at: knex.raw('NOW()'),
      make: 'NISSAN',
      model: 'Altima',
      year: '2018',
      user_id: '79ba8da5-5b51-47c6-a016-5f98c0e22916',
      archived: false,
      title_remittance_address: '95 Stehr Parkway',
      odometer: 'random number string',
      tags: '[]',
      owners_name_updated: false,
      owners_address_updated: false,
      internal_status_updated_at: new Date().toJSON(), // todo
      internal_status: 'Newly Added to Queue',
      do_not_notify_users: '[]',
      owner_retained: false,
      cause_of_loss: 'Single-Vehicle Collision',
      titled_owners_name_verified: false,
      review_any_changes: false,
      received_by_gcm: false,
      updated_since_gcm: false,
      insurer_type: 'First Party',
      titled_state_verified: false,
      title_document_added: false,
      assigned_fax_number: '12145010977',
      lender_fax_number: '+999-9999-0',
      lender_has_title: false,
      followup_count: 0,
      test_claim: true,
      processing_group: 'lossexpress',
    },
  ]);

  await knex('orders').insert([
    {
      order_id: orderId,
      packet_id: packetId,
      type: orderType.orderType,
      status: 'pending',
      created_at: knex.raw('NOW()'),
      updated_at: knex.raw('NOW()'),
      order_type_id: orderType.orderId,
      enabled: orderType.enabled,
      attempt_count: 0,
      system_attempt_count: 0,
      oda_failed: false,
    },
  ]);

  const loadedTaskTypes = [];

  if (!loadedTaskTypes.includes(orderType.taskTypeId)) {
    taskId = uuidv4();

    const [ num, int] = taskTypes.find((t) => t.id === orderType.taskTypeId).dueBy.split(' ');

    await knex('tasks').insert([
      {
        task_id: taskId,
        packet_id: packetId, //depend
        status: 'unstarted',
        due_by: add(new Date(), {
          [int]: parseInt(num)
        }),
        priority: 1,
        created_at: knex.raw('NOW()'),
        updated_at: knex.raw('NOW()'),
        task_type_id: orderType.taskTypeId,
        processing_group: 'lossexpress',
      },
    ]);
  
    loadedTaskTypes.push(orderTypes.taskTypeId);
    
  }

  await knex('order_tasks').insert([
    {
      order_id: orderId,
      task_id: taskId,
      created_at: knex.raw('NOW()'),
      updated_at: knex.raw('NOW()'),
    },
  ]);

  await knex('documents').insert([
    {
      packet_id: packetId,
      document_name: `${packetId}-Regular PDF.pdf`,
      created_at: knex.raw('NOW()'),
      updated_at: knex.raw('NOW()'),
      deleted: false,
      is_form: false,
      type: 'settlement breakdown'
    },
    {
      packet_id: packetId,
      document_name: `${packetId}-Regular PDF.pdf`,
      created_at: knex.raw('NOW()'),
      updated_at: knex.raw('NOW()'),
      deleted: false,
      is_form: false,
      type: 'valuation report'
    },
  ]);

};
