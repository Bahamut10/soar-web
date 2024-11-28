import { activities } from '@/app/databases/activities';
import { balances } from '@/app/databases/balances';
import { cards } from '@/app/databases/cards';
import { contacts } from '@/app/databases/contacts';
import { expenses } from '@/app/databases/expenses';
import { transactions } from '@/app/databases/transactions';
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
