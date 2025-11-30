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
import IconVerk from "@/public/Icon_Verk.png";
import Link from "next/link";

export const metadata = {
  title: "Partnerzy",
};

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
          <div className="grid min-lg:grid-cols-2 gap-20 partners-box content-center">
            <div className="flex max-[768px]:flex-col gap-8 min-lg:flex-col self-center items-center">
              <Link
                href="https://www.facebook.com/medincuspl"
                title="Przejdź do Medincus"
              >
                <Image
                  src={IconMedincus}
                  className="parnetrs-img"
                  alt="Logo Partnera Medincus Centrium Słuchu i Mowy"
                />
              </Link>
              <h3 className="section_h3 text-center self-center">
                Medincus Centrum Słuchu i Mowy
              </h3>
            </div>

            <div className="flex max-[768px]:flex-col gap-8 min-lg:flex-col self-center items-center">
              <Link
                href="https://www.facebook.com/profile.php?id=100083973825693"
                title="Przejdź do MMedic"
              >
                <Image
                  src={IconMedic}
                  className="parnetrs-img"
                  alt="Logo Partnera MMedic Nadarzyn"
                />
              </Link>
              <h3 className="section_h3 text-center self-center">
                MMedic Nadarzyn
              </h3>
            </div>

            <div className="flex max-[768px]:flex-col gap-8 min-lg:flex-col self-center items-center">
              <Link
                href="https://www.facebook.com/Mclinicnadarzyn"
                title="Przejdź do MClinic"
              >
                <Image
                  src={IconMClinic}
                  className="parnetrs-img"
                  alt="Logo Partnera MClinic Nadarzyn"
                />
              </Link>
              <h3 className="section_h3 text-center self-center">
                MClinic Nadarzyn
              </h3>
            </div>

            <div className="flex max-[768px]:flex-col gap-8 min-lg:flex-col self-center items-center">
              <Link
                href="https://www.facebook.com/SARTreklama"
                title="Przejdź do SART s.c."
              >
                <Image
                  src={IconSart}
                  className="parnetrs-img"
                  alt="Logo Partnera SART s.c."
                />
              </Link>
              <h3 className="section_h3 text-center self-center">SART s.c.</h3>
            </div>

            <div className="flex max-[768px]:flex-col gap-8 min-lg:flex-col self-center items-center">
              <Link
                href="https://www.facebook.com/parkkajetany"
                title="Przejdź do Park Kajetany"
              >
                <Image
                  src={IconHotel}
                  className="parnetrs-img"
                  alt="Logo Partnera Hotel Park Kajetany"
                />
              </Link>
              <h3 className="section_h3 text-center self-center">
                Hotel Park Kajetany
              </h3>
            </div>

            <div className="flex max-[768px]:flex-col gap-8 min-lg:flex-col self-center items-center">
              <Link
                href="https://www.facebook.com/profile.php?id=100078227894833"
                title="Przejdź do Hydroodnowa"
              >
                <Image
                  src={IconHydro}
                  className="parnetrs-img"
                  alt="Logo Partnera Hydroodnowa - prace melioracyjne"
                />
              </Link>
              <h3 className="section_h3 text-center self-center">
                Hydroodnowa - prace melioracyjne
              </h3>
            </div>

            <div className="flex max-[768px]:flex-col gap-8 min-lg:flex-col self-center items-center">
              <Link
                href="https://www.facebook.com/verkskleppl/"
                title="Przejdź do Verk Group"
              >
                <Image
                  src={IconVerk}
                  className="parnetrs-img"
                  alt="Logo Partnera Verk Group"
                />
              </Link>
              <h3 className="section_h3 text-center self-center">Verk Group</h3>
            </div>

            <div className="flex max-[768px]:flex-col gap-8 min-lg:flex-col self-center items-center">
              <Link
                href="https://www.facebook.com/profile.php?id=61582486892051"
                title="Przejdź do Giocca"
              >
                <Image
                  src={IconGiocca}
                  className="parnetrs-img"
                  alt="Logo Partnera Giocca JammSports"
                />
              </Link>
              <h3 className="section_h3 text-center self-center">
                Giocca JammSports
              </h3>
            </div>
          </div>
        </div>
      </section>
      <MainSocial />
    </>
  );
}

export default page;
