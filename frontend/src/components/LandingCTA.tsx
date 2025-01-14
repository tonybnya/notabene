import { Button } from "@/components/ui/button";

const LandingCTA = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="bg-secondary/10 rounded-2xl p-12 text-center max-w-3xl mx-auto border border-secondary/20">
        <h2 className="text-3xl font-bold mb-4 text-primary">
          Start taking better notes today
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join thousands of users who have already transformed their note-taking
          experience.
        </p>
        <Button size="lg" className="px-8 bg-primary hover:bg-primary/90">
          <a href="/signup" target="_blank">
            Create Your Free Account
          </a>
        </Button>
      </div>
    </div>
  );
};

export default LandingCTA;
