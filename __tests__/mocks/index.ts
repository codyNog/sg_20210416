import { Agency } from "~/domain/entities/Agency";
import { User } from "~/domain/entities/User";

const user: User = {
  id: "foo",
  profile: {
    firstName: "kohki",
    familyName: "noguchi",
    age: 28,
    income: 1
  },
  properties: [],
  requests: []
};

const users = [];

const agency: Agency = {
  id: "foo",
  name: "野口不動産",
  address: {
    prefecture: "",
    city: "",
    otherAddress: ""
  },
  requests: [],
  properties: []
};

const agencies = [agency];

export const mocks = {
  user,
  users,
  agency,
  agencies
};
