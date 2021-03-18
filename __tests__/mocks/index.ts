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

export const mocks = {
  user,
  users
};
