import Link from "next/link";
import ScrollUp from "../UI/ScrollUp";
import Image from "next/image";
import KVchlopaki from "@/public/KVchlopaki.jpg";
import KVdziewczyny from "@/public/KVdziewczyny.jpg";
import IMGball from "@/public/handballicon.png";

function MainTeams() {
  return (
    <section className="section_div section_teams" id="druzyny">
      <ScrollUp>
        <div className="container relative">
          <h2 className="section_h2">Drużyny</h2>
          <div className="home_news-boxes">
            <div
              className="home_news-imgbox
            home_teams-imgbox"
            >
              <Image src={KVchlopaki} alt="aktualnosci" />
              <Image src={KVdziewczyny} alt="aktualnosci" />
            </div>
            <div className="home_news-textbox">
              <h3 className="section_h3">
                Nasze drużyny - jedna pasja, jeden cel
              </h3>
              <p>
                UKS Rusiec to nie tylko klub - to rodzina! Od młodych talentów
                po doświadczonych zawodników - nasze drużyny to duma UKS Rusiec.
                Poznaj nasze sekcje męskie i żeńskie, zobacz kto gra z sercem i
                zostawia wszystko na boisku.
              </p>
              <Link href="/druzyny" className="home_teams-btn uppercase">
                Poznaj nasze drużyny
              </Link>
            </div>
          </div>

          <Image src={IMGball} alt="piłka" className="section_bg-icon" />
        </div>
      </ScrollUp>
    </section>
  );
}

export default MainTeams;
