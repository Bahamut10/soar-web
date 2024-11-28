import { contacts } from '@/app/databases/contacts';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  request: NextRequest,
  context: { params: { userId: string } }
) {
  const { params } = context;
  const user = contacts.filter(
    (contact) => contact.id.toString() === params.userId
  )[0];

  return NextResponse.json({
    data: user,
  });
}
