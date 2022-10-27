'use strict';

const taskTypesConstants = require('./constants');

const taskNameToTaskType = {
  [taskTypesConstants.SEND_LOSS_INITIATION_DOCS]: {
    taskTypeId: 'c8ab4da8-3cd5-4bfa-b6a7-71c100387e91',
    hardcodedId: 'SEND_LOSS_INITIATION_DOCS',
    name: 'Send Loss Initiation Docs',
    dueBy: '8 hours'
  },
  [taskTypesConstants.LOSS_INITIATION_CALL]: {
    taskTypeId: '1b8935a2-3637-460f-bd82-3b0150432c2a',
    hardcodedId: 'LOSS_INITIATION_CALL',
    name: 'Loss Initiation Call',
    dueBy: '1 hour'
  },
  [taskTypesConstants.FULFILL_ORDER]: {
    taskTypeId: '3ed60136-bd0e-4bb9-8d4e-3e6efb399483',
    hardcodedId: 'FULFILL_ORDER',
    name: 'Fulfill Order(s)',
    dueBy: '1 hour'
  },
  [taskTypesConstants.CHANGE_REVIEW]: {
    taskTypeId: 'ff466f81-aa79-4c4a-88c9-24aac24fffcd',
    hardcodedId: 'CHANGE_REVIEW',
    name: 'Review for Changes',
    dueBy: '1 hours'
  },
  [taskTypesConstants.CHECK_FOLLOWUP]: {
    taskTypeId: '804cc953-0e0e-4960-a9ab-b8a7c03e8fe6',
    hardcodedId: 'CHECK_FOLLOWUP',
    name: 'Follow-up on Check',
    dueBy: '4 hours'
  },
  [taskTypesConstants.CREATE_DOCUMENT]: {
    task_type_id: '66c1f7e3-ebce-4203-9a5c-96b22ff492a1',
    hardcoded_id: 'CREATE_DOCUMENT',
    name: 'Create Document',
    dueBy: '30 minutes'
  },
  [taskTypesConstants.CUSTOMER_AUTH_CALL]: {
    task_type_id: '2c80eee0-fb81-49c8-aef9-046b4cff102a',
    hardcoded_id: 'CUSTOMER_AUTH_CALL',
    name: 'Request Customer Authorization',
    dueBy: '1 hours'
  },
  [taskTypesConstants.FULFILL_ORDER]: {
    taskTypeId: 'd56ddf90-10fb-44e2-9cd8-83107e002ad6',
    hardcodedId: 'FULFILL_ORDER',
    name: 'Fulfill Order(s)',
    dueBy: '1 hour'
  },
  [taskTypesConstants.HANDLE_DISPUTED_COUNTER_OFFER]: {
    taskTypeId: '97b7d98c-e102-4005-8120-f58f36e06329',
    hardcodedId: 'HANDLE_DISPUTED_COUNTER_OFFER',
    name: 'Handle Disputed Settlement Counter',
    dueBy: '4 hours'
  },
  [taskTypesConstants.LOG_FOLLOWUP_CALL]: {
    taskTypeId: 'ee8da20c-9c8a-41d9-8f3c-7b7a32654b2e',
    hardcodedId: 'LOG_FOLLOWUP_CALL',
    name: 'Follow-up on LoG',
    dueBy: '2 hours'
  },
  [taskTypesConstants.LOSS_INITIATION_CALL]: {
    taskTypeId: 'f60e8cfb-5800-498f-9615-86e7653739ae',
    hardcodedId: 'LOSS_INITIATION_CALL',
    name: 'Loss Initiation Call',
    dueBy: '1 hours'
  },
  [taskTypesConstants.PAYOFF_CALL]: {
    taskTypeId: 'c4e3fd63-7945-4f2f-ab9e-6ff303556b2a',
    hardcodedId: 'PAYOFF_CALL',
    name: 'Call for Payoff',
    dueBy: '45 minutes'
  },
  [taskTypesConstants.PAYOFF_ENTRY]: {
    taskTypeId: '534abb76-15b8-47b3-8f95-354c085bc1da',
    hardcodedId: 'PAYOFF_ENTRY',
    name: 'Payoff Entry',
    dueBy: '10 minutes'
  },
  [taskTypesConstants.PAYOFF_FOLLOWUP_CALL]: {
    taskTypeId: '24ecd3da-c447-4146-ad32-964014142e6c',
    hardcodedId: 'PAYOFF_FOLLOWUP_CALL',
    name: 'Follow-up on Payoff',
    dueBy: '2 hours'
  },
  [taskTypesConstants.QUALITY_REVIEW]: {
    taskTypeId: 'a55f1a19-9a45-4ee0-beb2-e9a3d792cf72',
    hardcodedId: 'QUALITY_REVIEW',
    name: 'Review for Quality',
    dueBy: '4 hours'
  },
  [taskTypesConstants.RESEND_LOG_REQUEST]: {
    taskTypeId: 'ad841fe2-0f37-48f7-afa1-fc546404ccb2',
    hardcodedId: 'RESEND_LOG_REQUEST',
    name: 'Re-send LoG Request',
    dueBy: '2 hours'
  },
  [taskTypesConstants.REVIEW_ADJUSTER_DOC]: {
    taskTypeId: '10bb46bc-269c-4c23-ac28-aa26ddcab6f8',
    hardcodedId: 'REVIEW_ADJUSTER_DOC',
    name: 'Review Document from Adjuster',
    dueBy: '15 minutes'
  },
  [taskTypesConstants.REVIEW_LENDER_NOTE]: {
    taskTypeId: 'aeb239fe-5c74-4ed2-902f-07fac22d8d07',
    hardcodedId: 'REVIEW_LENDER_NOTE',
    name: 'Review Note from Lender',
    dueBy: '1 hours'
  },
  [taskTypesConstants.REVIEW_LENDER_COUNTER_OFFER]: {
    taskTypeId: '53731c3f-552a-4fc2-bdb4-251b00d8eeca',
    hardcodedId: 'REVIEW_LENDER_OFFER',
    name: 'Review Lender Counter-Offer',
    dueBy: '1 hours'
  },
  [taskTypesConstants.REVIEW_LENDER_OFFER]: {
    taskTypeId: '82f68023-80b7-40c1-9782-2312492f7b33',
    hardcodedId: 'REVIEW_LENDER_OFFER',
    name: 'Review Lender Offer',
    dueBy: '2 hours'
  },
  [taskTypesConstants.SEND_DM]: {
    taskTypeId: '80e642ba-31db-47fc-8411-a0f31570f9e0',
    hardcodedId: 'SEND_DM',
    name: 'Send Message to Adjuster',
    dueBy: '1 hours'
  },
  [taskTypesConstants.SEND_LOG_REQUEST]: {
    taskTypeId: 'b96f52b6-bcc9-4913-a196-845c5ab4c5cf',
    hardcodedId: 'SEND_LOG_REQUEST',
    name: 'Send LoG Request',
    dueBy: '2 hours'
  },
  [taskTypesConstants.SEND_LOSS_INITIATION_DOCS]: {
    taskTypeId: '558310b5-4d2d-4c0f-899d-bd1b3af3dab4',
    hardcodedId: 'SEND_LOSS_INITIATION_DOCS',
    name: 'Send Loss Initiation Docs',
    dueBy: '8 hours'
  },
  [taskTypesConstants.SEND_PAYOFF_REQUEST]: {
    taskTypeId: '63ffb3ca-374a-4e3d-9013-e9d0c45970d9',
    hardcodedId: 'SEND_PAYOFF_REQUEST',
    name: 'Send Payoff Request',
    dueBy: '1 hours'
  },
  [taskTypesConstants.TITLE_FOLLOWUP]: {
    taskTypeId: 'f23de472-b250-49d0-b865-fa6e0e9679e0',
    hardcodedId: 'TITLE_FOLLOWUP',
    name: 'Follow-up on Title',
    dueBy: '4 hours'
  },
  [taskTypesConstants.VALIDATE_DOCUMENT]: {
    taskTypeId: '5f2cad3a-4e14-4a18-94a7-82cf3912c09f',
    hardcodedId: 'VALIDATE_DOCUMENT',
    name: 'Validate Document',
    dueBy: '10 minutes'
  },
  [taskTypesConstants.VERIFY_LENDER]: {
    taskTypeId: '08492ca0-4520-4618-a33c-48a808abbc1d',
    hardcodedId: 'VERIFY_LENDER',
    name: 'Verify Lender',
    dueBy: '2 hours'
  },
  [taskTypesConstants.WRITTEN_PAYOFF]: {
    taskTypeId: '0c56c248-0dc0-4a4d-8776-ed9f49b8903f',
    hardcodedId: 'WRITTEN_PAYOFF',
    name: 'Written Payoff (Customer Auth)',
    dueBy: '1 hours'
  }
};

module.exports = {
  taskTypesConstants,
  taskNameToTaskType,
  taskTypes: Object.values(taskNameToTaskType)
};
