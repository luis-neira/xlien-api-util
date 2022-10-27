'use strict';

const { taskNameToTaskType, taskTypesConstants } = require('../task-types');
const orderTypesConstants = require('./constants');

const orderNameToOrderType = {
  [orderTypesConstants.COPY_OF_TITLE]: {
    orderTypeId: '87b2ea57-56a3-42d6-82d3-14277a1d727d',
    name: orderTypesConstants.COPY_OF_TITLE,
    enabled: true,
    taskTypeId: taskNameToTaskType[taskTypesConstants.FULFILL_ORDER].taskTypeId
  },
  [orderTypesConstants.TITLE_STATUS]: {
    orderTypeId: '2c84eaf7-244e-438c-98df-f8b5f1771953',
    name: orderTypesConstants.TITLE_STATUS,
    enabled: false,
    taskTypeId: taskNameToTaskType[taskTypesConstants.FULFILL_ORDER].taskTypeId
  },
  [orderTypesConstants.LIEN_RELEASE_LETTER]: {
    orderTypeId: '6c8a9e6f-6b3f-40ee-bb55-a98f0afb4175',
    name: orderTypesConstants.LIEN_RELEASE_LETTER,
    enabled: false,
    taskTypeId: taskNameToTaskType[taskTypesConstants.FULFILL_ORDER].taskTypeId
  },
  [orderTypesConstants.INSTALLMENT_CONTRACT]: {
    orderTypeId: '9a153f91-729c-4d6d-b577-a6c818959aa4',
    name: orderTypesConstants.INSTALLMENT_CONTRACT,
    enabled: false,
    taskTypeId: taskNameToTaskType[taskTypesConstants.FULFILL_ORDER].taskTypeId
  },
  [orderTypesConstants.BILL_OF_SALE]: {
    orderTypeId: '38615d5d-26e0-406f-833a-ac121210772d',
    name: orderTypesConstants.BILL_OF_SALE,
    enabled: false,
    taskTypeId: taskNameToTaskType[taskTypesConstants.FULFILL_ORDER].taskTypeId
  },
  [orderTypesConstants.PAYMENT_HISTORY]: {
    orderTypeId: '958a6906-6231-420a-8f22-a4d04353f6ab',
    name: orderTypesConstants.PAYMENT_HISTORY,
    enabled: true,
    taskTypeId: taskNameToTaskType[taskTypesConstants.FULFILL_ORDER].taskTypeId
  },
  [orderTypesConstants.REPO_AFFIDAVIT]: {
    orderTypeId: '0d6c4a12-80ef-4c6d-a07f-44e1ce71ab1d',
    name: orderTypesConstants.REPO_AFFIDAVIT,
    enabled: false,
    taskTypeId: taskNameToTaskType[taskTypesConstants.FULFILL_ORDER].taskTypeId
  },
  [orderTypesConstants.ONE_AND_THE_SAME_LETTER]: {
    orderTypeId: '52b04ced-7b8e-4253-a2c7-07b7973deb08',
    name: orderTypesConstants.ONE_AND_THE_SAME_LETTER,
    enabled: false,
    taskTypeId: taskNameToTaskType[taskTypesConstants.FULFILL_ORDER].taskTypeId
  },
  [orderTypesConstants.PAYMENT_STATUS]: {
    orderTypeId: '9a18d312-e0a9-4417-baca-12e524ee34a3',
    name: orderTypesConstants.PAYMENT_STATUS,
    enabled: false,
    taskTypeId: taskNameToTaskType[taskTypesConstants.FULFILL_ORDER].taskTypeId
  }
};

module.exports = {
  orderTypesConstants,
  orderNameToOrderType,
  orderTypes: Object.values(orderNameToOrderType)
};
