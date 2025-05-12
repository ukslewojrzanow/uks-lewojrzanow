import IMGinsta from "@/public/instagramLogo.png";
import IMGtiktok from "@/public/tiktokLogo.png";
import IMGface from "@/public/facebookLogo.png";
import Link from "next/link";
import Image from "next/image";
import FadeDelay from "../UI/FadeDelay";

import Calendar from "./Calendar";

function SocialsAside() {
  return (
    <div className="socials_aside">
      <ul className="grid gap-4">
        <FadeDelay>
          <li>
            <Calendar />
          </li>
        </FadeDelay>
        <FadeDelay>
          <li>
            <Link
              href="https://www.facebook.com/profile.php?id=100063537579848"
              target="_blank"
            >
              <Image src={IMGface} alt="Logo" />
            </Link>
          </li>
        </FadeDelay>
        <FadeDelay>
          <li>
            <Link
              href="https://www.instagram.com/uks_rusiec_handball/"
              target="_blank"
            >
              <Image src={IMGinsta} alt="Logo" />
            </Link>
          </li>
        </FadeDelay>
        <FadeDelay>
          <li>
            <Link href="https://www.tiktok.com/@uks_rusiec" target="_blank">
              <Image src={IMGtiktok} alt="Logo" />
            </Link>
          </li>
        </FadeDelay>
      </ul>
    </div>
  );
}

export default SocialsAside;
