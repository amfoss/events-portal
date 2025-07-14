import { StaticImageData } from "next/image";

export interface Sessions {
  no: number;
  day: number;
  category: string;
  topic: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Speakers {
  name: string;
  image: StaticImageData;
  desc: string;
  linkedIn: string;
}

export interface FormData {
  email: string;
  name: string;
  roll_no: string;
  phone_number: string;
  checkBox: boolean;
  // checkBox2: boolean;
}
