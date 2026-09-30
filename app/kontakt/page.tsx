import KVdruzyny from "@/public/bg-teams.jpg";
import FadeIn from "../UI/FadeIn";
import Image from "next/image";
import MainPartners from "../components/MainPartners";
import MainSocial from "../components/MainSocial";
import Map from "../components/GoogleMaps";

export const metadata = {
  title: "Kontakt",
};

function page() {
  return (
    <>
      <FadeIn>
        <section className="grid justify-center gap-8 items-center page_teams overflow-hidden relative">
          <h1 className="text-center">Kontakt</h1>
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
          <h2 className="section_h2">Zapraszamy do kontaktu</h2>
          <FadeIn>
            <div className="contact-team-detail-box">
              <h3 className="section_h3">Kontakt Ogólny</h3>
              <ul className="contact-ul">
                <li>
                  <div>
                    <p>
                      <span className="font-semibold opacity-80">E-mail:</span>{" "}
                      biuro@ukslewojrzanow.pl
                    </p>
                    <p>
                      <span className="font-semibold opacity-80">Telefon:</span>{" "}
                      666 600 846
                    </p>
                    <p>
                      <span className="font-semibold opacity-80">
                        UKS Lew Ojrzanów
                      </span>
                    </p>
                    <p>ul. Szkolna 1</p>
                    <p>96-321 Ojrzanów</p>
                    {/* <p>NIP: 534-254-27-41</p> */}
                  </div>
                </li>
              </ul>
            </div>
            <div className="contact-team-detail-box">
              <h3 className="section_h3">
                Daniel Śliwiński{" "}
                <span className="text-[14px] tracking-wide opacity-80">
                  - Prezes
                </span>
              </h3>
              <ul className="contact-ul">
                <li>
                  <div>
                    <p>
                      <span className="font-semibold opacity-80">Telefon:</span>{" "}
                      666 600 846
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="contact-team-detail-box">
              <h3 className="section_h3">
                Piotr Końko{" "}
                <span className="text-[14px] tracking-wide opacity-80">
                  - Członek Zarządu
                </span>
              </h3>
              <ul className="contact-ul">
                <li>
                  <div>
                    <p>
                      <span className="font-semibold opacity-80">Telefon:</span>{" "}
                      733 503 470
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
      <Map />

      <MainSocial />
    </>
  );
}

export default page;
