import { User } from "~/entities/User";

export type Methods = {
  get: {
    query?: {
      limit: number;
    };
    resBody: User[];
  };
};
