import playersGirls from "@/app/players/playersGirls";

import MapGirls from "@/app/components/MapGirls";

function page() {
  const girls = playersGirls;
  const divisions = [...new Set(girls.map((d) => d.division))];
  console.log(divisions);

  return (
    <>
      <MapGirls girls={girls} divisions={divisions} />
    </>
  );
}

export default page;
