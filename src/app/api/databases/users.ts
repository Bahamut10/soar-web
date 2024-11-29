import argon2 from 'argon2';

const hashPassword = async (plainPassword: string) => {
  const hashedPassword = await argon2.hash(plainPassword);
  return hashedPassword;
};

export const users = [
  {
    id: 1,
    photo: '/user-1.png',
    name: 'Livia Bator',
    position: 'CEO',
    email: 'liviabator@gmail.com',
    dateOfBirth: new Date('1980-11-15'),
    permanentAddress: 'San Francisco, California, USA',
    postalCode: '94105',
    username: 'liviabator',
    password: hashPassword('ceo_password'),
    presentAddress: 'San Francisco, California, USA',
    city: 'San Francisco',
    country: 'USA',
  },
  {
    id: 2,
    photo: '/user-2.png',
    name: 'Randy Press',
    position: 'Director',
    email: 'randypress@gmail.com',
    dateOfBirth: new Date('1978-09-22'),
    permanentAddress: 'Seattle, Washington, USA',
    postalCode: '98101',
    username: 'randypress',
    password: hashPassword('director_password'),
    presentAddress: 'Seattle, Washington, USA',
    city: 'Seattle',
    country: 'USA',
  },
  {
    id: 3,
    photo: '/user-3.png',
    name: 'Workman',
    position: 'Designer',
    email: 'workman.designer1@gmail.com',
    dateOfBirth: new Date('1992-06-05'),
    permanentAddress: 'Austin, Texas, USA',
    postalCode: '73301',
    username: 'workman1',
    password: hashPassword('designer1_password'),
    presentAddress: 'Austin, Texas, USA',
    city: 'Austin',
    country: 'USA',
  },
  {
    id: 4,
    photo: '/user-4.png',
    name: 'Workman',
    position: 'Designer',
    email: 'workman.designer2@gmail.com',
    dateOfBirth: new Date('1993-02-19'),
    permanentAddress: 'Portland, Oregon, USA',
    postalCode: '97201',
    username: 'workman2',
    password: hashPassword('designer2_password'),
    presentAddress: 'Portland, Oregon, USA',
    city: 'Portland',
    country: 'USA',
  },
];
