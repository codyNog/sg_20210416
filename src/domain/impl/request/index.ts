import { requestDB } from "~/db/requests";
import { Request } from "~/domain/entities/Request";
import { v4 as uuidv4 } from "uuid";

const createRequest = async (request: Request) => {
  if (!request.id) request.id = uuidv4();
  return await requestDB.createRequest(request);
};

const fetchRequest = (requestId: string) => requestDB.getRequest(requestId);

const updateRequest = (request: Request) => requestDB.updateRequest(request);

const deleteRequest = (requestId: string) => requestDB.deleteRequest(requestId);

const fetchRequests = () => requestDB.getRequests();

export interface RequestUseCase {
  createRequest: (request: Request) => Promise<Request>;
  fetchRequest: (requestId: string) => Promise<Request>;
  updateRequest: (request: Request) => Promise<Request>;
  deleteRequest: (requestId: string) => Promise<void>;
  fetchRequests: () => Promise<Request[]>;
}

export const requestImpl: RequestUseCase = {
  createRequest,
  fetchRequest,
  updateRequest,
  deleteRequest,
  fetchRequests
};
