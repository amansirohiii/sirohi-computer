import Hero from "@/components/Hero";
import {HeroScrollDemo} from "@/components/Certificate";
import Courses from "@/components/Courses";
import { HeroParallaxDemo } from "@/components/HeroDemo";
import { InfiniteMovingCardsDemo } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="">

      <HeroParallaxDemo/>
      {/* <NavbarDemo/> */}
      <Hero/>
    <Courses/>
    <HeroScrollDemo/>
    <InfiniteMovingCardsDemo/>

    </main>
  );
}
