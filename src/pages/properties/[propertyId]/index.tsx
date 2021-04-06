import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import { PropertyForm } from "~/components/organisms/PropertyForm";
import { Template } from "~/components/templates";
import { backend } from "~/domain/backend";

const Component = () => {
  const { query } = useRouter();
  const { data: property } = useSWR(
    query.propertyId ? [query.propertyId] : null,
    backend().property.fetchProperty
  );
  if (!property) return null;
  return (
    <Template>
      <PropertyForm property={property} />
    </Template>
  );
};

export default Component;
