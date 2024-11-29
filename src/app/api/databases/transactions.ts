const TRANSACTION_TYPES = {
  OUTFLOW: 'OUTFLOW',
  INFLOW: 'INFLOW',
};

const TRANSACTION_SOURCES = {
  PAYPAL: 'PAYPAL',
  CARD: 'CARD',
  OTHERS: 'OTHERS',
};

export const transactions = [
  {
    id: 1,
    amount: 850,
    types: TRANSACTION_TYPES.OUTFLOW,
    created_at: new Date(),
    source: TRANSACTION_SOURCES.CARD,
    subject: '',
  },
  {
    id: 2,
    amount: 8500,
    types: TRANSACTION_TYPES.INFLOW,
    created_at: new Date(),
    source: TRANSACTION_SOURCES.PAYPAL,
    subject: '',
  },
  {
    id: 3,
    amount: 800,
    types: TRANSACTION_TYPES.INFLOW,
    created_at: new Date(),
    source: TRANSACTION_SOURCES.OTHERS,
    subject: 'Jemi Wilson',
  },
  {
    id: 4,
    amount: 5100,
    types: TRANSACTION_TYPES.OUTFLOW,
    created_at: new Date(),
    source: TRANSACTION_SOURCES.OTHERS,
    subject: 'Someone Else',
  },
];