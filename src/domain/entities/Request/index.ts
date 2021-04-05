import { Property } from "~/domain/entities/Property";
import { Agency } from "~/domain/entities/Agency";
import { User } from "~/domain/entities/User";

export interface Request {
  id: string;
  user: User;
  agency: Agency;
  properties: Property;
  memo?: string;
}
