import Link from "next/link";
import KVdruzyny from "@/public/bg-teams.jpg";
import KVchlopaki from "@/public/bg-boy.jpg";
import KVdziewczyny from "@/public/bg-girl.jpg";
import Image from "next/image";
import MainPartners from "../components/MainPartners";
import MainSocial from "../components/MainSocial";
import FadeIn from "../UI/FadeIn";
import ScrollUp from "../UI/ScrollUp";

export const metadata = {
  title: "Drużyny",
};

function page() {
  return (
    <>
      <FadeIn>
        <section className="grid justify-center gap-8 items-center page_teams overflow-hidden relative">
          <h1 className="text-center">Drużyny</h1>
          <Image
            src={KVdruzyny}
            alt="Drużyny zespołu UKS Rusiec"
            title="Drużyny zespołu UKS Rusiec"
            fill
            className="object-cover object-top -z-10 "
          />
        </section>
      </FadeIn>
      <MainPartners />
      <ScrollUp>
        <section className="container page_teams-copy">
          <h2 className="section_h2">Poznaj nasze drużyny</h2>
          <p>
            UKS Lew Ojrzanów to miejsce, gdzie pasja do piłki ręcznej łączy
            zawodników i zawodniczki w silne, zgrane zespoły. Niezależnie od
            tego, czy kibicujesz chłopakom czy dziewczynom - tu znajdziesz
            sportowe emocje, sukcesy i prawdziwego ducha rywalizacji.
          </p>
          <h3 className="section_h3">
            Wybierz drużynę i zobacz, kto gra z sercem dla UKS Lew Ojrzanów!
          </h3>
        </section>
      </ScrollUp>
      <FadeIn>
        <section className="page_teams-teamsbox">
          <Link
            href="/druzyny/klasy-1-3"
            className="overflow-hidden"
            title="Przejdź do drużyny chłopców"
          >
            <div className="page_teams-team boys relative">
              <div>
                <p className="pageToTeam_link text-center">Akademia</p>
                <p className="pageToTeam_link text-center">
                  zRęcznego Lwiątkia
                </p>
                <p className="text-center">Dzieci klas I-III</p>
              </div>
              <Image
                src={KVchlopaki}
                alt="Szczypiornista zespołu UKS wykonujący rzut"
                title="Drużyna chłopców"
                fill
                className="object-cover object-top -z-10"
              />
            </div>
          </Link>
          <Link
            href="/druzyny/klasy-4-5"
            className="overflow-hidden"
            title="Przejdź do drużyny dziewcząt"
          >
            <div className="page_teams-team girls relative">
              <div>
                <p className="pageToTeam_link text-center">Akademia</p>
                <p className="pageToTeam_link text-center">zRęcznego Lwa</p>
                <p className="text-center">Dzieci klas IV-V</p>
              </div>
              <Image
                src={KVdziewczyny}
                alt="Szczypiornistka zespołu UKS wykonująca rzut"
                title="Drużyna dziewcząt"
                fill
                className="object-cover object-top -z-10"
              />
            </div>
          </Link>
        </section>
      </FadeIn>

      <MainSocial />
    </>
  );
}

export default page;
