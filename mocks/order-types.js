'use strict';

const { taskTypes, taskConstants } = require('./task-types');

// order contants
const COPY_OF_TITLE = 'Copy of Title';
const TITLE_STATUS = 'Title Status';
const LIEN_RELEASE_LETTER = 'Lien Release Letter';
const INSTALLMENT_CONTRACT = 'Installment Contract';
const BILL_OF_SALE = 'Bill of Sale';
const REPO_AFFIDAVIT = 'Repo Affidavit';
const ONE_AND_THE_SAME_LETTER = 'One and the Same Letter';
const PAYMENT_STATUS = 'Payment Status';
const PAYMENT_HISTORY = 'Payment History';

module.exports = {
  orderTypesConstants: {
    COPY_OF_TITLE,
    TITLE_STATUS,
    LIEN_RELEASE_LETTER,
    INSTALLMENT_CONTRACT,
    BILL_OF_SALE,
    REPO_AFFIDAVIT,
    ONE_AND_THE_SAME_LETTER,
    PAYMENT_STATUS,
    PAYMENT_HISTORY
  },
  orderTypes: [
    {
      orderTypeId: '87b2ea57-56a3-42d6-82d3-14277a1d727d',
      orderType: COPY_OF_TITLE,
      enabled: true,
      taskTypeId: taskTypes[taskConstants.FULFILL_ORDER].taskTypeId
    },
    {
      orderTypeId: '2c84eaf7-244e-438c-98df-f8b5f1771953',
      orderType: TITLE_STATUS,
      enabled: false,
      taskTypeId: taskTypes[taskConstants.FULFILL_ORDER].taskTypeId
    },
    {
      orderTypeId: '6c8a9e6f-6b3f-40ee-bb55-a98f0afb4175',
      orderType: LIEN_RELEASE_LETTER,
      enabled: false,
      taskTypeId: taskTypes[taskConstants.FULFILL_ORDER].taskTypeId
    },
    {
      orderTypeId: '9a153f91-729c-4d6d-b577-a6c818959aa4',
      orderType: INSTALLMENT_CONTRACT,
      enabled: false,
      taskTypeId: taskTypes[taskConstants.FULFILL_ORDER].taskTypeId
    },
    {
      orderTypeId: '38615d5d-26e0-406f-833a-ac121210772d',
      orderType: BILL_OF_SALE,
      enabled: false,
      taskTypeId: taskTypes[taskConstants.FULFILL_ORDER].taskTypeId
    },
    {
      orderTypeId: '958a6906-6231-420a-8f22-a4d04353f6ab',
      orderType: PAYMENT_HISTORY,
      enabled: true,
      taskTypeId: taskTypes[taskConstants.FULFILL_ORDER].taskTypeId
    },
    {
      orderTypeId: '0d6c4a12-80ef-4c6d-a07f-44e1ce71ab1d',
      orderType: REPO_AFFIDAVIT,
      enabled: false,
      taskTypeId: taskTypes[taskConstants.FULFILL_ORDER].taskTypeId
    },
    {
      orderTypeId: '52b04ced-7b8e-4253-a2c7-07b7973deb08',
      orderType: ONE_AND_THE_SAME_LETTER,
      enabled: false,
      taskTypeId: taskTypes[taskConstants.FULFILL_ORDER].taskTypeId
    },
    {
      orderTypeId: '9a18d312-e0a9-4417-baca-12e524ee34a3',
      orderType: PAYMENT_STATUS,
      enabled: false,
      taskTypeId: taskTypes[taskConstants.FULFILL_ORDER].taskTypeId
    }
  ]
};
