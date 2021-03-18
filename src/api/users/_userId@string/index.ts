import { User } from "~/domain/entities/User";

export type Methods = {
  get: {
    resBody: User;
  };
  put: {
    reqBody: User;
    resBody: User;
  };
};
