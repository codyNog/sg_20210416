import { Agency, AgencyRequest } from "~/entities/Agency";
import { httpClient } from "~/libs/httpClient";

const fetchAgencies = () => httpClient.agencies.$get();

const fetchAgency = (id: string) => httpClient.agencies._agencyId(id).$get();

const updateAgency = (agency: Agency) =>
  httpClient.agencies._agencyId(agency.id).$put({ body: agency });

const updateRequest = (agency: Agency, request: AgencyRequest) =>
  httpClient.agencies
    ._agencyId(agency.id)
    .requests._requestId(request.id)
    .$put({ body: request });

const deleteRequest = (agency: Agency, request: AgencyRequest) =>
  httpClient.agencies
    ._agencyId(agency.id)
    .requests._requestId(request.id)
    .$delete();

export interface AgencyUseCase {
  fetchAgencies: () => Promise<Agency[]>;
  fetchAgency: (id: string) => Promise<Agency>;
  updateAgency: (agency: Agency) => Promise<Agency>;
  updateRequest: (agency: Agency, request: AgencyRequest) => Promise<void>;
  deleteRequest: (agency: Agency, request: AgencyRequest) => Promise<void>;
}

export const agencyImpl: AgencyUseCase = {
  fetchAgencies,
  fetchAgency,
  updateAgency,
  updateRequest,
  deleteRequest
};
