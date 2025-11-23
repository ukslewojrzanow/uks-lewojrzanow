import KVdruzyny from "@/public/bg-teams.jpg";
import FadeIn from "../UI/FadeIn";
import Image from "next/image";
import MainPartners from "../components/MainPartners";
import MainSocial from "../components/MainSocial";

function page() {
  return (
    <>
      <FadeIn>
        <section className="grid justify-center gap-8 items-center page_teams overflow-hidden relative">
          <h1 className="text-center">Partnerzy</h1>
          <Image
            src={KVdruzyny}
            alt="Drużyny zespołu UKS Rusiec"
            fill
            className="object-cover object-top -z-10 "
          />
        </section>
      </FadeIn>
      <MainPartners />
      <MainSocial />
    </>
  );
}

export default page;
