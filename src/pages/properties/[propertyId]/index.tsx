import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import { PropertyItem } from "~/components/molecules/PropertyItem";
import { backend } from "~/domain/backend";

const Component = () => {
  const { query } = useRouter();
  const { data: property } = useSWR(
    [query.propertyId],
    backend().property.fetchProperty
  );
  if (!property) return null;
  return <PropertyItem propertyItem={property} />;
};

export default Component;
