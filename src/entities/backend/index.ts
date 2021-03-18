import { AgencyUseCase, agencyImpl } from "~/impl/agency";
import { propertyImpl, PropertyUseCase } from "~/impl/property";
import { UserUseCase, userImpl } from "~/impl/user";

interface Backend {
  userImpl: UserUseCase;
  propertyImpl: PropertyUseCase;
  agencyImpl: AgencyUseCase;
}

export const backend = (): Backend => {
  return { userImpl, propertyImpl, agencyImpl };
};
