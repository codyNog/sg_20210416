import { User } from "~/domain/entities/User";
import { db } from "~/libs/db";

type Model = Omit<User, "properties">;

export interface DBUserModel extends Model {
  propertyIds: string[];
}

const createUser = async (user: DBUserModel) => await db.users.put(user);

const getUser = async (id: string) => await db.users.get(Number(id));

const updateUser = async (user: DBUserModel) => await db.users.put(user);

const deleteUser = async (id: string) => await db.users.delete(Number(id));

const getUsers = async () => await db.users.toArray();

interface UserDBUseCase {
  createUser: (user: DBUserModel) => Promise<number>;
  getUser: (id: string) => Promise<DBUserModel>;
  updateUser: (user: DBUserModel) => Promise<number>;
  deleteUser: (id: string) => Promise<void>;
  getUsers: () => Promise<DBUserModel[]>;
}

export const userDB: UserDBUseCase = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getUsers
};
