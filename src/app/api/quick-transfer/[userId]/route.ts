import { contacts } from '@/app/api/databases/contacts';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const {
    nextUrl: { pathname },
  } = request;

  const userId = pathname.split('/')[3];
  const user = contacts.filter(
    (contact) => contact.id.toString() === userId
  )[0];

  return NextResponse.json({
    data: user,
  });
}
