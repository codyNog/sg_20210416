import { AgencyRequest } from "~/domain/entities/Agency";

export type Methods = {
  put: {
    reqBody: AgencyRequest;
    resBody: void;
  };
  delete: {
    resBody: void;
  };
};
