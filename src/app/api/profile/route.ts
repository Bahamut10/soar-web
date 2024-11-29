import { users } from '@/app/api/databases/users';
import { parse } from 'cookie';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export interface ProfileStruct {
  id: string;
  photo: string;
  name: string;
  email: string;
  dateOfBirth: string;
  permanentAddress: string;
  postalCode: string;
  username: string;
  password?: string;
  presentAddress: string;
  city: string;
  country: string;
}

export async function GET(request: NextRequest) {
  const cookies = parse(request.headers.get('cookie') || '');
  const token = cookies.token;

  if (!token) {
    return NextResponse.json(
      { message: 'Unauthorized Access' },
      { status: 401 }
    );
  }

  const _token = jwt.decode(token) as ProfileStruct;

  const user: { [key: string]: unknown } = users.filter(
    (user) => user.id.toString() === _token?.id
  )[0];

  const _data: { [key: string]: unknown } = {};
  for (const key in user) {
    if (key !== 'password') {
      _data[key] = user[key];
    }
  }

  return NextResponse.json({
    data: _data,
  });
}

// since updating profile needs to handle form data and it needs 3rd party library, here we only simulate a successful data update with timeout set to 3s as the processing time
export async function POST(request: NextRequest) {
  const cookies = parse(request.headers.get('cookie') || '');
  const token = cookies.token;

  if (!token) {
    return NextResponse.json(
      { message: 'Unauthorized Access' },
      { status: 401 }
    );
  }

  const _token = jwt.decode(token) as ProfileStruct;

  const user: { [key: string]: unknown } = users.filter(
    (user) => user.id.toString() === _token?.id
  )[0];

  // Update the user data here, this console.log is intended as the simulation to consume the user object
  console.log(user);

  // this timeout is only for updating database data simulation only
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return NextResponse.json(
    {
      message: 'Profile Updated Successfully!',
    },
    {
      status: 200,
    }
  );
}
