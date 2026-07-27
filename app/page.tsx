import NavBar from "@/src/nav"
import Hero from "@/src/hero"
import Bio from "@/src/bio"
import Work from "@/src/work"
import Skills from "@/src/skils"
import { Project } from "@/src/project"
import Contact from "@/src/contact"

export default function MainPage() {
    return (
      <>
         <NavBar />
         <Hero />
         <Bio />
         <Work /> 
         <Skills />
         <Project />
         <Contact />
      </>
    )
}