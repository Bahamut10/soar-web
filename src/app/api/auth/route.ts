import { NextResponse } from 'next/server';

export async function POST() {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJwaG90byI6Ii91c2VyLTEucG5nIiwibmFtZSI6IkxpdmlhIEJhdG9yIiwicG9zaXRpb24iOiJDRU8iLCJlbWFpbCI6ImxpdmlhYmF0b3JAZ21haWwuY29tIiwiZGF0ZU9mQmlydGgiOiIxOTgwLTExLTE1VDAwOjAwOjAwLjAwMFoiLCJwZXJtYW5lbnRBZGRyZXNzIjoiU2FuIEZyYW5jaXNjbywgQ2FsaWZvcm5pYSwgVVNBIiwicG9zdGFsQ29kZSI6Ijk0MTA1IiwidXNlcm5hbWUiOiJsaXZpYWJhdG9yIiwicHJlc2VudEFkZHJlc3MiOiJTYW4gRnJhbmNpc2NvLCBDYWxpZm9ybmlhLCBVU0EiLCJjaXR5IjoiU2FuIEZyYW5jaXNjbyIsImNvdW50cnkiOiJVU0EifQ.3UBrs4D8HPGcKxNqMU_j1stIdSl8Y39ziMLJ-F1AIFQ';

  const response = NextResponse.json(
    { message: 'Logged in successfully' },
    { status: 200 }
  );

  response.cookies.set('cookie', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // 1 day
    path: '/',
  });

  return response;
}
