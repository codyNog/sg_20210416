import { User } from "~/entities/User";
import { httpClient } from "~/libs/httpClient";

const fetchUsers = () => httpClient.users.$get();

const fetchUser = (userId: string) => httpClient.users._userId(userId).$get();

const updateUser = (user: User) =>
  httpClient.users._userId(user.id).$put({ body: user });

export interface UserUseCase {
  fetchUsers: () => Promise<User[]>;
  fetchUser: (userId: string) => Promise<User>;
  updateUser: (user: User) => Promise<User>;
}

export const userImpl: UserUseCase = {
  fetchUsers,
  fetchUser,
  updateUser
};
