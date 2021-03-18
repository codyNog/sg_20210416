import { Property } from "~/entities/Property";
import { httpClient } from "~/libs/httpClient";

const fetchProperties = () => {
  return httpClient.properties.$get();
};

const fetchProperty = (id: string) => {
  return httpClient.properties._propertyId(id).$get();
};

const updateProperty = (property: Property) => {
  return httpClient.properties
    ._propertyId(property.id)
    .$put({ body: property });
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
