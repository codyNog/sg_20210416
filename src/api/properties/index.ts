import { Property } from "~/entities/Property";

export type Methods = {
  get: {
    query?: {
      limit: number;
    };
    resBody: Property[];
  };
};
