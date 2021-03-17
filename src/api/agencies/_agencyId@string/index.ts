import { Agency } from "~/entities/Agency";

export type Methods = {
  get: {
    resBody: Agency;
  };
  put: {
    reqBody: Agency;
    resBody: Agency;
  };
};
