// import Image from "next/image";
// import IMGparnter from "@/public/Icon_sp_ojrzanow.png";
// import IMGgmina from "@/public/Icon_zabia.png";
// import IMGwmzpr from "@/public/rep-wmzpr.png";
// import IMGgos from "@/public/Icon_tk.png";
// import IMGmazowsze from "@/public/Icon_fego.png";
// import IMGVerk from "@/public/Icon_Verk.png";
// import IMGNn from "@/public/Icon_nn.png";
// import IconDaniel from "@/public/rep-daniel.png";
// import IconVienna from "@/public/rep-vienna.png";
// import IconInter from "@/public/rep-inter.png";

// import FadeIn from "../UI/FadeIn";

// function MainPartners() {
//   return (
//     <section className="home_partners-section">
//       <FadeIn>
//         <div className="home_partners-box">
//           <Image
//             src={IMGparnter}
//             alt="partner"
//             className="border-2 border-[var(--accent-green-light)] rounded-full"
//           />
//           <Image
//             src={IMGgmina}
//             alt="partner"
//             className="border-2 border-[var(--accent-green-light)] rounded-full"
//           />
//           <Image src={IMGwmzpr} alt="partner" />
//           <Image src={IMGgos} alt="partner" className="rounded-full" />
//           <Image src={IMGmazowsze} alt="partner" className="rounded-full" />
//           <Image src={IMGVerk} alt="partner" />
//           <Image src={IMGNn} alt="partner" className="rounded-full" />
//           <Image src={IconDaniel} alt="partner" className="rounded-full" />
//           <Image src={IconVienna} alt="partner" className="rounded-full" />
//           <Image src={IconInter} alt="partner" className="rounded-full" />
//         </div>
//       </FadeIn>
//     </section>
//   );
// }

// export default MainPartners;

import Image from "next/image";
import IMGparnter from "@/public/Icon_sp_ojrzanow.png";
import IMGgmina from "@/public/Icon_zabia.png";
import IMGwmzpr from "@/public/rep-wmzpr.png";
import IMGgos from "@/public/Icon_tk.png";
import IMGmazowsze from "@/public/Icon_fego.png";
import IMGVerk from "@/public/Icon_Verk.png";
import IMGNn from "@/public/Icon_nn.png";
import IconDaniel from "@/public/rep-daniel.png";
import IconVienna from "@/public/rep-vienna.png";
import IconInter from "@/public/rep-inter.png";

import FadeIn from "../UI/FadeIn";

function MainPartners() {
  const partners = [
    {
      src: IMGparnter,
      className: "border-2 border-[var(--accent-green-light)] rounded-full",
    },
    {
      src: IMGgmina,
      className: "border-2 border-[var(--accent-green-light)] rounded-full",
    },
    { src: IMGwmzpr },
    { src: IMGgos, className: "rounded-full" },
    { src: IMGmazowsze, className: "rounded-full" },
    { src: IMGVerk },
    { src: IMGNn, className: "rounded-full" },
    { src: IconDaniel, className: "rounded-full" },
    { src: IconVienna, className: "rounded-full" },
    { src: IconInter, className: "rounded-full" },
  ];

  return (
    <section className="home_partners-section">
      <FadeIn>
        <div className="home_partners-carousel">
          <div className="home_partners-track">
            {[0, 1, 2].map((group) => (
              <div
                className="home_partners-group"
                key={group}
                aria-hidden={group !== 0}
              >
                {partners.map((partner, index) => (
                  <Image
                    key={`${group}-${index}`}
                    src={partner.src}
                    alt={group === 0 ? "Partner" : ""}
                    className={partner.className || ""}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export default MainPartners;
