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
            title="Przejdź do Facebook UKS Rusiec"
          >
            <Image src={IMGface} alt="Logo Facebook" />
          </Link>
          <Link
            href="https://www.instagram.com/uks_rusiec_handball/"
            target="_blank"
            title="Przejdź do Instagram UKS Rusiec"
          >
            <Image src={IMGinsta} alt="Logo Instagram" />
          </Link>
          <Link
            href="https://www.tiktok.com/@uks_rusiec"
            target="_blank"
            title="Przejdź do TikTok UKS Rusiec"
          >
            <Image src={IMGtiktok} alt="Logo TikTok" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MainSocial;
