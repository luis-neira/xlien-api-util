'use strict';

exports.seed = async knex => {
  const bpo_manager = {
    name: 'BPO Manager',
  };
  
  const quality = {
    name: 'Quality',
  };
  
  const front_office_lead = {
    name: 'Front Office - Lead',
  };
  
  const front_office = {
    name: 'Front Office',
  };
  
  const back_office_lead = {
    name: 'Back Office - Lead',
  };
  
  const back_office = {
    name: 'Back Office',
  };

  const options = {
    active: true,
    created_at: knex.raw('NOW()'),
    updated_at: knex.raw('NOW()'),
    can_edit_users: false,
    can_edit_claim_info: false,
    can_edit_lender_info: false,
    can_join_active_calls: false,
    can_access_call_recordings: false,
    can_send_faxes: false,
    can_manage_lenders: false,
    can_validate_documents: false,
    can_create_forms: false,
    can_upload_documents: false,
    can_cancel_payoffs: false,
    can_cancel_logs: false,
    can_send_direct_messages: false,
    can_run_auto_payoffs: false,
    can_see_status_voicemails: false,
    can_see_dispute_voicemails: false,
    can_see_other_voicemails: false,
    can_view_reports: false,
    can_assign_tasks: false,
    can_search_claims: false,
    can_send_lender_emails: false,
    is_manager: false
  };
  
  const taskRoles = [
    makeTaskRole(bpo_manager, options),
    makeTaskRole(quality, options),
    makeTaskRole(front_office_lead, options),
    makeTaskRole(front_office, options),
    makeTaskRole(back_office_lead, options),
    makeTaskRole(back_office, options),
  ];
  
  function makeTaskRole(taskRole, options) {
    return Object.assign({}, options, taskRole);
  };

  await knex('task_roles').insert(taskRoles);
};
