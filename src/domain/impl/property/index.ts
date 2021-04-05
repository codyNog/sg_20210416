import { dbConverter } from "~/db/converter";
import { propertyDB } from "~/db/properties";
import { Property } from "~/domain/entities/Property";
import { httpClient } from "~/libs/httpClient";

const fetchProperties = async () => {
  const propertyModels = await propertyDB.getProperties();
  return propertyModels.map((elem) => dbConverter.modelToProperty(elem));
};

const fetchProperty = async (id: string) => {
  const propertyModel = await propertyDB.getProperty(id);
  return dbConverter.modelToProperty(propertyModel);
};

const updateProperty = async (property: Property) => {
  await propertyDB.updateProperty(dbConverter.propertyToModel(property));
  return property;
};

const deleteProperty = (id: string) => {
  return httpClient.properties._propertyId(id).$delete();
};

export interface PropertyUseCase {
  fetchProperties: () => Promise<Property[]>;
  fetchProperty: (id: string) => Promise<Property>;
  updateProperty: (property: Property) => Promise<Property>;
  deleteProperty: (id: string) => Promise<void>;
}

export const propertyImpl: PropertyUseCase = {
  fetchProperties,
  fetchProperty,
  updateProperty,
  deleteProperty
};
