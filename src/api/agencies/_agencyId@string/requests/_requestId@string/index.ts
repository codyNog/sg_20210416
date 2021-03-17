import { AgencyRequest } from "~/entities/Agency";

export type Methods = {
  put: {
    reqBody: AgencyRequest;
    resBody: void;
  };
  delete: {
    resBody: void;
  };
};
