import { dbConverter } from "~/db/converter";
import { propertyDB } from "~/db/properties";
import { Property } from "~/domain/entities/Property";
import { v4 as uuidv4 } from "uuid";

const fetchProperties = async () => {
  const propertyModels = await propertyDB.getProperties();
  return propertyModels.map((elem) => dbConverter.modelToProperty(elem));
};

const createProperty = async (property: Property) => {
  if (!property.id) property.id = uuidv4();
  await propertyDB.createProperty(dbConverter.propertyToModel(property));
  return property;
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
  return propertyDB.deleteProperty(id);
};

export interface PropertyUseCase {
  createProperty: (property: Property) => Promise<Property>;
  fetchProperties: () => Promise<Property[]>;
  fetchProperty: (id: string) => Promise<Property>;
  updateProperty: (property: Property) => Promise<Property>;
  deleteProperty: (id: string) => Promise<void>;
}

export const propertyImpl: PropertyUseCase = {
  createProperty,
  fetchProperties,
  fetchProperty,
  updateProperty,
  deleteProperty
};
