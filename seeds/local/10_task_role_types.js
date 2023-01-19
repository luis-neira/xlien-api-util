'use strict';

const { taskTypesConstants } = require('../../mocks/task-types');
const taskRolesConstants = require('../../mocks/task-roles');

const admin = {
  taskRole: taskRolesConstants.ADMIN,
  taskTypes: [
    taskTypesConstants.PAYOFF_FOLLOWUP_CALL,
    taskTypesConstants.CUSTOMER_AUTH_CALL,
    taskTypesConstants.VALIDATE_DOCUMENT,
    taskTypesConstants.CREATE_DOCUMENT,
    taskTypesConstants.SEND_DM,
    taskTypesConstants.QUALITY_REVIEW,
    taskTypesConstants.PAYOFF_CALL,
    taskTypesConstants.LOG_FOLLOWUP_CALL,
    taskTypesConstants.CHANGE_REVIEW
  ],
};

const cas = {
  taskRole: taskRolesConstants.CAS,
  taskTypes: [
    taskTypesConstants.CUSTOMER_AUTH_CALL
  ],
};

const ccs = {
  taskRole: taskRolesConstants.CCS,
  taskTypes: [
    taskTypesConstants.CUSTOMER_AUTH_CALL,
    taskTypesConstants.SEND_DM
  ],
};

const cdd = {
  taskRole: taskRolesConstants.CDD,
  taskTypes: [
    taskTypesConstants.PAYOFF_FOLLOWUP_CALL,
    taskTypesConstants.CUSTOMER_AUTH_CALL,
    taskTypesConstants.VALIDATE_DOCUMENT,
    taskTypesConstants.CREATE_DOCUMENT,
    taskTypesConstants.SEND_DM,
    taskTypesConstants.QUALITY_REVIEW,
    taskTypesConstants.PAYOFF_CALL,
    taskTypesConstants.LOG_FOLLOWUP_CALL,
    taskTypesConstants.CHANGE_REVIEW
  ],
};

const cdm = {
  taskRole: taskRolesConstants.CDM,
  taskTypes: [
    taskTypesConstants.PAYOFF_FOLLOWUP_CALL,
    taskTypesConstants.CUSTOMER_AUTH_CALL,
    taskTypesConstants.VALIDATE_DOCUMENT,
    taskTypesConstants.CREATE_DOCUMENT,
    taskTypesConstants.SEND_DM,
    taskTypesConstants.QUALITY_REVIEW,
    taskTypesConstants.PAYOFF_CALL,
    taskTypesConstants.LOG_FOLLOWUP_CALL,
    taskTypesConstants.CHANGE_REVIEW
  ],
};

const cds = {
  taskRole: taskRolesConstants.CDS,
  taskTypes: [
    taskTypesConstants.CREATE_DOCUMENT,
    taskTypesConstants.VALIDATE_DOCUMENT
  ],
};

const cpt = {
  taskRole: taskRolesConstants.CPT,
  taskTypes: [
    taskTypesConstants.PAYOFF_FOLLOWUP_CALL,
    taskTypesConstants.CUSTOMER_AUTH_CALL,
    taskTypesConstants.VALIDATE_DOCUMENT,
    taskTypesConstants.CREATE_DOCUMENT,
    taskTypesConstants.SEND_DM,
    taskTypesConstants.QUALITY_REVIEW,
    taskTypesConstants.PAYOFF_CALL,
    taskTypesConstants.LOG_FOLLOWUP_CALL,
    taskTypesConstants.CHANGE_REVIEW
  ],
};

const dvs = {
  taskRole: taskRolesConstants.DVS,
  taskTypes: [
    taskTypesConstants.VALIDATE_DOCUMENT,
  ],
};

const lps = {
  taskRole: taskRolesConstants.LPS,
  taskTypes: [
    taskTypesConstants.PAYOFF_FOLLOWUP_CALL,
    taskTypesConstants.PAYOFF_CALL,
    taskTypesConstants.LOG_FOLLOWUP_CALL,
  ],
};

const qas = {
  taskRole: taskRolesConstants.QAS,
  taskTypes: [
    taskTypesConstants.QUALITY_REVIEW,
    taskTypesConstants.CHANGE_REVIEW
  ],
};

const scs = {
  taskRole: taskRolesConstants.SCS,
  taskTypes: [
    taskTypesConstants.PAYOFF_FOLLOWUP_CALL,
    taskTypesConstants.CUSTOMER_AUTH_CALL,
    taskTypesConstants.VALIDATE_DOCUMENT,
    taskTypesConstants.CREATE_DOCUMENT,
    taskTypesConstants.SEND_DM,
    taskTypesConstants.QUALITY_REVIEW,
    taskTypesConstants.PAYOFF_CALL,
    taskTypesConstants.LOG_FOLLOWUP_CALL,
    taskTypesConstants.CHANGE_REVIEW
  ],
};


exports.seed = async knex => {
  function getTaskRoleId(name) {
    return knex('task_roles')
    .select('task_role_id')
    .where('name', name)
    .first();
  }

  function getTaskTypeId(name) {
    return knex('task_types')
    .select('task_type_id')
    .where('name', name)
    .first();
  }

  async function createPayload(taskRoleObj) {
    const payload = [];

    const { taskRole, taskTypes } = taskRoleObj;

    const { task_role_id } = await getTaskRoleId(taskRole);
    
    for (let i = 0; i < taskTypes.length; i++) {
      const taskTypeName = taskTypes[i];
      
      const { task_type_id } = await getTaskTypeId(taskTypeName);
      
      payload.push({
        task_role_id,
        task_type_id,
        created_at: knex.raw('NOW()'),
        updated_at: knex.raw('NOW()'),
      })
    }

    return payload;
  }

  const result = await Promise.all([
    createPayload(admin),
    createPayload(cas),
    createPayload(ccs),
    createPayload(cdd),
    createPayload(cdm),
    createPayload(cds),
    createPayload(cpt),
    createPayload(dvs),
    createPayload(lps),
    createPayload(qas),
    createPayload(scs),
  ])

  await knex('task_role_types').insert(result.flat());
};
