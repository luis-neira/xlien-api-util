'use strict';

const { orderTypesConstants } = require('./order-types');

// documentAdded constants
const DA_SETTLEMENT_BREAKDOWN = 'Documentation Added (settlement breakdown)';
const DA_VALUATION_REPORT = 'Documentation Added (valuation report)';

// packetCreated constants
const CLAIM_CREATED = 'Claim Created';

module.exports = {
  eventLogsConstants: {
    DA_SETTLEMENT_BREAKDOWN,
    DA_VALUATION_REPORT,
    CLAIM_CREATED
  },
  orderPlaced: {
    [orderTypesConstants.COPY_OF_TITLE]: {
      type: 'order-placed',
      message: 'Order Placed: Copy of Title'
    },
    [orderTypesConstants.TITLE_STATUS]: {
      type: 'order-placed',
      message: 'Order Placed: Title Status'
    },
    [orderTypesConstants.LIEN_RELEASE_LETTER]: {
      type: 'order-placed',
      message: 'Order Placed: Lien Release Letter'
    },
    [orderTypesConstants.INSTALLMENT_CONTRACT]: {
      type: 'order-placed',
      message: 'Order Placed: Installment Contract'
    },
    [orderTypesConstants.BILL_OF_SALE]: {
      type: 'order-placed',
      message: 'Order Placed: Bill of Sale'
    },
    [orderTypesConstants.REPO_AFFIDAVIT]: {
      type: 'order-placed',
      message: 'Order Placed: Repo Affidavit'
    },
    [orderTypesConstants.ONE_AND_THE_SAME_LETTER]: {
      type: 'order-placed',
      message: 'Order Placed: One and the Same Letter'
    },
    [orderTypesConstants.PAYMENT_STATUS]: {
      type: 'order-placed',
      message: 'Order Placed: Payment Status'
    },
    [orderTypesConstants.PAYMENT_HISTORY]: {
      type: 'order-placed',
      message: 'Order Placed: Payment History'
    }
  },
  documentAdded: {
    [DA_SETTLEMENT_BREAKDOWN]: {
      type: 'document-added',
      message: 'Documentation Added (settlement breakdown)'
    },
    [DA_VALUATION_REPORT]: {
      type: 'document-added',
      message: 'Documentation Added (valuation report)'
    }
  },
  packetCreated: {
    [CLAIM_CREATED]: {
      type: 'packet-created',
      message: 'Claim Created'
    }
  }
};
