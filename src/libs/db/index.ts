import Dexie from "dexie";
import { DBPropertyModel } from "~/db/properties";
import { DBUserModel } from "~/db/users";

type DexieDatabase = { [P in keyof Dexie]: Dexie[P] };

interface DB extends DexieDatabase {
  users: Dexie.Table<DBUserModel, number>;
  properties: Dexie.Table<DBPropertyModel, number>;
  agencies: Dexie.Table<any, number>;
  requests: Dexie.Table<any, number>;
}

const db = new Dexie("2021.04.09") as DB;

db.version(1).stores({
  users: "++id, profile",
  properties: "++id, name, status, address, detail, owedBy, managedBy",
  agencies: "++id, name, address",
  requests: "++id, user, agency, properties, memo"
});

export { db };
