import { Property } from "~/domain/entities/Property";
import { User } from "~/domain/entities/User";
import { DBPropertyModel } from "~/db/properties";
import { DBUserModel } from "~/db/users";

const userToModel = (user: User): DBUserModel => {
  const { properties, ...rest } = user;
  return { ...rest, propertyIds: properties.map((elem) => elem.id) };
};

const modelToUser = (user: DBUserModel, properties: Property[]): User => {
  const { propertyIds: _omit, ...rest } = user;
  return { ...rest, properties };
};

const propertyToModel = (property: Property): DBPropertyModel => {
  return property;
};

const modelToProperty = (property: DBPropertyModel): Property => {
  return property;
};

export const dbConverter = {
  userToModel,
  modelToUser,
  propertyToModel,
  modelToProperty
};
