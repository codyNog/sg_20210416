import { Property } from "~/domain/entities/Property";
import { db } from "~/libs/db";

export interface DBPropertyModel extends Property {
  owedBy: string; // 所有者のuserId
  managedBy: string; // 管理業者のagencyId
}

const createProperty = async (property: DBPropertyModel) =>
  await db.properties.put(property);

const getProperty = async (id: string) => await db.properties.get(Number(id));

const updateProperty = async (property: DBPropertyModel) =>
  await db.properties.put(property);

const deleteProperty = async (id: string) =>
  await db.properties.delete(Number(id));

const getProperties = async () => await db.properties.toArray();

interface PropertyDBUseCase {
  createProperty: (property: DBPropertyModel) => Promise<number>;
  getProperty: (id: string) => Promise<DBPropertyModel>;
  updateProperty: (property: DBPropertyModel) => Promise<number>;
  deleteProperty: (id: string) => Promise<void>;
  getProperties: () => Promise<DBPropertyModel[]>;
}

export const propertyDB: PropertyDBUseCase = {
  createProperty,
  getProperty,
  updateProperty,
  deleteProperty,
  getProperties
};
