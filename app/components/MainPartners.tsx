import Image from "next/image";
import IMGparnter from "@/public/partner.png";
import IMGgmina from "@/public/rep-gmina.png";
import IMGwmzpr from "@/public/rep-wmzpr.png";
import IMGgos from "@/public/rep-gos.png";
import IMGmazowsze from "@/public/rep-mazowsze.png";
import IMGrusiec from "@/public/rep-rusiec.png";

import FadeIn from "../UI/FadeIn";

function MainPartners() {
  return (
    <section className="home_partners-section">
      <FadeIn>
        <div className="home_partners-box">
          <Image src={IMGparnter} alt="partner" />
          <Image src={IMGgmina} alt="partner" />
          <Image src={IMGwmzpr} alt="partner" />
          <Image src={IMGgos} alt="partner" />
          <Image src={IMGmazowsze} alt="partner" />
          <Image src={IMGrusiec} alt="partner" />
        </div>
      </FadeIn>
    </section>
  );
}

export default MainPartners;
