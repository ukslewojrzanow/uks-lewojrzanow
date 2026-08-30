import Link from "next/link";

function Footer() {
  return (
    <footer className="footer-boxes">
      <div className="container">
        <div className="footer-box">
          <div className="column">
            <p>Menu</p>
            <ul>
              <li>
                <Link href="/">Strona Główna</Link>
              </li>
              <li>
                <Link href="/aktualnosci">Aktualności</Link>
              </li>
              <li>
                <Link href="/druzyny">Drużyny</Link>
              </li>
              <li>
                <Link href="/partnerzy">Partnerzy</Link>
              </li>
              <li>
                <Link href="/kontakt">Kontakt</Link>
              </li>
              <li>
                <Link href="/kalendarz">Kalendarz</Link>
              </li>
            </ul>
          </div>
          <div className="column">
            <p>Social Media</p>
            <ul>
              <li>Facebook: UKS Lew Ojrzanów</li>
              <li>Instagram: ukslewojrzanow</li>
              {/* <li>TikTok: uks_rusiec</li> */}
            </ul>
          </div>
          <div className="column">
            <p>Dane</p>
            <ul>
              <li>biuro@ukslewojrzanow.pl</li>
              <li>ul. Szkolna 1</li>
              <li>96-321 Ojrzanów</li>
              {/* <li>NIP: 534-254-27-41</li> */}
            </ul>
          </div>
        </div>
        <div>
          <p className="footer_corpo">
            {" "}
            &copy; {new Date().getFullYear()} UKS RUSIEC{" "}
          </p>
          <p className="footer_tag">GrabCode Studio</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
