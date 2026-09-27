import HeroAuroraGlows from "../components/hero/HeroAuroraGlows";
import HeroFloatingBadges from "../components/hero/HeroFloatingBadges";
import TypewriterHeading from "../components/hero/TypewriterHeading";
import HeroIntroCard from "../components/hero/HeroIntroCard";
import HeroPortrait from "../components/hero/HeroPortrait";
import HeroSocials from "../components/hero/HeroSocials";

function Hero() {
  return (
    <main className="relative mx-auto flex min-h-[calc(100vh-64px)] w-[calc(100%-40px)] sm:w-[calc(100%-56px)] max-w-285 flex-col justify-center py-14 pb-20 max-[1040px]:min-h-0 max-[1040px]:w-[calc(100%-32px)] max-[1040px]:max-w-212.5 max-[680px]:py-10">
      <HeroAuroraGlows />
      <HeroFloatingBadges />
      <TypewriterHeading />

      <div className="relative z-10 grid grid-cols-[1fr_1.25fr_1fr] items-center gap-11 max-[1040px]:grid-cols-2 max-[1040px]:gap-7 max-[680px]:grid-cols-1">
        <HeroIntroCard />
        <HeroPortrait />
        <HeroSocials />
      </div>
    </main>
  );
}

export default Hero;
