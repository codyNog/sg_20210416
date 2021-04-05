import { Property } from "~/domain/entities/Property";
import { Request } from "~/domain/entities/Request";

interface Address {
  prefecture: string;
  city: string;
  otherAddress: string;
}

export interface Agency {
  id: string;
  name: string;
  address: Address;
  properties: Property[];
  requests: Request[];
  userId: string;
  agencyId: string;
}
