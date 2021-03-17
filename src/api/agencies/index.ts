import { Agency } from "~/entities/Agency";

export type Methods = {
  get: {
    query?: {
      limit: number;
    };
    resBody: Agency[];
  };
};
