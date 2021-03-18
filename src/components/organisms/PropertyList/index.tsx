import { Box, BoxProps } from "@chakra-ui/react";
import { PropertyItem } from "~/components/molecules/PropertyItem";
import { usePropertyList } from "~/store/organisms/PropertyList";

export const PropertyList: React.FC<BoxProps> = ({ ...boxProps }) => {
  const { properties } = usePropertyList();

  return (
    <Box {...boxProps}>
      {properties.map((elem) => {
        return <PropertyItem key={elem.id} propertyItem={elem} />;
      })}
    </Box>
  );
};
