import { Property } from "~/domain/entities/Property";
import { db } from "~/libs/db";

export type DBPropertyModel = Property;

const createProperty = async (property: DBPropertyModel) =>
  await db.properties.put(property);

const getProperty = async (id: string) => await db.properties.get(Number(id));

const getPropertyByUserId = async (userId: string) =>
  await db.properties.where({ userId }).toArray();

const updateProperty = async (property: DBPropertyModel) =>
  await db.properties.put(property);

const deleteProperty = async (id: string) =>
  await db.properties.delete(Number(id));

const getProperties = async () => await db.properties.toArray();

interface PropertyDBUseCase {
  createProperty: (property: DBPropertyModel) => Promise<number>;
  getProperty: (id: string) => Promise<DBPropertyModel>;
  getPropertyByUserId: (userId: string) => Promise<DBPropertyModel[]>;
  updateProperty: (property: DBPropertyModel) => Promise<number>;
  deleteProperty: (id: string) => Promise<void>;
  getProperties: () => Promise<DBPropertyModel[]>;
}

export const propertyDB: PropertyDBUseCase = {
  createProperty,
  getProperty,
  getPropertyByUserId,
  updateProperty,
  deleteProperty,
  getProperties
};
