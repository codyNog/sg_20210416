import { dbConverter } from "~/db/converter";
import { propertyDB } from "~/db/properties";
import { requestDB } from "~/db/requests";
import { userDB } from "~/db/users";
import { User } from "~/domain/entities/User";
import { v4 as uuidv4 } from "uuid";

const createUser = async (user: User) => {
  if (!user.id) user.id = uuidv4();
  await userDB.createUser(dbConverter.userToModel(user));
  return user;
};

const fetchUser = async (userId: string) => {
  const [userModel, propertyModels, requestModels] = await Promise.all([
    await userDB.getUser(userId),
    await propertyDB.getPropertyByUserId(userId),
    await requestDB.getRequestsByUserId(userId)
  ]);
  const user = dbConverter.modelToUser(userModel, {
    propertyModels,
    requestModels
  });
  return user;
};

const updateUser = async (user: User) => {
  await userDB.updateUser(dbConverter.userToModel(user));
  return user;
};

const deleteUser = async (id: string) => {
  await userDB.deleteUser(id);
};

const fetchUsers = async () => {
  const userModels = await userDB.getUsers();
  return userModels.map((elem) =>
    dbConverter.modelToUser(elem, { propertyModels: [], requestModels: [] })
  );
};

export interface UserUseCase {
  fetchUsers: () => Promise<User[]>;
  fetchUser: (userId: string) => Promise<User>;
  updateUser: (user: User) => Promise<User>;
  deleteUser: (id: string) => Promise<void>;
  createUser: (user: User) => Promise<User>;
}

export const userImpl: UserUseCase = {
  fetchUsers,
  fetchUser,
  updateUser,
  deleteUser,
  createUser
};
