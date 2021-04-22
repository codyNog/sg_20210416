import Link from "next/link";
import { AgencyItem } from "~/components/molecules/AgencyItem";
import { useAgencyList } from "~/store/organisms/AgencyList";

export const AgencyList: React.FC = () => {
  const { agencies } = useAgencyList();

  if (!agencies) return null;

  return (
    <>
      {agencies.map((agency) => (
        <Link key={agency.id} href={`/agencies/${agency.id}`}>
          <a>
            <AgencyItem agency={agency} cursor={"pointer"} />
          </a>
        </Link>
      ))}
    </>
  );
};
