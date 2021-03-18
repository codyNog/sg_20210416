import { AgencyUseCase, agencyImpl } from "~/domain/impl/agency";
import { propertyImpl, PropertyUseCase } from "~/domain/impl/property";
import { UserUseCase, userImpl } from "~/domain/impl/user";

interface Backend {
  user: UserUseCase;
  property: PropertyUseCase;
  agency: AgencyUseCase;
}

export const backend = (): Backend => {
  return { user: userImpl, property: propertyImpl, agency: agencyImpl };
};
