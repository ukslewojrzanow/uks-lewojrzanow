import IMGinsta from "@/public/instagramLogo.png";
import IMGtiktok from "@/public/tiktokLogo.png";
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
            href="https://www.facebook.com/profile.php?id=100063537579848"
            target="_blank"
          >
            <Image src={IMGface} alt="Logo" />
          </Link>
          <Link
            href="https://www.instagram.com/uks_rusiec_handball/"
            target="_blank"
          >
            <Image src={IMGinsta} alt="Logo" />
          </Link>
          <Link href="https://www.tiktok.com/@uks_rusiec" target="_blank">
            <Image src={IMGtiktok} alt="Logo" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MainSocial;
