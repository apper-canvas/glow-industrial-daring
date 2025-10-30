import React from "react";
import HeroSection from "@/components/organisms/HeroSection";
import ServicesOverview from "@/components/organisms/ServicesOverview";
import CompanyHighlights from "@/components/organisms/CompanyHighlights";
import ContactCTA from "@/components/organisms/ContactCTA";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <CompanyHighlights />
      <ContactCTA />
    </div>
  );
};

export default Home;