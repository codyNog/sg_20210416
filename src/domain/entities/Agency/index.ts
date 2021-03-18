import { Property } from "~/domain/entities/Property";
import { Request } from "~/domain/entities/Request";
import { MappedKey } from "~/libs/types";

interface Address {
  prefecture: string;
  city: string;
  otherAddress: string;
}

export interface Agency {
  id: string;
  name: string;
  address: Address;
  properties: Property[]; // 管理している物件、デフォルトは空配列
  requests: Request[]; // ユーザーからの依頼、デフォルトは空配列
}

export type KeyOfAgency = MappedKey<Agency>;
