import Image from "next/image";
import ScrollUp from "../UI/ScrollUp";
import IMGicon from "@/public/ukslogoblack.png";
import FadeDelay from "../UI/FadeDelay";

function MainContact() {
  return (
    <section className="section_div-map relative" id="kontakt">
      <ScrollUp>
        <div className="container relative ">
          <div className="home_section_div">
            <h2 className="section_h2">Kontakt</h2>
            <div className="home_contact">
              <h3 className="section_h3">Zapraszamy do kontaktu!</h3>
              <ul>
                <li>Adres: Osiedlowa 72, Rusiec, Polska</li>
                <li>Telefon: 509 990 545</li>
                <li>E-mail: Biuro@uksrusiec.pl</li>
              </ul>
            </div>
            <Image
              src={IMGicon}
              alt="piłka"
              className="section_bg-icon shadow_logo"
            />
          </div>
        </div>
      </ScrollUp>
      <FadeDelay>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9811.653186725567!2d20.7762547157075!3d52.06310236995591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719377b63fd5959%3A0x3a3296f928e6f481!2sOsiedlowa%2072%2C%2005-830%20Rusiec!5e0!3m2!1spl!2spl!4v1742594236175!5m2!1spl!2spl"
          className="w-full h-[400px] opacity-90 grayscale-75 hover:grayscale-50 hover:opacity-100 transition-all duration-300 "
          loading="lazy"
        ></iframe>
      </FadeDelay>
    </section>
  );
}

export default MainContact;
