import Hero from "@/components/Hero";
import App from "@/components/Navbar.jsx";
import { NavbarDemo } from "@/components/NavbarDemo";
import {HeroScrollDemo} from "@/components/Certificate";
import { CardHoverEffectDemo } from "@/components/Courses";
import { HeroParallaxDemo } from "@/components/HeroDemo";

export default function Home() {
  return (
    <main className="">
      <App/>
      <HeroParallaxDemo/>
      {/* <NavbarDemo/> */}
      <Hero/>
    <HeroScrollDemo/>
    <CardHoverEffectDemo/>
    </main>
  );
}
