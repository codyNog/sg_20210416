type ValueOf<T> = T[keyof T];
type Property<T> =
  | keyof T
  | ValueOf<{ [K in keyof T]: T[K] extends object ? Property<T[K]> : never }>;
export type MappedKey<T> = Property<T>;
