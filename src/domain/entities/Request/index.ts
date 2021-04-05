import { Property } from "~/domain/entities/Property";

export interface Request {
  id: string;
  userId?: string;
  agencyId?: string;
  properties: Property;
  memo?: string;
}
