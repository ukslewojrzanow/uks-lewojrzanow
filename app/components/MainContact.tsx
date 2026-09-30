import Image from "next/image";
import ScrollUp from "../UI/ScrollUp";
import IMGicon from "@/public/ukslogo.png";
import Map from "./GoogleMaps";

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
                <li>Adres: ul. Szkolna 1, Ojrzanów, Poland, 96-321</li>
                <li>Telefon: 666 600 846</li>
                <li>E-mail: biuro@ukslewojrzanow.pl</li>
              </ul>
            </div>
            <Image src={IMGicon} alt="piłka" className="section_bg-icon" />
          </div>
        </div>
      </ScrollUp>
      <Map />
    </section>
  );
}

export default MainContact;
