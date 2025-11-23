import KVdruzyny from "@/public/bg-teams.jpg";
import FadeIn from "../UI/FadeIn";
import Image from "next/image";
import MainPartners from "../components/MainPartners";
import MainSocial from "../components/MainSocial";
import IconMedincus from "@/public/Icon_Medincus.png";
import IconMedic from "@/public/Icon_Medic.png";
import IconMClinic from "@/public/Icon_MClinic.png";
import IconHydro from "@/public/Icon_Hydro.png";
import IconHotel from "@/public/Icon_Hotel.png";
import IconSart from "@/public/Icon_Sart.png";
import IconGiocca from "@/public/Icon_Giocca.png";

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
      <section className="section_div">
        <div className="container">
          <h2 className="section_h2">Nasi Partnerzy</h2>
          <div className="grid min-lg:grid-cols-2 gap-20 place-items-center partners-box">
            <div className="grid max-[768px]:grid-cols-2 gap-16">
              <Image src={IconMedincus} className="parnetrs-img" alt="x" />
              <h3 className="section_h3 text-center">
                Medincus Centrum Słuchu i Mowy
              </h3>
            </div>

            <div className="grid max-[768px]:grid-cols-2 gap-16">
              <Image src={IconMedic} className="parnetrs-img" alt="x" />
              <h3 className="section_h3 text-center">MMedic Nadarzyn</h3>
            </div>

            <div className="grid max-[768px]:grid-cols-2 gap-16">
              <Image src={IconMClinic} className="parnetrs-img" alt="x" />
              <h3 className="section_h3 text-center">MClinic Nadarzyn</h3>
            </div>

            <div className="grid max-[768px]:grid-cols-2 gap-16">
              <Image src={IconSart} className="parnetrs-img" alt="x" />
              <h3 className="section_h3 text-center">SART s.c.</h3>
            </div>

            <div className="grid max-[768px]:grid-cols-2 gap-16">
              <Image src={IconHotel} className="parnetrs-img" alt="x" />
              <h3 className="section_h3 text-center">Hotel Park Kajetany </h3>
            </div>

            <div className="grid max-[768px]:grid-cols-2 gap-16">
              <Image src={IconHydro} className="parnetrs-img" alt="x" />
              <h3 className="section_h3 text-center">
                Hydroodnowa - prace melioracyjne
              </h3>
            </div>

            <div className="grid max-[768px]:grid-cols-2 gap-16">
              <Image src={IconGiocca} className="parnetrs-img" alt="x" />
              <h3 className="section_h3 text-center">Giocca JammSports</h3>
            </div>
          </div>
        </div>
      </section>
      <MainSocial />
    </>
  );
}

export default page;
