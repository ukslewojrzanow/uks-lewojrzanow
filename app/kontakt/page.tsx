import KVdruzyny from "@/public/bg-teams.jpg";
import IMGjuniors from "@/public/contact-juniors.png";
import FadeIn from "../UI/FadeIn";
import Image from "next/image";
import MainPartners from "../components/MainPartners";
import MainSocial from "../components/MainSocial";
import ContactGirls from "../components/ContactGirls";

import ContactBoys from "../components/ContactBoys";
import ContactAdacemy from "../components/ContactAcademy";

function page() {
  return (
    <>
      <FadeIn>
        <section className="grid justify-center gap-8 items-center page_teams overflow-hidden relative">
          <h1 className="text-center">Kontakt</h1>
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
          <h2 className="section_h2">Zapraszamy do kontaktu</h2>
          <FadeIn>
            <div className="contact-team-detail-box">
              <h3 className="section_h3">Kontakt Ogólny</h3>
              <ul className="contact-ul">
                <li>
                  <div>
                    <p>
                      <span className="font-semibold opacity-80">E-mail:</span>{" "}
                      biuro@uksrusiec.pl
                    </p>
                    <p>
                      <span className="font-semibold opacity-80">
                        UKS Rusiec
                      </span>
                    </p>
                    <p>ul. Osiedlowa 72</p>
                    <p>05-830 Rusiec</p>
                    <p>NIP: 534-254-27-41</p>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>
          <FadeIn>
            <Image
              src={IMGjuniors}
              alt="Zespół drużyny piłki ręcznej UKS Rusiec"
              className="img-kv"
            />
          </FadeIn>
          <div className="grid min-xl:grid-cols-2">
            <FadeIn>
              <ContactGirls />
            </FadeIn>
            <FadeIn>
              <ContactBoys />
            </FadeIn>
          </div>
          <FadeIn>
            <ContactAdacemy />
          </FadeIn>
        </div>
      </section>

      <MainSocial />
    </>
  );
}

export default page;
