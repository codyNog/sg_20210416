import { Request } from "~/domain/entities/Request";
import { db } from "~/libs/db";

export type DBRequestModel = Request;

const createRequest = async (request: DBRequestModel) =>
  await db.requests.put(request);

const getRequest = async (id: string) => await db.requests.get(Number(id));

const updateRequest = async (request: DBRequestModel) =>
  await db.requests.put(request);

const deleteRequest = async (id: string) =>
  await db.requests.delete(Number(id));

const getRequests = async () => await db.requests.toArray();

const getRequestsByAgencyId = async (agencyId: string) =>
  await db.requests.where({ agency: { id: agencyId } }).toArray();

const updateRequestsWhenAgencyDeleted = async (agencyId: string) => {
  const requests = await getRequestsByAgencyId(agencyId);
  await db.requests.bulkPut(
    requests.map((elem) => {
      const { agency: _omit, ...rest } = elem;
      return rest;
    })
  );
};

interface RequestDBUseCase {
  createRequest: (request: DBRequestModel) => Promise<number>;
  getRequest: (id: string) => Promise<DBRequestModel>;
  updateRequest: (request: DBRequestModel) => Promise<number>;
  deleteRequest: (id: string) => Promise<void>;
  getRequests: () => Promise<DBRequestModel[]>;
  getRequestsByAgencyId: (agencyId: string) => Promise<Request[]>;
  updateRequestsWhenAgencyDeleted: (agencyId: string) => Promise<void>;
}

export const requestDB: RequestDBUseCase = {
  createRequest,
  getRequest,
  updateRequest,
  deleteRequest,
  getRequests,
  getRequestsByAgencyId,
  updateRequestsWhenAgencyDeleted
};
