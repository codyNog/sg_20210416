import { Property } from "~/entities/Property";
import { User } from "~/entities/User";

interface Address {
  prefecture: string;
  city: string;
  otherAddress: string;
}

export interface AgencyRequest {
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
