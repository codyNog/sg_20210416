import { Property } from "~/domain/entities/Property";

export type Methods = {
  get: {
    resBody: Property;
  };
  put: {
    reqBody: Property;
    resBody: Property;
  };
  delete: {
    resBody: void;
  };
};
