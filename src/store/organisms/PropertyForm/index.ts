import { useRouter } from "next/dist/client/router";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { backend } from "~/domain/backend";
import { Property } from "~/domain/entities/Property";

interface FormValue {
  name: string;
  value: number;
  prefecture: string;
  city: string;
  otherAddress: string;
  area: number;
  floorPlan: string;
  rent: number;
}

export const usePropertyForm = () => {
  const { query, push } = useRouter();
  const { data: property, mutate: setProperty } = useSWR(
    query.propertyId ? [query.propertyId] : null,
    backend().property.fetchProperty,
    { revalidateOnMount: true }
  );
  const { register, handleSubmit } = useForm<Property>();
  const [feature, setFeature] = useState("");
  const [features, setFeatures] = useState<string[]>(
    property ? property.detail.features : []
  );

  const isEdit = !!property;

  const onChangeFeature = useCallback(
    (value: string) => {
      console.log(value);
      setFeature(value);
    },
    [setFeature]
  );

  const onEnterFeatures = useCallback(() => {
    if (!feature) return;
    setFeatures((prev) => prev.concat(feature));
    setFeature("");
  }, []);

  const onSubmit = async (props: FormValue) => {
    const {
      name,
      value,
      prefecture,
      rent,
      city,
      otherAddress,
      area,
      floorPlan
    } = props;
    const nextState: Property = {
      id: property ? property.id : "",
      name,
      status: {
        value,
        rent
      },
      address: {
        prefecture,
        city,
        otherAddress
      },
      detail: {
        area,
        floorPlan,
        features
      },
      userId: "",
      agencyId: ""
    };
    const newProperty = isEdit
      ? await backend().property.updateProperty(nextState)
      : await backend().property.createProperty(nextState);
    setProperty(newProperty, false);
    push("/properties");
  };

  const submit = handleSubmit(onSubmit);

  const onDelete = async () => {
    if (!property) return;
    await backend().property.deleteProperty(property.id);
    push("/properties");
  };

  return {
    register,
    submit,
    onDelete,
    features,
    feature,
    onChangeFeature,
    onEnterFeatures
  };
};
