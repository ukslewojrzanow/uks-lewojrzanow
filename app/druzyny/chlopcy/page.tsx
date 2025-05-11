import playersBoys from "@/app/players/playersBoys";
import MapBoys from "@/app/components/MapBoys";

function page() {
  const boys = playersBoys;
  const divisions = [...new Set(boys.map((d) => d.division))];

  return (
    <>
      <MapBoys boys={boys} divisions={divisions} />
    </>
  );
}

export default page;
