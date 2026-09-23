import Navigation from "@/app/components/Navigation";
import Hero from "@/app/components/Hero";
import TeamSection from "@/app/components/TeamSection";
import CapabilitySection from "@/app/components/CapabilitySection";
import ApproachSection from "@/app/components/ApproachSection";
import WorkSection from "@/app/components/WorkSection";
import CollaborationSection from "@/app/components/CollaborationSection";
import ExploreSection from "@/app/components/ExploreSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TeamSection />
        <CapabilitySection />
        <ApproachSection />
        <WorkSection />
        <CollaborationSection />
        <ExploreSection />
      </main>
    </>
  );
}
