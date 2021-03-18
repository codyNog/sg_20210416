import { Agency } from "~/domain/entities/Agency";

export type Methods = {
  get: {
    resBody: Agency;
  };
  put: {
    reqBody: Agency;
    resBody: Agency;
  };
};
