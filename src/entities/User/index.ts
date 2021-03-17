import { Property } from "~/entities/Property";

interface Profile {
  firstName: string;
  familyName: string;
  age: number;
  income: number;
}

export interface User {
  id: string;
  profile: Profile;
  properties: Property[];
}
