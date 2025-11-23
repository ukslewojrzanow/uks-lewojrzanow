function ContactGirls() {
  return (
    <div className="contact-team-box">
      <h3 className="section_h3">Szkolenie Dziewcząt</h3>
      <div className="contact-team-detail-box">
        <h4 className="section_h4">Trzenerzy</h4>
        <ul className="contact-ul">
          <li>
            <div>
              <p>Trenerka Główna: Patrycja Rybak</p>
              <p>Telefon: 509 990 545</p>
              <p>E-mail: patrycja.rybak@uksrusiec.pl</p>
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
              <p>Trener: Maciej Kąkol</p>
              <p>Telefon: 695 552 027</p>
              <p>E-mail: maciej.kakol@uksrusiec.pl</p>
            </div>
          </li>
          <li>
            <div>
              <p>Trener stażysta: Michał Topolski</p>
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
                Młodziczki (rocznik {new Date().getFullYear() - 14} i młodsze)
              </p>
              <p>Trenerzy: Patrycja Rybak, Damian Tobis</p>
            </div>
          </li>
          <li>
            <div>
              <p>Młodziczki U13 (rocznik {new Date().getFullYear() - 12})</p>
              <p>Trenerzy: Patrycja Rybak, Damian Tobis</p>
            </div>
          </li>
          <li>
            <div>
              <p>Młodziczki U12(rocznik {new Date().getFullYear() - 11})</p>
              <p>Trenerzy: Damian Tobis, Michał Topolski</p>
            </div>
          </li>
          <li>
            <div>
              <p>Dziewczęta (rocznik {new Date().getFullYear() - 10})</p>
              <p>Trenerzy: Maciej Kąkol</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ContactGirls;
