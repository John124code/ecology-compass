import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import GrantsAwardsSection from "@/components/GrantsAwardsSection";
import PublicationsSection from "@/components/PublicationsSection";
import PeopleSection from "@/components/PeopleSection";
import TeachingSection from "@/components/TeachingSection";
import FieldworkSection from "@/components/FieldworkSection";
import CollaboratorsSection from "@/components/CollaboratorsSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <GrantsAwardsSection />
        <PublicationsSection />
        <PeopleSection />
        <TeachingSection />
        <FieldworkSection />
        <CollaboratorsSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
