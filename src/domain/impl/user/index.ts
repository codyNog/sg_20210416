import { DBPropertyModel, propertyDB } from "~/db/properties";
import { DBUserModel, userDB } from "~/db/users";
import { Property } from "~/domain/entities/Property";
import { User } from "~/domain/entities/User";

const userToModel = (user: User): DBUserModel => {
  const { properties, ...rest } = user;
  return { ...rest, propertyIds: properties.map((elem) => elem.id) };
};

const modelToUser = (user: DBUserModel, properties: Property[]): User => {
  const { propertyIds: _omit, ...rest } = user;
  return { ...rest, properties };
};

const modelToProperty = (property: DBPropertyModel): Property => {
  const { owedBy: _foo, managedBy: _bar, ...rest } = property;
  return rest;
};

const createUser = async (user: User) => {
  await userDB.createUser(userToModel(user));
  return user;
};

const fetchUser = async (userId: string) => {
  const [userModel, propertyModels] = await Promise.all([
    await userDB.getUser(userId),
    await propertyDB.getPropertyByUserId(userId)
  ]);
  const properties = propertyModels.map((elem) => modelToProperty(elem));
  const user = modelToUser(userModel, properties);
  return user;
};

const updateUser = async (user: User) => {
  await userDB.updateUser(userToModel(user));
  return user;
};

const fetchUsers = async () => {
  const userModels = await userDB.getUsers();
  return userModels.map((elem) => modelToUser(elem, []));
};

export interface UserUseCase {
  fetchUsers: () => Promise<User[]>;
  fetchUser: (userId: string) => Promise<User>;
  updateUser: (user: User) => Promise<User>;
  createUser: (user: User) => Promise<User>;
}

export const userImpl: UserUseCase = {
  fetchUsers,
  fetchUser,
  updateUser,
  createUser
};
