import { AgencyUseCase, agencyImpl } from "~/domain/impl/agency";
import { propertyImpl, PropertyUseCase } from "~/domain/impl/property";
import { UserUseCase, userImpl } from "~/domain/impl/user";

interface Backend {
  userImpl: UserUseCase;
  propertyImpl: PropertyUseCase;
  agencyImpl: AgencyUseCase;
}

export const backend = (): Backend => {
  return { userImpl, propertyImpl, agencyImpl };
};
