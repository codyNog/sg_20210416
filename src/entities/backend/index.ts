import { propertyImpl, PropertyUseCase } from "~/impl/property";
import { UserUseCase, userImpl } from "~/impl/user";

interface Backend {
  userImpl: UserUseCase;
  propertyImpl: PropertyUseCase;
}

export const backend = (): Backend => {
  return { userImpl, propertyImpl };
};
