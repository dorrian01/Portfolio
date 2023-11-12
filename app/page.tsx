import About from "@/components/About";
import Intro from "@/components/Intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider />
      <About />
      <Projects/>
    </main>
  )
}
