import Link from "next/link";
import { Box, BoxProps } from "@chakra-ui/react";
import { PropertyItem } from "~/components/molecules/PropertyItem";
import { usePropertyList } from "~/store/organisms/PropertyList";

export const PropertyList: React.FC<BoxProps> = ({ ...boxProps }) => {
  const { properties } = usePropertyList();

  return (
    <Box {...boxProps}>
      {properties.map((elem) => {
        return (
          <Link key={elem.id} href={`/properties/${elem.id}`}>
            <PropertyItem propertyItem={elem} />
          </Link>
        );
      })}
    </Box>
  );
};
