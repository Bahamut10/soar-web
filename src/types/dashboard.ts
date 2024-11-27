export const TRANSACTION_SOURCES = {
  PAYPAL: 'PAYPAL',
  CARD: 'CARD',
  OTHERS: 'OTHERS',
} as const;

export const TRANSACTION_TYPES = {
  INFLOW: 'INFLOW',
  OUTFLOW: 'OUTFLOW',
} as const;

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

export interface Cards {
  id: number;
  balance: number;
  card_holder: string;
  card_no: string;
  card_operator: string;
  valid_thru: string;
}

export interface RecentTransactions {
  id: number;
  amount: number;
  types: keyof typeof TRANSACTION_TYPES;
  created_at: string;
  source: keyof typeof TRANSACTION_SOURCES;
  subject: string;
}

export interface WeeklyActivities {
  day: keyof typeof DAYS;
  deposit: number;
  withdraw: number;
}

export interface ExpenseStatistics {
  name: string;
  value: number;
}

export interface Contacts {
  id: number;
  photo: string;
  name: string;
  position: string;
}

export interface BalanceHistory {
  month: keyof typeof MONTHS;
  balance: number;
}
