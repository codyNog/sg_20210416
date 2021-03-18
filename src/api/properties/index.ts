import { Property } from "~/domain/entities/Property";

export type Methods = {
  get: {
    query?: {
      limit: number;
    };
    resBody: Property[];
  };
};
