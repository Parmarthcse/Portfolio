import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

import { FaHome } from "react-icons/fa";
import Clients from "../components/Clients";
import Experince from "@/components/Experince";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <main className="relative bg-black-100 flex justify-center items-center
   flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <h1></h1>
      <FloatingNav navItems={navItems}/>
      <Hero />
      <Grid />
      <RecentProjects />
      <Clients />
      <Experince />
      <Approach />
      <Footer />
      
    </div>
  </main>
  
  
  )
}