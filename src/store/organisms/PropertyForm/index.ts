import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { backend } from "~/domain/backend";
import { Property } from "~/domain/entities/Property";

interface FormValue {
  name: string;
  value: number;
  purpose: string;
  prefecture: string;
  city: string;
  otherAddress: string;
  area: number;
  floorPlan: string;
}

export const usePropertyForm = (property: Property) => {
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
    console.log(feature);
    if (!feature) return;
    setFeatures((prev) => prev.concat(feature));
    setFeature("");
  }, []);

  const onSubmit = async (props: FormValue) => {
    const {
      name,
      value,
      purpose,
      prefecture,
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
        purpose
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
    isEdit
      ? await backend().property.updateProperty(nextState)
      : await backend().property.createProperty(nextState);
  };

  const submit = handleSubmit(onSubmit);

  const onDelete = async () => {
    if (!property) return;
    await backend().property.deleteProperty(property.id);
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
