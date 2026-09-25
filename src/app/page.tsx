import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroSection"
import WorkoutLibrary from "@/components/WorkoutLibrary";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WorkoutLibrary />
    </main>
  );
}