export interface ProfileStruct {
  id: number;
  photo: File;
  name: string;
  email: string;
  dateOfBirth: Date;
  permanentAddress: string;
  postalCode: string;
  username: string;
  password?: string;
  presentAddress: string;
  city: string;
  country: string;
  [key: string]: unknown;
}
