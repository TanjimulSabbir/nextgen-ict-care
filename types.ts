import { StaticImageData } from "next/image";

export interface Education {
  institute: string;
  department: string;
}

export interface Instructor {
  id: number;
  name: string;
  designation: string;
  image: string| StaticImageData;
  experience: string;
  bio: string;
  education?: Education[];
  workplace?: {title:string,description:string};
  expertise: string[];
  teachingStyle: string;
  strengths?: string[];
  linkedIn: string;
}

export interface AboutUsInfo {
  title: string;
  subtitle: string;
  description: string;
}