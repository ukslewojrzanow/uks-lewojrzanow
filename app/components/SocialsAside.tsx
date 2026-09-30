import Link from "next/link";

import FadeDelay from "../UI/FadeDelay";

import Calendar from "./Calendar";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

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
              href="https://www.facebook.com/people/UKS-LEW-Ojrzan%C3%B3w/61580468030071/"
              target="_blank"
              title="Odwiedź nasz FaceBook"
            >
              <FaFacebook />
            </Link>
          </li>
        </FadeDelay>
        <FadeDelay>
          <li>
            <Link
              href="https://www.instagram.com/ukslewojrzanow/"
              target="_blank"
              title="Odwiedź nasz Instagram"
            >
              <RiInstagramFill />
            </Link>
          </li>
        </FadeDelay>
        {/* <FadeDelay>
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
        </FadeDelay> */}
      </ul>
    </div>
  );
}

export default SocialsAside;
