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

const modelToProperty = (property: DBPropertyModel): Property => {
  const { owedBy: _foo, managedBy: _bar, ...rest } = property;
  return rest;
};

export const dbConverter = {
  userToModel,
  modelToUser,
  modelToProperty
};
