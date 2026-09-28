import Image from "next/image";
import IMGparnter from "@/public/Icon_sp_ojrzanow.png";
import IMGgmina from "@/public/Icon_zabia.png";
import IMGwmzpr from "@/public/rep-wmzpr.png";
import IMGgos from "@/public/Icon_tk.png";
import IMGmazowsze from "@/public/Icon_fego.png";
import IMGVerk from "@/public/Icon_Verk.png";
import IMGNn from "@/public/Icon_nn.png";

import FadeIn from "../UI/FadeIn";

function MainPartners() {
  return (
    <section className="home_partners-section">
      <FadeIn>
        <div className="home_partners-box">
          <Image
            src={IMGparnter}
            alt="partner"
            className="border-2 border-[var(--accent-green-light)] rounded-full"
          />
          <Image
            src={IMGgmina}
            alt="partner"
            className="border-2 border-[var(--accent-green-light)] rounded-full"
          />
          <Image src={IMGwmzpr} alt="partner" />
          <Image src={IMGgos} alt="partner" className="rounded-full" />
          <Image src={IMGmazowsze} alt="partner" className="rounded-full" />
          <Image src={IMGVerk} alt="partner" />
          <Image src={IMGNn} alt="partner" className="rounded-full" />
        </div>
      </FadeIn>
    </section>
  );
}

export default MainPartners;
