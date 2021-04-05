import { Property } from "~/domain/entities/Property";

export interface Request {
  id: string;
  user?: { id: string; name: string };
  agency?: { id: string; name: string };
  properties: Property;
  memo?: string;
}
