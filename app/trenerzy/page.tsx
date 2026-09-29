import KVdruzyny from "@/public/bg-teams.jpg";
import FadeIn from "../UI/FadeIn";
import Image from "next/image";
import MainSocial from "../components/MainSocial";
import MainPartners from "../components/MainPartners";

export const metadata = {
  title: "Trenerzy",
};

function page() {
  return (
    <>
      <FadeIn>
        <section className="grid justify-center gap-8 items-center page_teams overflow-hidden relative">
          <h1 className="text-center">Trenerzy</h1>
          <Image
            src={KVdruzyny}
            alt="Drużyny zespołu UKS Ojrzanów"
            fill
            className="object-cover object-top -z-10 "
          />
        </section>
      </FadeIn>

      <MainPartners />

      <section className="section_div">
        <FadeIn>
          <div className="container">
            <h2 className="section_h2">Trenerzy Lwa</h2>
            <div className="trainer-box">
              <h3 className="section_h3">
                <span className="trainerName">Michał Topolski</span> - trener
                piłki ręcznej
              </h3>
              <p>
                Michał Topolski to trener piłki ręcznej posiadający{" "}
                <span className="font-semibold">licencję trenerską C</span>,
                zaangażowany w szkolenie i rozwój młodych zawodników.
              </p>
              <p>
                W swojej pracy stawia na{" "}
                <span className="font-semibold">
                  systematyczny rozwój umiejętności technicznych, budowanie
                  świadomości boiskowej oraz współpracę zespołową
                </span>
                . Ważnym elementem jego podejścia jest tworzenie dobrej
                atmosfery, w której młodzi zawodnicy mogą rozwijać swoje
                sportowe umiejętności, a jednocześnie czerpać radość z gry w
                piłkę ręczną.
              </p>
              <p>
                Jako trener zwraca uwagę nie tylko na wynik sportowy, ale
                również na{" "}
                <span className="font-semibold">
                  zaangażowanie, dyscyplinę, wzajemny szacunek i budowanie
                  zespołu
                </span>
                . Jego celem jest stopniowe przygotowywanie zawodników do
                rywalizacji sportowej oraz dalszego rozwoju na kolejnych etapach
                szkolenia.
              </p>
            </div>

            <div className="trainer-box">
              <h3 className="section_h3">
                <span className="trainerName">Daniel Śliwiński</span> - trener
                piłki ręcznej
              </h3>
              <p>
                Daniel Śliwiński - trener piłki ręcznej, działacz sportowy oraz{" "}
                <span className="font-semibold">Prezes UKS Lew Ojrzanów</span>,
                aktywnie zaangażowany w rozwój i popularyzację piłki ręcznej
                wśród dzieci i młodzieży.
              </p>
              <p>
                Jako trener pracuje przede wszystkim z{" "}
                <span className="font-semibold">najmłodszymi zawodnikami</span>,
                koncentrując się na nauce podstaw piłki ręcznej, rozwoju
                sprawności ogólnej oraz budowaniu pozytywnych nawyków
                sportowych. W swojej pracy stawia na{" "}
                <span className="font-semibold">
                  radość z gry, zaangażowanie, współpracę zespołową i stopniowy
                  rozwój każdego zawodnika
                </span>
                .
              </p>
              <p>
                Prowadzi również zajęcia w ramach ogólnopolskiego programu{" "}
                <span className="font-semibold">„Gramy w Ręczną”</span>,
                skierowanego do dzieci rozpoczynających swoją przygodę z piłką
                ręczną.
              </p>
              <p>
                Jako Prezes UKS Lew Ojrzanów odpowiada za rozwój organizacyjny i
                sportowy klubu, współpracę z trenerami i partnerami oraz
                tworzenie warunków do systematycznego szkolenia kolejnych grup
                młodych zawodników.
              </p>
              <p>
                Łączy doświadczenie trenerskie z kompetencjami menedżerskimi.
                Ukończył studia podyplomowe na kierunku{" "}
                <span className="font-semibold">Menadżer Sportu</span>,
                wykorzystując wiedzę z zakresu zarządzania również w codziennym
                funkcjonowaniu i rozwoju klubu.
              </p>
              <p>
                W pracy z młodymi zawodnikami kieruje się zasadą, że{" "}
                <span className="font-semibold">
                  wynik jest ważny, ale najważniejsze jest stworzenie
                  środowiska, w którym dzieci chcą trenować, rozwijać się i
                  czerpać satysfakcję ze sportu
                </span>
                .
              </p>
            </div>

            <div className="trainer-box">
              <h3 className="section_h3">
                <span className="trainerName">Damian Sikorski</span> - trener
                piłki ręcznej
              </h3>
              <p>
                Zaangażowany trener piłki ręcznej z ogromną pasją do szkolenia
                dzieci i młodzieży. Swoją przygodę ze szczypiorniakiem
                rozpoczynał na parkietach wielkopolskich klubów, gdzie{" "}
                <span className="font-semibold">
                  przez lata jako zawodnik zdobywał cenne szlify
                </span>
                , budował sportowy charakter i uczył się dyscypliny, która do
                dziś procentuje w jego pracy.
              </p>
              <p>
                Instruktor piłki ręcznej legitymujący się{" "}
                <span className="font-semibold">
                  licencją trenerską typu „C” wydaną przez Związek Piłki Ręcznej
                  w Polsce
                </span>
                , poświęca się pracy szkoleniowej, przekazując swoją wiedzę i
                miłość do sportu najmłodszym adeptom.
              </p>
              <p>
                W swoim podejściu trenerskim kładzie nacisk nie tylko na naukę
                techniki czy taktyki, ale przede wszystkim na indywidualne
                podejście do zawodnika, dobrą atmosferę oraz tworzenie warunków
                sprzyjających rozwojowi.{" "}
                <span className="font-semibold">
                  Z zaangażowaniem podchodzi do rozwoju lokalnych inicjatyw
                  sportowych
                </span>
                , tworząc dla dzieci i młodzieży przestrzeń do bezpiecznego i
                profesjonalnego treningu.
              </p>
              <p>
                Swoje doświadczenie rozwija także poprzez współpracę z Kadrą
                Wojewódzką Młodzików Warszawsko-Mazowieckiego Związku Piłki
                Ręcznej, gdzie uczestniczy w pracy sztabu szkoleniowego jako
                trener współpracujący.
              </p>
            </div>

            <div className="trainer-box">
              <h3 className="section_h3">
                <span className="trainerName">Piotr Końko</span> - trener piłki
                ręcznej <br></br>i specjalista przygotowania motorycznego
              </h3>
              <p>
                Piotr Końko to trener piłki ręcznej oraz specjalista
                przygotowania motorycznego, od lat związany ze szkoleniem dzieci
                i młodzieży.
              </p>
              <p>
                Obecnie pełni funkcję{" "}
                <span className="font-semibold">
                  trenera głównego Kadry Wojewódzkiej Chłopców rocznika 2012
                  Warszawsko-Mazowieckiego Związku Piłki Ręcznej
                </span>
                . Jest również związany z projektem Akademii Piłki Ręcznej
                Związku Piłki Ręcznej w Polsce, gdzie pracuje jako Koordynator
                krajowy odpowiedzialny za obszar przygotowania motorycznego.
              </p>
              <p>
                Swoje doświadczenie rozwija także poza piłką ręczną.
                <span className="font-semibold">
                  Współpracował przy projektach Polskiego Związku Piłki Nożnej
                </span>
                , takich jak Akademia Młodych Orłów, Talent Pro oraz
                reprezentacja U16 Future, a także był członkiem sztabu
                szkoleniowego Akademii Rakowa Częstochowa.
              </p>
              <p>
                <span className="font-semibold">
                  Pełnił również funkcję Head of Performance Akademii Cracovii
                </span>
                , odpowiadając za kompleksowe podejście do przygotowania
                motorycznego, monitorowania obciążeń i gotowości zawodników oraz
                rozwój standardów szkoleniowych.
              </p>
              <p>
                W swojej pracy trenerskiej{" "}
                <span className="font-semibold">
                  szczególną uwagę zwraca na długofalowy i świadomy rozwój
                  młodych zawodników
                </span>
                , łącząc szkolenie techniczno-taktyczne z nowoczesnym podejściem
                do przygotowania motorycznego.
              </p>
              <p>
                Piotr Końko regularnie rozwija swoje kompetencje poprzez udział
                w specjalistycznych kursach, szkoleniach i konferencjach, a
                swoją wiedzą dzieli się również jako prelegent podczas wydarzeń
                poświęconych piłce ręcznej i przygotowaniu motorycznemu.
              </p>
            </div>

            <div className="trainer-box">
              <h3 className="section_h3">
                <span className="trainerName">Dariusz Stefański</span> - trener
                piłki ręcznej
              </h3>
              <p>
                Dariusz Stefański to{" "}
                <span className="font-semibold">
                  początkujący trener piłki ręcznej
                </span>
                , który swoją przygodę ze szkoleniem młodych zawodników
                rozpoczyna w{" "}
                <span className="font-semibold">UKS Lew Ojrzanów</span>.
              </p>
              <p>
                Z klubem związany jest nie tylko jako trener, ale również jako
                <span className="font-semibold">
                  tata jednego z naszych zawodników
                </span>
                . Dzięki temu doskonale zna klub od środka i rozumie zarówno
                perspektywę dzieci, jak i rodziców.
              </p>
              <p>
                Choć dopiero zdobywa doświadczenie trenerskie, wnosi do zespołu
                coś niezwykle ważnego -{" "}
                <span className="font-semibold">
                  dużo zaangażowania, cierpliwości i przede wszystkim serce do
                  pracy z dziećmi
                </span>
                . Chce rozwijać swoje umiejętności i wspólnie z pozostałymi
                trenerami tworzyć miejsce, w którym najmłodsi mogą uczyć się
                piłki ręcznej w dobrej i przyjaznej atmosferze.
              </p>
              <p>
                W swojej pracy stawia na{" "}
                <span className="font-semibold">
                  radość ze sportu, budowanie pewności siebie, współpracę i
                  indywidualne podejście do każdego dziecka
                </span>
                .
              </p>
              <p>
                Dla Dariusza trening to nie tylko nauka piłki ręcznej - to także
                możliwość wspierania dzieci w ich rozwoju i zaszczepiania w nich{" "}
                <span className="font-semibold">pasji do sportu i drużyny</span>
                .
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
      <MainSocial />
    </>
  );
}

export default page;
