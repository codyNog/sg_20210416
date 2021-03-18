import { Property } from "~/domain/entities/Property";
import { User } from "~/domain/entities/User";

interface Address {
  prefecture: string;
  city: string;
  otherAddress: string;
}

export interface AgencyRequest {
  id: string;
  user: User;
  properties: Property[];
  memo?: string;
}

export interface Agency {
  id: string;
  name: string;
  address: Address;
  properties: Property[];
  requests: AgencyRequest[];
}
