"use client";
import KVchlopaki from "@/public/KVchlopaki.jpg";
import KVdziewczyny from "@/public/KVdziewczyny.jpg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MainHero() {
  const [currentKV, setCurrentKV] = useState(KVchlopaki);
  const [opacity, setOpacity] = useState(0.2);
  useEffect(
    function () {
      const interval = setInterval(() => {
        if (currentKV === KVchlopaki) {
          setOpacity(0);
          setTimeout(() => {
            setCurrentKV(KVdziewczyny);
            setOpacity(0.2);
          }, 100);
        }

        if (currentKV === KVdziewczyny) {
          setOpacity(0);
          setTimeout(() => {
            setCurrentKV(KVchlopaki);
            setOpacity(0.2);
          }, 100);
        }
      }, 5000);
      return () => clearInterval(interval);
    },
    [currentKV],
  );

  return (
    <section className="min-h-screen hero_section overflow-hidden hero_section">
      <div className="hero_copy-boxes">
        <div className="hero_copy-box">
          <h1 className=" hero_h1">UKS LEW OJRZANÓW</h1>
          <h2 className="hero_h2">
            Klub Sportowy szkolący dzieci i młodzież w piłce ręcznej
          </h2>
          <p className="hero_p">GRAJ. BAW SIĘ. ROŚNIJ Z NAMI! 🖤💛</p>
          <div className="hero_btn-box">
            <Link href="/#aktualnosci" className="hero_btn-1">
              Aktualności
            </Link>
            <Link href="/#druzyny" className="hero_btn-2">
              Drużyny
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={currentKV}
        alt="Drużyna chłopców UKS Lew Ojrzanów z dyplomami i pucharami"
        fill
        className="transition-all duration-300 w-[50%] h-[50%] z-[-5] opacity-10 object-center object-cover"
        style={{ opacity: `${opacity}` }}
      />
    </section>
  );
}
