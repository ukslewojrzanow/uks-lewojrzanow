import IMGinsta from "@/public/instagramLogo.png";
import IMGface from "@/public/facebookLogo.png";
import Link from "next/link";
import Image from "next/image";

function MainSocial() {
  return (
    <section className="section_div">
      <div className="container">
        <h2 className="section_h2">Odwiedź nas</h2>
        <div className="home_socials">
          <Link
            href="https://www.facebook.com/people/UKS-LEW-Ojrzan%C3%B3w/61580468030071/"
            target="_blank"
            title="Przejdź do Facebook UKS Lew Ojrzanów"
          >
            <Image src={IMGface} alt="Logo Facebook" />
          </Link>
          <Link
            href="https://www.instagram.com/ukslewojrzanow/"
            target="_blank"
            title="Przejdź do Instagram UKS Lew Ojrzanów"
          >
            <Image src={IMGinsta} alt="Logo Instagram" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MainSocial;
