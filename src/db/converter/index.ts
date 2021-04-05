import { Property } from "~/domain/entities/Property";
import { User } from "~/domain/entities/User";
import { DBPropertyModel } from "~/db/properties";
import { DBUserModel } from "~/db/users";
import { Agency } from "~/domain/entities/Agency";
import { DBAgencyModel } from "~/db/agencies";
import { DBRequestModel } from "~/db/requests";

const userToModel = (user: User): DBUserModel => {
  const { properties, requests, ...rest } = user;
  return {
    ...rest,
    propertyIds: properties.map((elem) => elem.id),
    requestIds: requests.map((elem) => elem.id)
  };
};

const modelToUser = (
  user: DBUserModel,
  params: { propertyModels: DBPropertyModel[]; requestModels: DBRequestModel[] }
): User => {
  const { propertyIds: _foo, requestIds: _bar, ...rest } = user;
  const properties = params.propertyModels.map((elem) =>
    dbConverter.modelToProperty(elem)
  );
  const requests = params.requestModels.map((elem) =>
    dbConverter.modelToRequest(elem)
  );
  return { ...rest, properties, requests };
};

const propertyToModel = (property: Property): DBPropertyModel => {
  return property;
};

const modelToProperty = (property: DBPropertyModel): Property => {
  return property;
};

const agencyToModel = (agency: Agency): DBAgencyModel => {
  const { properties: _foo, requests: _bar, ...rest } = agency;
  return rest;
};

const modelToAgency = (
  agency: DBAgencyModel,
  params: { requests: DBRequestModel[]; properties: DBPropertyModel[] }
): Agency => {
  return {
    ...agency,
    requests: params.requests.map((elem) => modelToRequest(elem)),
    properties: params.properties.map((elem) => modelToProperty(elem))
  };
};

const modelToRequest = (request: DBRequestModel) => {
  return request;
};

export const dbConverter = {
  userToModel,
  modelToUser,
  propertyToModel,
  modelToProperty,
  agencyToModel,
  modelToAgency,
  modelToRequest
};
