import FadeIn from "./UI/FadeIn";
import MainHero from "./components/MainHero";
import MainPartners from "./components/MainPartners";
import MainNews from "./components/MainNews";
import MainTeams from "./components/MainTeams";
import MainContact from "./components/MainContact";
import MainSocial from "./components/MainSocial";

export default function Home() {
  return (
    <>
      <FadeIn>
        <MainHero />
      </FadeIn>

      <MainPartners />

      <MainNews />

      <MainTeams />

      <MainContact />

      <MainSocial />
    </>
  );
}
