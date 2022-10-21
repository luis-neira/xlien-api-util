'use strict';

module.exports = {
  packetCreatedClaim: {
    type: 'packet-created',
    message: 'Claim Created',
  },
  documentAddedSettlementBreakdown: {
    type: 'document-added',
    message: 'Documentation Added (settlement breakdown)',
  },
  documentAddedValuationReport: {
    type: 'document-added',
    message: 'Documentation Added (valuation report)',
  },
  orderTypes: { 
    'Copy of Title': {
      type: 'order-placed',
      message: 'Order Placed: Copy of Title',
    },
    'Title Status': {
      type: 'order-placed',
      message: 'Order Placed: Title Status',
    },
    'Lien Release Letter': {
      type: 'order-placed',
      message: 'Order Placed: Lien Release Letter',
    },
    'Installment Contract': {
      type: 'order-placed',
      message: 'Order Placed: Installment Contract',
    },
    'Bill of Sale': {
    type: 'order-placed',
    message: 'Order Placed: Bill of Sale',
    },
    'Repo Affidavit': {
      type: 'order-placed',
      message: 'Order Placed: Repo Affidavit',
    },
    'One and the Same Letter': {
      type: 'order-placed',
      message: 'Order Placed: One and the Same Letter',
    },
    'Payment Status': {
      type: 'order-placed',
      message: 'Order Placed: Payment Status',
    },
  }
}
