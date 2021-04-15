import { Request } from "~/domain/entities/Request";
import { db } from "~/libs/db";

export type DBRequestModel = Request;

const createRequest = async (request: DBRequestModel) => {
  await db.requests.put(request);
  return request;
};

const getRequest = async (id: string) => await db.requests.get(id);

const updateRequest = async (request: DBRequestModel) => {
  await db.requests.put(request);
  return request;
};

const deleteRequest = async (id: string) => await db.requests.delete(id);

const getRequests = async () => await db.requests.toArray();

const getRequestsByUserId = async (userId: string) =>
  await db.requests.where({ userId }).toArray();

const getRequestsByAgencyId = async (agencyId: string) =>
  await db.requests.where({ agencyId }).toArray();

const updateRequestsWhenAgencyDeleted = async (agencyId: string) => {
  const requests = await getRequestsByAgencyId(agencyId);
  await db.requests.bulkPut(
    requests.map((elem) => {
      const { agencyId: _omit, ...rest } = elem;
      return rest;
    })
  );
};

interface RequestDBUseCase {
  createRequest: (request: DBRequestModel) => Promise<DBRequestModel>;
  getRequest: (id: string) => Promise<DBRequestModel>;
  updateRequest: (request: DBRequestModel) => Promise<DBRequestModel>;
  deleteRequest: (id: string) => Promise<void>;
  getRequests: () => Promise<DBRequestModel[]>;
  getRequestsByUserId: (userId: string) => Promise<Request[]>;
  getRequestsByAgencyId: (agencyId: string) => Promise<Request[]>;
  updateRequestsWhenAgencyDeleted: (agencyId: string) => Promise<void>;
}

export const requestDB: RequestDBUseCase = {
  createRequest,
  getRequest,
  updateRequest,
  deleteRequest,
  getRequests,
  getRequestsByUserId,
  getRequestsByAgencyId,
  updateRequestsWhenAgencyDeleted
};
