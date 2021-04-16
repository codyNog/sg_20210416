import { backend, Backend } from "~/domain/backend";
import * as backendModule from "~/domain/backend";
import { UserUseCase } from "~/domain/impl/user";
import { mocks } from "__tests__/mocks";
import { AgencyUseCase } from "~/domain/impl/agency";

const user: UserUseCase = {
  ...backend().user,
  createUser: async (user) => {
    return { ...user, id: "bar" };
  },
  fetchUser: async (_userId) => mocks.user,
  updateUser: async (user) => user,
  deleteUser: async (_user) => {},
  fetchUsers: async () => mocks.users
};

const agency: AgencyUseCase = {
  ...backend().agency,
  fetchAgency: async (_agencyId) => mocks.agency,
  fetchAgencies: async () => mocks.agencies
};

const mockBackend: Backend = {
  user: user,
  property: backend().property,
  agency
};

export const spyBackend = () => {
  jest.spyOn(backendModule, "backend").mockReturnValue(mockBackend);
};
