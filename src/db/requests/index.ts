import { Request } from "~/domain/entities/Request";
import { db } from "~/libs/db";

type Model = Omit<Request, "request | agency">;

export interface DBRequestModel extends Model {
  requestId: string;
  agencyId: string;
}

const createRequest = async (request: DBRequestModel) =>
  await db.requests.put(request);

const getRequest = async (id: string) => await db.requests.get(Number(id));

const updateRequest = async (request: DBRequestModel) =>
  await db.requests.put(request);

const deleteRequest = async (id: string) =>
  await db.requests.delete(Number(id));

const getRequests = async () => await db.requests.toArray();

interface RequestDBUseCase {
  createRequest: (request: DBRequestModel) => Promise<number>;
  getRequest: (id: string) => Promise<DBRequestModel>;
  updateRequest: (request: DBRequestModel) => Promise<number>;
  deleteRequest: (id: string) => Promise<void>;
  getRequests: () => Promise<DBRequestModel[]>;
}

export const requestDB: RequestDBUseCase = {
  createRequest,
  getRequest,
  updateRequest,
  deleteRequest,
  getRequests
};
