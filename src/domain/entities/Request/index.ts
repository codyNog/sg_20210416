import { Property } from "~/domain/entities/Property";

// 今回は使わない
export interface Request {
  id: string;
  userId?: string;
  agencyId?: string;
  properties: Property;
  memo?: string;
}
