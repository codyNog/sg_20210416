import useSWR from "swr";
import { backend } from "~/domain/backend";

export const usePropertyList = () => {
  const { data: properties } = useSWR(
    "不動産一覧取得",
    backend().property.fetchProperties
  );

  return { properties };
};
