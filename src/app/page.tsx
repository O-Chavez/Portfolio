import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Hero } from "@/components/sections/Hero";
import { Impact } from "@/components/sections/Impact";
import { MoreWork } from "@/components/sections/MoreWork";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeaturedWork />
        <Impact />
        <Experience />
        <MoreWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
