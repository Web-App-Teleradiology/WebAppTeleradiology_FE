import { Status } from "./enum";
export interface radiologyDto {
  patientId: string;
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  userId: string;
  image: string;
  desc: string;
  comment: string;
}

export interface specialistDto {
  status: Status;
  comment: string;
}
