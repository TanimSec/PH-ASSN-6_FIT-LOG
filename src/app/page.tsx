import HeroSection from "@/components/HeroSection";
import WorkoutLibrary from "@/components/WorkoutLibrary";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <WorkoutLibrary />
      </main>

      <Footer />
    </>
  );
}