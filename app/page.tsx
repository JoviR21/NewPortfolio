import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import Service from "@/components/ServiceList";

export default function Home() {
  
  return (
    <main className="container bg-background mx-auto md:px-20">
      <Hero />
      <Service />
      <FeaturedProjects />
    </main>
  );
}
