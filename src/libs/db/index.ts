import Dexie from "dexie";
import { DBAgencyModel } from "~/db/agencies";
import { DBPropertyModel } from "~/db/properties";
import { DBRequestModel } from "~/db/requests";
import { DBUserModel } from "~/db/users";

type DexieDatabase = { [P in keyof Dexie]: Dexie[P] };

interface DB extends DexieDatabase {
  users: Dexie.Table<DBUserModel, string>;
  properties: Dexie.Table<DBPropertyModel, string>;
  agencies: Dexie.Table<DBAgencyModel, string>;
  requests: Dexie.Table<DBRequestModel, number>;
}

const db = new Dexie("2021.04.09") as DB;

db.version(1).stores({
  users: "id, profile",
  properties: "id, name, status, address, detail, userId, agencyId",
  agencies: "id, name, address",
  requests: "id, userId, agencyId, properties, memo"
});

export { db };
