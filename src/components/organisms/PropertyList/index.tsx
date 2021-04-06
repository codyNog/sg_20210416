import Link from "next/link";
import { PropertyItem } from "~/components/molecules/PropertyItem";
import { usePropertyList } from "~/store/organisms/PropertyList";

export const PropertyList: React.FC = () => {
  const { properties } = usePropertyList();

  if (!properties) return null;

  return (
    <>
      {properties.map((elem) => {
        return (
          <Link key={elem.id} href={`/properties/${elem.id}`}>
            <PropertyItem propertyItem={elem} cursor={"pointer"} />
          </Link>
        );
      })}
    </>
  );
};
