function ContactBoys() {
  return (
    <div className="contact-team-box">
      <h3 className="section_h3">Szkolenie Chłopców</h3>
      <div className="contact-team-detail-box">
        <h4 className="section_h4">Trzenerzy</h4>
        <ul className="contact-ul">
          <li>
            <div>
              <p>Trener Główny: Piotr Końko</p>
              <p>Telefon: 733 503 470</p>
              <p>E-mail: piotr.konko@uksrusiec.pl</p>
            </div>
          </li>
          <li>
            <div>
              <p>Trener: Radosław Królicki</p>
              <p>Telefon: 533 088 143</p>
              <p>E-mail: radoslaw.krolicki@uksrusiec.pl</p>
            </div>
          </li>
          <li>
            <div>
              <p>Trener: Kacper Szustak</p>
              <p>Telefon: 603 822 346</p>
              <p>E-mail: kacper.szustak@uksrusiec.pl</p>
            </div>
          </li>
          <li>
            <div>
              <p>Trenerka: Daria Chrząszcz</p>
              <p>Telefon: 576 613 001</p>
              <p>E-mail: daria.chrzaszcz@uksrusiec.pl</p>
            </div>
          </li>
          <li>
            <div>
              <p>Trener: Damian Tobis</p>
              <p>Telefon: 535 230 512</p>
              <p>E-mail: damian.tobis@uksrusiec.pl</p>
            </div>
          </li>
          <li>
            <div>
              <p>Trener stażysta: Damian Sikorski</p>
            </div>
          </li>
          <li>
            <div>
              <p>Trener stażysta: Daniel Śliwiński</p>
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
                Juniorzy Młodsi i Młodzicy (roczniki{" "}
                {new Date().getFullYear() - 16}, {new Date().getFullYear() - 15}
                , {new Date().getFullYear() - 14})
              </p>
              <p>Trenerzy: Piotr Końko, Kacper Szustak, Damian Sikorski</p>
            </div>
          </li>
          <li>
            <div>
              <p>Młodzicy młodsi (rocznik {new Date().getFullYear() - 13})</p>
              <p>
                Trenerzy: Radosław Królicki, Kacper Szustak, Damian Sikorski
              </p>
            </div>
          </li>
          <li>
            <div>
              <p>
                Młodzicy U13(rocznik {new Date().getFullYear() - 12} i młodsi)
              </p>
              <p>Trenerzy: Daria Chrząszcz, Daniel Śliwiński</p>
            </div>
          </li>
          <li>
            <div>
              <p>Chłopcy (rocznik {new Date().getFullYear() - 10})</p>
              <p>Trenerzy: Damian Tobis</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ContactBoys;
