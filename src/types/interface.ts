import { Status } from "./enum";
export interface patientDto {
  _id?: string;
  patientId: string;
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  userId: string;
  status: Status;
  image: string;
  desc?: string;
  comment?: string;
}
export interface addPatientDto {
  _id?: string;
  patientId: string;
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  userId: string;
  image: string;
  desc?: string;
  comment?: string;
}
export interface specialistDto {
  status: Status;
  comment: string;
}
