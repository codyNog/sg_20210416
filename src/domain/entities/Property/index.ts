import { MappedKey } from "~/libs/types";

interface Status {
  value: number;
  rent?: number;
  purpose: "sale" | "rent" | "other" | string;
}

interface Address {
  prefecture: string;
  city: string;
  otherAddress: string;
}

type FloorPlan = "1R" | "1LDK" | "2LDK" | "3LDK" | string;

interface Detail {
  area: number;
  floorPlan: FloorPlan;
  features: string[];
}

export interface Property {
  id: string;
  name: string;
  status: Status;
  address: Address;
  detail: Detail;
  userId: string;
  agencyId: string;
}

export type KeyOfProperty = MappedKey<Property>;
