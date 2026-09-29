import KVdruzyny from "@/public/bg-teams.jpg";
import FadeIn from "../UI/FadeIn";
import Image from "next/image";
import MainPartners from "../components/MainPartners";
import MainSocial from "../components/MainSocial";
import FadeDelay from "../UI/FadeDelay";

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
      <FadeDelay>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2222.3660311059507!2d20.731887776159848!3d52.01062417381783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47193919566c0d1d%3A0x46da48b195d92b9c!2sSzko%C5%82a%20Podstawowa!5e1!3m2!1spl!2spl!4v1787646349709!5m2!1spl!2spl"
          className="w-full h-[400px] opacity-90 grayscale-75 hover:grayscale-50 hover:opacity-100 transition-all duration-300 "
          loading="lazy"
        ></iframe>
      </FadeDelay>

      <MainSocial />
    </>
  );
}

export default page;
