import LandingHero from "@/components/LandingHero";
import LandingFeatures from "@/components/LandingFeatures";
import LandingCTA from "@/components/LandingCTA";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background">
      <LandingHero />
      <LandingFeatures />
      <LandingCTA />
    </div>
  );
};

export default Landing;
