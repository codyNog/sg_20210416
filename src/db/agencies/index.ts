import { Agency } from "~/domain/entities/Agency";
import { db } from "~/libs/db";

export type DBAgencyModel = Omit<Agency, "requests" | "properties">;

const createAgency = async (agency: DBAgencyModel) =>
  await db.agencies.put(agency);

const getAgency = async (id: string) => await db.agencies.get(Number(id));

const updateAgency = async (agency: DBAgencyModel) =>
  await db.agencies.put(agency);

const deleteAgency = async (id: string) => await db.agencies.delete(Number(id));

const getAgencies = async () => await db.agencies.toArray();

interface AgencyDBUseCase {
  createAgency: (agency: DBAgencyModel) => Promise<number>;
  getAgency: (id: string) => Promise<DBAgencyModel>;
  updateAgency: (agency: DBAgencyModel) => Promise<number>;
  deleteAgency: (id: string) => Promise<void>;
  getAgencies: () => Promise<DBAgencyModel[]>;
}

export const agencyDB: AgencyDBUseCase = {
  createAgency,
  getAgency,
  updateAgency,
  deleteAgency,
  getAgencies
};
