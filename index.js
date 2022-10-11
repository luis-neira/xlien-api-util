'use strict';

require('dotenv').config();
const { program } = require('commander');

const DatabaseClient = require('./db/client');

program
  .option('-a, --additional-order-types', 'set column in requesting_companies table to TRUE')
  .option('-e, --email-address', "set column in users to 'luis.neira@lossexpress.com'")
  .option('-w, --worker-can', "set true all values for worker")

program.parse(process.argv);

const options = program.opts();

const knex = DatabaseClient.initClient();

if (options.additionalOrderTypes) {
  knex('requesting_companies')
    .update({
      additional_order_types: true
    }).then((rows) => {
      console.log(`${rows} rows successfully changed`);
      knex.destroy();
    });
} else if (options.emailAddress) {
  knex('users')
    .where({ user_role: 'Administrator' })
    .update({
      email_address: 'luis.neira@lossexpress.com'
    }).then((rows) => {
      console.log(`${rows} rows successfully changed`);
      knex.destroy();
    });
} else if (options.workerCan) {
  knex('workers')
  .where({ username: 'luisneira' })
  .update({
    can_edit_users: true,
    can_edit_claim_info: true,
    can_edit_lender_info: true,
    can_join_active_calls: true,
    can_access_call_recordings: true,
    can_send_faxes: true,
    can_manage_lenders: true,
    can_validate_documents: true,
    can_create_forms: true,
    can_upload_documents: true,
    can_cancel_payoffs: true,
    can_cancel_logs: true,
    can_send_direct_messages: true,
    can_run_auto_payoffs: true,
    can_see_status_voicemails: true,
    can_see_dispute_voicemails: true,
    can_see_other_voicemails: true,
    can_view_reports: true,
    can_assign_tasks: true,
    can_manage_notices: true,
    can_search_claims: true,
    can_send_lender_emails: true,
    can_edit_carrier_users: true,
    clocked_in: true,
    can_delete_direct_messages: true,
    can_fix_it: true,
    can_manage_xapi_clients: true,
    can_stack_claims: true,
    can_manage_sso_clients: true,
    superuser: true,
    can_attach_documents: true,
  }).then((rows) => {
    console.log(`${rows} rows successfully changed`);
    knex.destroy();
  });
} else { 
  console.log('please supply arguments!');
  console.log(options)
}
