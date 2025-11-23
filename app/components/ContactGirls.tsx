function ContactGirls() {
  return (
    <div className="contact-team-box">
      <h3 className="section_h3">Szkolenie Dziewcząt</h3>
      <div className="contact-team-detail-box">
        <h4 className="section_h4">Trzenerzy</h4>
        <ul className="contact-ul">
          <li>
            <div>
              <p>
                <span className="font-semibold opacity-80">
                  Trenerka Główna:
                </span>{" "}
                Patrycja Rybak
              </p>
              <p>
                <span className="font-semibold opacity-80">Telefon:</span> 509
                990 545
              </p>
              <p>
                <span className="font-semibold opacity-80">E-mail:</span>{" "}
                patrycja.rybak@uksrusiec.pl
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
                <span className="font-semibold opacity-80">Trener:</span> Maciej
                Kąkol
              </p>
              <p>
                <span className="font-semibold opacity-80">Telefon:</span> 695
                552 027
              </p>
              <p>
                <span className="font-semibold opacity-80">E-mail:</span>{" "}
                maciej.kakol@uksrusiec.pl
              </p>
            </div>
          </li>
          <li>
            <div>
              <p>
                <span className="font-semibold opacity-80">
                  Trener stażysta:
                </span>{" "}
                Michał Topolski
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="contact-team-detail-box">
        <h4 className="section_h4">Grupy Dziewcząt</h4>
        <ul className="contact-ul">
          <li>
            <div>
              <p>
                <span className="font-semibold opacity-80">Młodziczki</span>{" "}
                (rocznik {new Date().getFullYear() - 14} i młodsze)
              </p>
              <p>
                <span className="font-semibold opacity-80">Trenerzy:</span>{" "}
                Patrycja Rybak, Damian Tobis
              </p>
            </div>
          </li>
          <li>
            <div>
              <p>
                <span className="font-semibold opacity-80">Młodziczki U13</span>{" "}
                (rocznik {new Date().getFullYear() - 12})
              </p>
              <p>
                <span className="font-semibold opacity-80">Trenerzy:</span>{" "}
                Patrycja Rybak, Damian Tobis
              </p>
            </div>
          </li>
          <li>
            <div>
              <p>
                <span className="font-semibold opacity-80">Młodziczki U12</span>
                (rocznik {new Date().getFullYear() - 11})
              </p>
              <p>
                <span className="font-semibold opacity-80">Trenerzy:</span>{" "}
                Damian Tobis, Michał Topolski
              </p>
            </div>
          </li>
          <li>
            <div>
              <p>
                <span className="font-semibold opacity-80">Dziewczęta</span>{" "}
                (rocznik {new Date().getFullYear() - 10})
              </p>
              <p>
                <span className="font-semibold opacity-80">Trenerzy:</span>{" "}
                Maciej Kąkol
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ContactGirls;
