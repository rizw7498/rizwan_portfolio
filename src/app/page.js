import About from "@/components/Home/About";
import ContactSection from "@/components/Home/Contact";
import Education from "@/components/Home/Education";
import ExperienceSection from "@/components/Home/Experience";
import Header from "@/components/Home/Header";
import Projects from "@/components/Home/Projects";
import Skills from "@/components/Home/Skills";

export default function Home() {
  return (
   <>
    <Header/>
      <About/>
      <Education/>
      <Projects/>
      <Skills/>
      <ExperienceSection/>
      <ContactSection/>
   </>
  );
}
