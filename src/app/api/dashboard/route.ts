import { activities } from '@/app/api/databases/activities';
import { balances } from '@/app/api/databases/balances';
import { cards } from '@/app/api/databases/cards';
import { contacts } from '@/app/api/databases/contacts';
import { expenses } from '@/app/api/databases/expenses';
import { transactions } from '@/app/api/databases/transactions';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    data: {
      cards,
      recent_transactions: transactions,
      weekly_activities: activities,
      expense_statistics: expenses,
      contacts,
      balance_history: balances,
    },
  });
}
