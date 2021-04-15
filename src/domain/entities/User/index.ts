import { Property } from "~/domain/entities/Property";
import { Request } from "~/domain/entities/Request";

interface Profile {
  firstName: string;
  familyName: string;
  age: number;
  income: number;
}

export interface User {
  id: string;
  profile: Profile;
  properties: Property[]; // 所有している物件、デフォルトは空配列
  requests: Request[]; // 業者への依頼、デフォルトは空配列
}
