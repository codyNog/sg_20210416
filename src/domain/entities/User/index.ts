import { Property } from "~/domain/entities/Property";
import { Request } from "~/domain/entities/Request";

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
  requests: Request[];
}
