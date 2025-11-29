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
              title="Odwiedź nasz FaceBook"
            >
              <Image
                src={IMGface}
                alt="FaceBook Logo"
                title="Odwiedź nasz FaceBook"
              />
            </Link>
          </li>
        </FadeDelay>
        <FadeDelay>
          <li>
            <Link
              href="https://www.instagram.com/uks_rusiec_handball/"
              target="_blank"
              title="Odwiedź nasz Instagram"
            >
              <Image
                src={IMGinsta}
                alt="Instagram Logo"
                title="Odwiedź nasz Instagram"
              />
            </Link>
          </li>
        </FadeDelay>
        <FadeDelay>
          <li>
            <Link
              href="https://www.tiktok.com/@uks_rusiec"
              target="_blank"
              title="Odwiedź nasz TikTok"
            >
              <Image
                src={IMGtiktok}
                alt="TikTok Logo"
                title="Odwiedź nasz TikTok"
              />
            </Link>
          </li>
        </FadeDelay>
      </ul>
    </div>
  );
}

export default SocialsAside;
