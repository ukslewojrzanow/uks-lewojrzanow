import Link from "next/link";
import ScrollUp from "../UI/ScrollUp";
import IMGnews from "@/public/homenews.jpg";
import IMGicon from "@/public/handballmanblack.png";
import Image from "next/image";

function MainNews() {
  return (
    <section className="section_div" id="aktualnosci">
      <ScrollUp>
        <div className="container relative">
          <h2 className="section_h2">Aktualności</h2>
          <div className="home_news-boxes">
            <div className="home_news-textbox">
              <h3 className="section_h3">Najnowsze z boiska!</h3>
              <p>
                Nie przegap tego, co dzieje się w UKS Rusiec - mecze, wyniki,
                wydarzenia i kulisy klubu! Sprawdź najnowsze aktualności i bądź
                na bieżąco z naszymi sukcesami.
              </p>
              <Link href="/aktualnosci" className="home_news-btn">
                Zobacz wszystkie aktualności
              </Link>
            </div>
            <div className="home_news-imgbox">
              <Image src={IMGnews} alt="aktualnosci" />
            </div>
          </div>

          <Image src={IMGicon} alt="piłka" className="section_bg-icon" />
        </div>
      </ScrollUp>
    </section>
  );
}

export default MainNews;
