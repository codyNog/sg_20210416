import { User } from "~/domain/entities/User";

export type Methods = {
  get: {
    query?: {
      limit: number;
    };
    resBody: User[];
  };
  post: {
    reqBody: User;

    resBody: User;
  };
};
