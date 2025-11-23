function ContactBoys() {
  return (
    <div className="contact-team-box">
      <h3 className="section_h3">Szkolenie Chłopców</h3>
      <div className="contact-team-detail-box">
        <h4 className="section_h4">Trzenerzy</h4>
        <ul className="contact-ul">
          <li>
            <div>
              <p>
                <span className="font-semibold opacity-80">Trener Główny:</span>{" "}
                Piotr Końko
              </p>
              <p>
                <span className="font-semibold opacity-80">Telefon:</span> 733
                503 470
              </p>
              <p>
                <span className="font-semibold opacity-80">E-mail:</span>{" "}
                piotr.konko@uksrusiec.pl
              </p>
            </div>
          </li>
          <li>
            <div>
              <p>
                <span className="font-semibold opacity-80">Trener:</span>{" "}
                Radosław Królicki
              </p>
              <p>
                <span className="font-semibold opacity-80">Telefon:</span> 533
                088 143
              </p>
              <p>
                <span className="font-semibold opacity-80">E-mail:</span>{" "}
                radoslaw.krolicki@uksrusiec.pl
              </p>
            </div>
          </li>
          <li>
            <div>
              <p>
                <span className="font-semibold opacity-80">Trener:</span> Kacper
                Szustak
              </p>
              <p>
                <span className="font-semibold opacity-80">Telefon:</span> 603
                822 346
              </p>
              <p>
                <span className="font-semibold opacity-80">E-mail:</span>{" "}
                kacper.szustak@uksrusiec.pl
              </p>
            </div>
          </li>
          <li>
            <div>
              <p>
                <span className="font-semibold opacity-80">Trenerka:</span>{" "}
                Daria Chrząszcz
              </p>
              <p>
                <span className="font-semibold opacity-80">Telefon:</span> 576
                613 001
              </p>
              <p>
                <span className="font-semibold opacity-80">E-mail:</span>{" "}
                daria.chrzaszcz@uksrusiec.pl
              </p>
            </div>
          </li>
          <li>
            <div>
              <p>
                <span className="font-semibold opacity-80">Trener:</span> Damian
                Tobis
              </p>
              <p>
                <span className="font-semibold opacity-80">Telefon:</span> 535
                230 512
              </p>
              <p>
                <span className="font-semibold opacity-80">E-mail:</span>{" "}
                damian.tobis@uksrusiec.pl
              </p>
            </div>
          </li>
          <li>
            <div>
              <p>
                <span className="font-semibold opacity-80">
                  Trener stażysta:
                </span>{" "}
                Damian Sikorski
              </p>
            </div>
          </li>
          <li>
            <div>
              <p>
                <span className="font-semibold opacity-80">
                  Trener stażysta:
                </span>{" "}
                Daniel Śliwiński
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="contact-team-detail-box">
        <h4 className="section_h4">Grupy Chłopców</h4>
        <ul className="contact-ul">
          <li>
            <div>
              <p>
                <span className="font-semibold opacity-80">
                  Juniorzy Młodsi i Młodzicy
                </span>{" "}
                (roczniki {new Date().getFullYear() - 16},{" "}
                {new Date().getFullYear() - 15}, {new Date().getFullYear() - 14}
                )
              </p>
              <p>
                <span className="font-semibold opacity-80">Trenerzy:</span>{" "}
                Piotr Końko, Kacper Szustak, Damian Sikorski
              </p>
            </div>
          </li>
          <li>
            <div>
              <p>
                <span className="font-semibold opacity-80">
                  Młodzicy młodsi
                </span>{" "}
                (rocznik {new Date().getFullYear() - 13})
              </p>
              <p>
                <span className="font-semibold opacity-80">Trenerzy:</span>{" "}
                Radosław Królicki, Kacper Szustak, Damian Sikorski
              </p>
            </div>
          </li>
          <li>
            <div>
              <p>
                <span className="font-semibold opacity-80">Młodzicy U13</span>
                (rocznik {new Date().getFullYear() - 12} i młodsi)
              </p>
              <p>
                <span className="font-semibold opacity-80">Trenerzy:</span>{" "}
                Daria Chrząszcz, Daniel Śliwiński
              </p>
            </div>
          </li>
          <li>
            <div>
              <p>
                <span className="font-semibold opacity-80">Chłopcy</span>{" "}
                (rocznik {new Date().getFullYear() - 10})
              </p>
              <p>
                <span className="font-semibold opacity-80">Trenerzy:</span>{" "}
                Damian Tobis
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ContactBoys;
