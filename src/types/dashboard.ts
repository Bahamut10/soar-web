export const TRANSACTION_SOURCES = {
  PAYPAL: 'PAYPAL',
  CARD: 'CARD',
  OTHERS: 'OTHERS',
} as const;

export const TRANSACTION_TYPES = {
  INFLOW: 'INFLOW',
  OUTFLOW: 'OUTFLOW',
} as const;

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
  day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
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
  month:
    | 'Jan'
    | 'Feb'
    | 'Mar'
    | 'Apr'
    | 'May'
    | 'Jun'
    | 'Jul'
    | 'Aug'
    | 'Sep'
    | 'Oct'
    | 'Nov'
    | 'Dec';
  balance: number;
}
