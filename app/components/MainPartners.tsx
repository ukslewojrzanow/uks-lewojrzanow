import Image from "next/image";
import IMGparnter from "@/public/partner.png";

import FadeIn from "../UI/FadeIn";

function MainPartners() {
  return (
    <section className="home_partners-section">
      <FadeIn>
        <div className="home_partners-box">
          <Image src={IMGparnter} alt="partner" />
          <Image src={IMGparnter} alt="partner" />
          <Image src={IMGparnter} alt="partner" />
          <Image src={IMGparnter} alt="partner" />
          <Image src={IMGparnter} alt="partner" />
          <Image src={IMGparnter} alt="partner" />
        </div>
      </FadeIn>
    </section>
  );
}

export default MainPartners;
