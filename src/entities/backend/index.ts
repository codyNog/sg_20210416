import { UserUseCase, userImpl } from "~/impl/user";

interface Backend {
  userImpl: UserUseCase;
}

export const backend: Backend = {
  userImpl
};
