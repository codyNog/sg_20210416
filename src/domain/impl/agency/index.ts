import { Agency } from "~/domain/entities/Agency";
import { httpClient } from "~/libs/httpClient";

const fetchAgencies = () => httpClient.agencies.$get();

const fetchAgency = (id: string) => httpClient.agencies._agencyId(id).$get();

const updateAgency = (agency: Agency) =>
  httpClient.agencies._agencyId(agency.id).$put({ body: agency });

export interface AgencyUseCase {
  fetchAgencies: () => Promise<Agency[]>;
  fetchAgency: (id: string) => Promise<Agency>;
  updateAgency: (agency: Agency) => Promise<Agency>;
}

export const agencyImpl: AgencyUseCase = {
  fetchAgencies,
  fetchAgency,
  updateAgency
};
