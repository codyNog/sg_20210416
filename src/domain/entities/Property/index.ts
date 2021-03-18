import { MappedKey } from "~/libs/types";

interface Status {
  value: number; // 資産価値
  rent?: number; // 賃料
}

interface Address {
  prefecture: string;
  city: string;
  otherAddress: string;
}

type FloorPlan = "1R" | "1LDK" | "2LDK" | "3LDK" | string; // 間取り

interface Detail {
  area: number; // 床面積
  floorPlan: FloorPlan;
  features: string[]; // 特徴、今回はデフォルトで空配列
}

export interface Property {
  id: string;
  name: string;
  status: Status;
  address: Address;
  detail: Detail;
  userId: string; // 所有しているユーザーのID、デフォルトは空
  agencyId: string; // 所有している業者のID、デフォルトは空
}

export type KeyOfProperty = MappedKey<Property>;
