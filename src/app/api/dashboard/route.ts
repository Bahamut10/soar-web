import { NextResponse } from 'next/server';

const CARD_OPERATORS = {
  MASTERCARD: 'Mastercard',
};

const TRANSACTION_TYPES = {
  OUTFLOW: 'OUTFLOW',
  INFLOW: 'INFLOW',
};

const TRANSACTION_SOURCES = {
  PAYPAL: 'PAYPAL',
  CARD: 'CARD',
  OTHERS: 'OTHERS',
};

const DAYS = {
  SAT: 'Sat',
  SUN: 'Sun',
  MON: 'Mon',
  TUE: 'Tue',
  WED: 'Wed',
  THU: 'Thu',
  FRI: 'Fri',
};

const MONTHS = {
  JAN: 'Jan',
  FEB: 'Feb',
  MAR: 'Mar',
  APR: 'Apr',
  MAY: 'May',
  JUN: 'Jun',
  JUL: 'Jul',
  AUG: 'Aug',
  SEP: 'Sep',
  OCT: 'Oct',
  NOV: 'Nov',
  DEC: 'Dec',
};

export async function GET() {
  return NextResponse.json({
    data: {
      cards: [
        {
          id: 1,
          balance: 5500,
          card_operator: CARD_OPERATORS.MASTERCARD,
          card_holder: 'Eddy Cusuma',
          card_no: '3778 1234 5677 1234',
          valid_thru: '12/22',
        },
        {
          id: 2,
          balance: 7500,
          card_operator: CARD_OPERATORS.MASTERCARD,
          card_holder: 'Charlene Reed',
          card_no: '3778 1234 5677 1234',
          valid_thru: '12/22',
        },
      ],
      recent_transactions: [
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
      ],
      weekly_activities: [
        { day: DAYS.SAT, deposit: 400, withdraw: 300 },
        { day: DAYS.SUN, deposit: 200, withdraw: 100 },
        { day: DAYS.MON, deposit: 500, withdraw: 400 },
        { day: DAYS.TUE, deposit: 300, withdraw: 200 },
        { day: DAYS.WED, deposit: 450, withdraw: 350 },
        { day: DAYS.THU, deposit: 400, withdraw: 250 },
        { day: DAYS.FRI, deposit: 300, withdraw: 200 },
      ],
      expense_statistics: [
        { name: 'Entertainment', value: 30 },
        { name: 'Bill Expense', value: 15 },
        { name: 'Investment', value: 20 },
        { name: 'Others', value: 35 },
      ],
      contacts: [
        {
          id: 1,
          photo: '/user-1.png',
          name: 'Livia Bator',
          position: 'CEO',
        },
        {
          id: 2,
          photo: '/user-2.png',
          name: 'Randy Press',
          position: 'Director',
        },
        {
          id: 3,
          photo: '/user-3.png',
          name: 'Workman',
          position: 'Designer',
        },
        {
          id: 4,
          photo: '/user-4.png',
          name: 'Workman',
          position: 'Designer',
        },
        {
          id: 5,
          photo: '/user-5.png',
          name: 'Workman',
          position: 'Designer',
        },
      ],
      balance_history: [
        { month: MONTHS.JUL, balance: 100 },
        { month: MONTHS.AUG, balance: 300 },
        { month: MONTHS.SEP, balance: 500 },
        { month: MONTHS.OCT, balance: 800 },
        { month: MONTHS.NOV, balance: 200 },
        { month: MONTHS.DEC, balance: 600 },
        { month: MONTHS.JAN, balance: 650 },
      ],
    },
  });
}
