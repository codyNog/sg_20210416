import { agencyDB } from "~/db/agencies";
import { dbConverter } from "~/db/converter";
import { propertyDB } from "~/db/properties";
import { requestDB } from "~/db/requests";
import { Agency } from "~/domain/entities/Agency";
import { v4 as uuidv4 } from "uuid";

const fetchAgencies = async () => {
  return (await agencyDB.getAgencies()).map((elem) =>
    dbConverter.modelToAgency(elem, { properties: [], requests: [] })
  );
};

const createAgency = async (agency: Agency) => {
  if (!agency.id) agency.id = uuidv4();
  await agencyDB.createAgency(dbConverter.agencyToModel(agency));
  return agency;
};

const fetchAgency = async (id: string) => {
  const [agencyModel, properties, requests] = await Promise.all([
    await agencyDB.getAgency(id),
    await propertyDB.getPropertyByAgencyId(id),
    await requestDB.getRequestsByAgencyId(id)
  ]);
  return dbConverter.modelToAgency(agencyModel, { properties, requests });
};

const updateAgency = async (agency: Agency) => {
  await agencyDB.updateAgency(dbConverter.agencyToModel(agency));
  return agency;
};

const deleteAgency = async (id: string) => {
  await agencyDB.deleteAgency(id);
  await requestDB.updateRequestsWhenAgencyDeleted(id);
};

export interface AgencyUseCase {
  createAgency: (agency: Agency) => Promise<Agency>;
  fetchAgencies: () => Promise<Agency[]>;
  fetchAgency: (id: string) => Promise<Agency>;
  updateAgency: (agency: Agency) => Promise<Agency>;
  deleteAgency: (id: string) => Promise<void>;
}

export const agencyImpl: AgencyUseCase = {
  createAgency,
  fetchAgencies,
  fetchAgency,
  updateAgency,
  deleteAgency
};
