import { Request } from "~/domain/entities/Request";
import { httpClient } from "~/libs/httpClient";

const fetchRequests = () => httpClient.requests.$get();

const fetchRequest = (requestId: string) =>
  httpClient.requests._requestId(requestId).$get();

const updateRequest = (request: Request) =>
  httpClient.requests._requestId(request.id).$put({ body: request });

const createRequest = (request: Request) =>
  httpClient.requests.$post({ body: request });

export interface RequestUseCase {
  fetchRequests: () => Promise<Request[]>;
  fetchRequest: (requestId: string) => Promise<Request>;
  updateRequest: (request: Request) => Promise<Request>;
  createRequest: (request: Request) => Promise<Request>;
}

export const requestImpl: RequestUseCase = {
  fetchRequests,
  fetchRequest,
  updateRequest,
  createRequest
};
