interface Status {
  value: number;
  rent?: number;
  for: "sale" | "rent" | "other";
}

interface Address {
  prefecture: string;
  city: string;
  otherAddress: string;
}

type FloorPlan = "1R" | "1LDK" | "2LDK" | " 3LDK";

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
