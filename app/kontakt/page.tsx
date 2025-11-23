import KVdruzyny from "@/public/bg-teams.jpg";
import FadeIn from "../UI/FadeIn";
import Image from "next/image";
import MainPartners from "../components/MainPartners";
import MainSocial from "../components/MainSocial";
import ContactGirls from "../components/ContactGirls";
import ScrollUp from "../UI/ScrollUp";
import ContactBoys from "../components/ContactBoys";

function page() {
  return (
    <>
      <FadeIn>
        <section className="grid justify-center gap-8 items-center page_teams overflow-hidden relative">
          <h1 className="text-center">Kontakt</h1>
          <Image
            src={KVdruzyny}
            alt="Drużyny zespołu UKS Rusiec"
            fill
            className="object-cover object-top -z-10 "
          />
        </section>
      </FadeIn>
      <MainPartners />
      <section className="section_div">
        <div className="container">
          <h2 className="section_h2">Zapraszamy do kontaktu</h2>
          <ScrollUp>
            <ContactGirls />
          </ScrollUp>
          <ScrollUp>
            <ContactBoys />
          </ScrollUp>
        </div>
      </section>
      <MainSocial />
    </>
  );
}

export default page;
