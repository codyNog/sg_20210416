import Link from "next/link";
import { AgencyItem } from "~/components/molecules/AgencyItem";
import { GlobalStore } from "~/store/global";

export const AgencyList: React.FC = () => {
  const { agencies } = GlobalStore.useContainer();

  if (!agencies) return null;

  return (
    <>
      {agencies.map((agency) => (
        <Link key={agency.id} href={`/agencies/${agency.id}`}>
          <AgencyItem agency={agency} cursor={"pointer"} />
        </Link>
      ))}
    </>
  );
};
