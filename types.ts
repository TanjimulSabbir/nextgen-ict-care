export interface Education {
  institute: string;
  department: string;
}

export interface Instructor {
  id: number;
  name: string;
  designation: string;
  image: string;
  experience: string;
  bio: string;
  education: Education[];
  workplace?: string;
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