"use client";
import Experiences from "@/components/Experiences";
import Whoami from "@/components/Whoami";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Hamburger from "@/components/Hamburger";

export default function Home() {
  return (
    <>
      <Hamburger />
      <Whoami />
      <About />
      <Experiences />
      <Skills />
      <Footer />
    </>
  );
}
