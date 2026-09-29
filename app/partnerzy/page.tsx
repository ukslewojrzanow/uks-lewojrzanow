import KVdruzyny from "@/public/bg-teams.jpg";
import FadeIn from "../UI/FadeIn";
import Image from "next/image";
import MainPartners from "../components/MainPartners";
import MainSocial from "../components/MainSocial";
import SPOjrzanow from "@/public/Icon_sp_ojrzanow.png";
import Zabia from "@/public/Icon_zabia.png";
import Wmzpr from "@/public/icon-wmzpr.png";
import Icontk from "@/public/Icon_tk.png";
import Iconfego from "@/public/Icon_fego.png";
import IconDaniel from "@/public/rep-daniel.png";
import IconVienna from "@/public/rep-vienna.png";
import IconInter from "@/public/rep-inter.png";
import Iconnn from "@/public/Icon_nn.png";
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
            alt="Drużyny zespołu UKS Ojrzanów"
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
                href="https://spojrzanow.pl/"
                title="Przejdź do Szkoła Podstawowa im. Stefanii Dziewulskiej w Ojrzanowie"
              >
                <Image
                  src={SPOjrzanow}
                  className="parnetrs-img"
                  alt="Logo Partnera Szkoła Podstawowa im. Stefanii Dziewulskiej w Ojrzanowie "
                />
              </Link>
              <h3 className="section_h3 text-center self-center">
                Szkoła Podstawowa im. Stefanii Dziewulskiej w Ojrzanowie
              </h3>
            </div>

            <div className="flex max-[768px]:flex-col gap-8 min-lg:flex-col self-center items-center">
              <Link
                href="https://www.zabiawola.pl/"
                title="Przejdź do Gmina Żabia Wola"
              >
                <Image
                  src={Zabia}
                  className="parnetrs-img"
                  alt="Logo Partnera Gmina Żabia Wola"
                />
              </Link>
              <h3 className="section_h3 text-center self-center">
                Gmina Żabia Wola
              </h3>
            </div>

            <div className="flex max-[768px]:flex-col gap-8 min-lg:flex-col self-center items-center">
              <Link href="https://wmzpr.pl/" title="Przejdź do WMZPR">
                <Image
                  src={Wmzpr}
                  className="parnetrs-img"
                  alt="Logo Partnera Warszawsko-Mazowiecki Związek Piłki Ręcznej"
                />
              </Link>
              <h3 className="section_h3 text-center self-center">
                Warszawsko-Mazowiecki Związek Piłki Ręcznej
              </h3>
            </div>

            <div className="flex max-[768px]:flex-col gap-8 min-lg:flex-col self-center items-center">
              <Link href="https://www.verk.pl" title="Przejdź do Verk Group">
                <Image
                  src={IconVerk}
                  className="parnetrs-img"
                  alt="Logo Partnera VERK GROUP SP. Z O.O. SP.K."
                />
              </Link>
              <h3 className="section_h3 text-center self-center">
                VERK GROUP SP. Z O.O. SP.K.
              </h3>
            </div>

            <div className="flex max-[768px]:flex-col gap-8 min-lg:flex-col self-center items-center">
              <Image
                src={IconDaniel}
                className="parnetrs-img"
                alt="Logo Partnera Daniel Śliwiński Premium Finance"
              />
              <h3 className="section_h3 text-center self-center">
                Daniel Śliwiński Premium Finance
              </h3>
            </div>

            <div className="flex max-[768px]:flex-col gap-8 min-lg:flex-col self-center items-center">
              <Link
                href="https://www.fegotrade.pl"
                title="Przejdź do Fego Trade"
              >
                <Image
                  src={Iconfego}
                  className="parnetrs-img"
                  alt="Logo Partnera Fego Trade Sp. z o.o."
                />
              </Link>
              <h3 className="section_h3 text-center self-center">
                Fego Trade Sp. z o.o.
              </h3>
            </div>

            <div className="flex max-[768px]:flex-col gap-8 min-lg:flex-col self-center items-center">
              <Link
                href="https://www.tkinvest.com.pl/"
                title="Przejdź do TK Invest"
              >
                <Image
                  src={Icontk}
                  className="parnetrs-img"
                  alt="Logo Partnera TK Invest Group Sp. z o.o. Sp.k"
                />
              </Link>
              <h3 className="section_h3 text-center self-center">
                TK Invest Group Sp. z o.o. Sp.k
              </h3>
            </div>

            <div className="flex max-[768px]:flex-col gap-8 min-lg:flex-col self-center items-center">
              <Link
                href="http://www.nieszablonowa.pl/"
                title="Przejdź do Nieszablonowa Agnieszka Dylak"
              >
                <Image
                  src={Iconnn}
                  className="parnetrs-img"
                  alt="Logo Partnera Nieszablonowa Agnieszka Dylak"
                />
              </Link>
              <h3 className="section_h3 text-center self-center">
                Nieszablonowa Agnieszka Dylak
              </h3>
            </div>

            <div className="flex max-[768px]:flex-col gap-8 min-lg:flex-col self-center items-center">
              <Link
                href="http://www.nieszablonowa.pl/"
                title="Przejdź do Vienna Life Towarzystwo Ubezpieczeń na Życie S.A."
              >
                <Image
                  src={IconVienna}
                  className="parnetrs-img"
                  alt="Logo Partnera Vienna Life Towarzystwo Ubezpieczeń na Życie S.A."
                />
              </Link>
              <h3 className="section_h3 text-center self-center">
                Vienna Life <br></br>Towarzystwo Ubezpieczeń na Życie S.A.
              </h3>
            </div>

            <div className="flex max-[768px]:flex-col gap-8 min-lg:flex-col self-center items-center">
              <Link
                href="https://interrisk.pl/"
                title="Przejdź do InterRisk TU S.A. Vienna Insurance Group"
              >
                <Image
                  src={IconInter}
                  className="parnetrs-img"
                  alt="Logo Partnera InterRisk TU S.A. Vienna Insurance Group"
                />
              </Link>
              <h3 className="section_h3 text-center self-center">
                InterRisk TU S.A. Vienna Insurance Group
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
