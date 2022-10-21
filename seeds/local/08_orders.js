'use strict';

const faker = require('@faker-js/faker').faker;
const { v4: uuidv4 } = require('uuid');
const { add } = require('date-fns');

const orderTypes = require('../../mocks/order-types');
const taskTypes = require('../../mocks/task_types');
const vins = require('../../mocks/vins');
const lenders = require('../../mocks/lenders');
const users = require('../../mocks/users');
const causesOfLoss = require('../../mocks/cause-of-loss');
const documentType = require('../../mocks/document-types');
const eventLogTypes = require('../../mocks/event-logs-types');
const processingGroup = require('../../mocks/processing-groups');

// Adds vendors and requesting companies.
exports.seed = async knex => {
  // await knex('event_logs').del()
  // await knex('packets').del()
  // await knex('order_tasks').del();
  // await knex('orders').del();
  // await knex('tasks').del();
  // await knex('documents').del();

  const packetId = uuidv4();
  const orderId = uuidv4();
  const taskId = uuidv4();

  const orderType = faker.helpers.arrayElement(orderTypes);
  const vehicleInfo = faker.helpers.arrayElement(vins);
  const lenderInfo = faker.helpers.arrayElement(lenders);
  const userInfo = faker.helpers.arrayElement(users);

  // await knex('packets').insert([
  //   {
  //     'packet_id': 'd26a97bb-951b-4a9c-a421-637f3184bbea',
  //     'requesting_company_id': '931cbbba-3ff6-487f-b3b5-76a27c897afc',
  //     'vendor_id': 'FL',
  //   },
  // ]);

  await knex('packets').insert([
    {
      packet_id: packetId,
      lender_id: lenderInfo.lender_id,
      lender_name: lenderInfo.lender_name,
      vin: vehicleInfo.vin,
      claim_number: faker.random.numeric(8),
      account_number: '20351b4f6f1b322a582a29c29ccc6a30$8760a991f6eee2d6d765e1e701906e5c09cbf39bf18ca4da$f91dd28ec538a7287b435c205571176fd0a87ee59534324ac0f65c7e549f9c5c',
      owners_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      owners_street_address: `${faker.random.numeric(2, { allowLeadingZeros: true })} ${faker.address.street()}`,
      owners_phone_number: faker.phone.number('+1##########'),
      settlement_amount: faker.commerce.price(20_000, 50_000),
      deductible: faker.commerce.price(500, 2_000),
      date_of_loss: faker.date.between(
        new Date('January 1 2022').toISOString(),
        new Date().toISOString(),
        ).toISOString().split('T')[0],
      finance_type: 'Retail',
      requesting_company_id: userInfo.requesting_company_id,
      vendor_id: 'LE',
      created_at: new Date().toJSON(),
      updated_at: new Date().toJSON(),
      make: vehicleInfo.make,
      model: vehicleInfo.model,
      year: vehicleInfo.year,
      user_id: userInfo.user_id,
      archived: false,
      title_remittance_address: `${faker.random.numeric(2, { allowLeadingZeros: true })} ${faker.address.street()}`,
      odometer: faker.random.numeric(5),
      tags: '[]',
      owners_name_updated: false,
      owners_address_updated: false,
      internal_status_updated_at: new Date().toJSON(),
      internal_status: 'Newly Added to Queue',
      do_not_notify_users: '[]',
      owner_retained: false,
      cause_of_loss: faker.helpers.arrayElement(causesOfLoss),
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
      test_claim: false,
      processing_group: processingGroup.LOSS_EXPRESS,
    },
  ]);

  await knex('event_logs').insert([
    {
      event_log_id: uuidv4(),
      packet_id: packetId,
      type: eventLogTypes.packetCreatedClaim.type,
      message: eventLogTypes.packetCreatedClaim.message,
      requesting_company_id: userInfo.requesting_company_id,
      created_at: new Date().toJSON(),
      updated_at: new Date().toJSON(),
      system_event: false,
      user_id: userInfo.user_id,
      internal_event: false,
    },
  ]);

  await knex('documents').insert([
    {
      packet_id: packetId,
      document_name: `${packetId}-Regular PDF.pdf`,
      created_at: new Date().toJSON(),
      updated_at: new Date().toJSON(),
      deleted: false,
      is_form: false,
      type: documentType.SETTLEMENT_BREAKDOWN,
    },
    {
      packet_id: packetId,
      document_name: `${packetId}-Regular PDF.pdf`,
      created_at: new Date().toJSON(),
      updated_at: new Date().toJSON(),
      deleted: false,
      is_form: false,
      type: documentType.VALUATION_REPORT,
    },
  ]);

  await knex('event_logs').insert([
    {
      event_log_id: uuidv4(),
      packet_id: packetId,
      type: eventLogTypes.documentAddedSettlementBreakdown.type,
      message: eventLogTypes.documentAddedSettlementBreakdown.message,
      requesting_company_id: userInfo.requesting_company_id,
      created_at: new Date().toJSON(),
      updated_at: new Date().toJSON(),
      system_event: false,
      user_id: userInfo.user_id,
      internal_event: false,
    },
    {
      event_log_id: uuidv4(),
      packet_id: packetId,
      type: eventLogTypes.documentAddedValuationReport.type,
      message: eventLogTypes.documentAddedValuationReport.message,
      requesting_company_id: userInfo.requesting_company_id,
      created_at: new Date().toJSON(),
      updated_at: new Date().toJSON(),
      system_event: false,
      user_id: userInfo.user_id,
      internal_event: false,
    },
  ]);

  await knex('orders').insert([
    {
      order_id: orderId,
      packet_id: packetId,
      type: orderType.orderType,
      status: 'pending',
      created_at: new Date().toJSON(),
      updated_at: new Date().toJSON(),
      order_type_id: orderType.orderTypeId,
      enabled: orderType.enabled,
      attempt_count: 0,
      system_attempt_count: 0,
      oda_failed: false,
    },
  ]);

  const [ num, int] = taskTypes.find((t) => t.id === orderType.taskTypeId).dueBy.split(' ');

  await knex('tasks').insert([
    {
      task_id: taskId,
      packet_id: packetId,
      status: 'unstarted',
      due_by: add(new Date(), {
        [int]: parseInt(num)
      }),
      priority: 1,
      created_at: new Date().toJSON(),
      updated_at: new Date().toJSON(),
      task_type_id: orderType.taskTypeId,
      processing_group: processingGroup.LOSS_EXPRESS,
    },
  ]);
  
  await knex('order_tasks').insert([
    {
      order_id: orderId,
      task_id: taskId,
      created_at: new Date().toJSON(),
      updated_at: new Date().toJSON(),
    },
  ]);

  await knex('event_logs').insert([
    {
      event_log_id: uuidv4(),
      packet_id: packetId,
      type: eventLogTypes.orderType[orderType.orderType].type,
      message: eventLogTypes.orderType[orderType.orderType].message,
      requesting_company_id: userInfo.requesting_company_id,
      created_at: new Date().toJSON(),
      updated_at: new Date().toJSON(),
      system_event: false,
      user_id: userInfo.user_id,
      internal_event: false,
    },
  ]);

};
