const CARD_OPERATORS = {
  MASTERCARD: 'Mastercard',
};

export const cards = [
  {
    id: 1,
    balance: 5500,
    card_operator: CARD_OPERATORS.MASTERCARD,
    card_holder: 'Livia Bator',
    card_no: '3778 1234 5677 1234',
    valid_thru: '12/22',
  },
  {
    id: 2,
    balance: 7500,
    card_operator: CARD_OPERATORS.MASTERCARD,
    card_holder: 'Livia Bator',
    card_no: '3778 1234 5677 4356',
    valid_thru: '10/28',
  },
  {
    id: 3,
    balance: 8500,
    card_operator: CARD_OPERATORS.MASTERCARD,
    card_holder: 'Livia Bator',
    card_no: '8999 1234 5677 4356',
    valid_thru: '10/28',
  },
];
