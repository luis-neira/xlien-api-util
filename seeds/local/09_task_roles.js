'use strict';

const taskRolesConstants = require('../../mocks/task-roles');

exports.seed = async knex => {
  const admin = {
    name: taskRolesConstants.ADMIN,
    can_search_claims: false,
    can_send_lender_emails: false
  };
  
  const cdd = {
    name: taskRolesConstants.CDD,
    can_manage_lenders: false,
    can_search_claims: false,
    can_send_lender_emails: false
  };
  
  const cdm = {
    name: taskRolesConstants.CDM,
    can_manage_lenders: false,
    can_search_claims: false,
    can_send_lender_emails: false
  };
  
  const qas = {
    name: taskRolesConstants.QAS,
    can_edit_users: false,
    can_send_faxes: false,
    can_manage_lenders: false,
    can_validate_documents: false,
    can_create_forms: false,
    can_upload_documents: false,
    can_send_direct_messages: false,
    can_see_status_voicemails: false,
    can_see_dispute_voicemails: false,
    can_see_other_voicemails: false,
    can_view_reports: false,
    can_assign_tasks: false,
    can_search_claims: false,
    can_send_lender_emails: false,
    is_manager: false,
  };
  
  const scs = {
    name: taskRolesConstants.SCS,
    can_edit_users: false,
    can_manage_lenders: false,
    can_search_claims: false,
    can_send_lender_emails: false,
    is_manager: false,
  };
  
  const cpt = {
    name: taskRolesConstants.CPT,
    can_edit_users: false,
    can_manage_lenders: false,
    can_search_claims: false,
    can_send_lender_emails: false,
    is_manager: false,
  };
  
  const ccs = {
    name: taskRolesConstants.CCS,
    can_edit_users: false,
    can_join_active_calls: false,
    can_access_call_recordings: false,
    can_send_faxes: false,
    can_manage_lenders: false,
    can_validate_documents: false,
    can_create_forms: false,
    can_cancel_payoffs: false,
    can_cancel_logs: false,
    can_run_auto_payoffs: false,
    can_see_status_voicemails: false,
    can_see_dispute_voicemails: false,
    can_see_other_voicemails: false,
    can_view_reports: false,
    can_assign_tasks: false,
    can_search_claims: false,
    can_send_lender_emails: false,
    is_manager: false,
  };
  
  const cds = {
    name: taskRolesConstants.CDS,
    can_edit_users: false,
    can_edit_claim_info: false,
    can_edit_lender_info: false,
    can_join_active_calls: false,
    can_access_call_recordings: false,
    can_manage_lenders: false,
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
    is_manager: false,
  };
  
  const cas = {
    name: taskRolesConstants.CAS,
    can_edit_users: false,
    can_edit_claim_info: false,
    can_join_active_calls: false,
    can_access_call_recordings: false,
    can_manage_lenders: false,
    can_validate_documents: false,
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
    is_manager: false,
  };
  
  const lps = {
    name: taskRolesConstants.LPS,
    can_edit_users: false,
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
    can_see_status_voicemails: false,
    can_see_dispute_voicemails: false,
    can_see_other_voicemails: false,
    can_view_reports: false,
    can_assign_tasks: false,
    can_search_claims: false,
    can_send_lender_emails: false,
    is_manager: false,
  };
  
  const dvs = {
    name: taskRolesConstants.DVS,
    can_edit_users: false,
    can_edit_claim_info: false,
    can_edit_lender_info: false,
    can_join_active_calls: false,
    can_access_call_recordings: false,
    can_send_faxes: false,
    can_manage_lenders: false,
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
    is_manager: false,
  };

  const options = {
    active: true,
    created_at: knex.raw('NOW()'),
    updated_at: knex.raw('NOW()'),
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
    can_search_claims: true,
    can_send_lender_emails: true,
    is_manager: true
  };
  
  const taskRoles = [
    makeTaskRole(admin, options),
    makeTaskRole(cdd, options),
    makeTaskRole(cdm, options),
    makeTaskRole(qas, options),
    makeTaskRole(scs, options),
    makeTaskRole(cpt, options),
    makeTaskRole(ccs, options),
    makeTaskRole(cds, options),
    makeTaskRole(cas, options),
    makeTaskRole(lps, options),
    makeTaskRole(dvs, options),
  ];
  
  function makeTaskRole(taskRole, options) {
    return Object.assign({}, options, taskRole);
  };

  await knex('task_roles').insert(taskRoles);
};
