import { dbConverter } from "~/db/converter";
import { propertyDB } from "~/db/properties";
import { userDB } from "~/db/users";
import { User } from "~/domain/entities/User";

const createUser = async (user: User) => {
  await userDB.createUser(dbConverter.userToModel(user));
  return user;
};

const fetchUser = async (userId: string) => {
  const [userModel, propertyModels] = await Promise.all([
    await userDB.getUser(userId),
    await propertyDB.getPropertyByUserId(userId)
  ]);
  const properties = propertyModels.map((elem) =>
    dbConverter.modelToProperty(elem)
  );
  const user = dbConverter.modelToUser(userModel, properties);
  return user;
};

const updateUser = async (user: User) => {
  await userDB.updateUser(dbConverter.userToModel(user));
  return user;
};

const fetchUsers = async () => {
  const userModels = await userDB.getUsers();
  return userModels.map((elem) => dbConverter.modelToUser(elem, []));
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
