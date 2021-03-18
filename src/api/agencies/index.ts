import { Agency } from "~/domain/entities/Agency";

export type Methods = {
  get: {
    query?: {
      limit: number;
    };
    resBody: Agency[];
  };
};
