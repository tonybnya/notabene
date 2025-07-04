import { Button } from "@/components/ui/button";
import { SignedOut, SignedIn } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const LandingCTA = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="bg-secondary/10 rounded-2xl p-12 text-center max-w-3xl mx-auto border border-secondary/20 shadow-2xl">
        <h2 className="text-3xl font-bold mb-4 text-primary">
          Start taking better notes today
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join thousands of users who have already transformed their note-taking
          experience.
        </p>

        {/* Show CTA to sign up only if user is signed out */}
        <SignedOut>
          <Button
            size="lg"
            className="px-8 bg-primary hover:bg-primary/90 min-w-[16rem]"
            asChild
          >
            <Link to="/sign-up">Create Your Free Account</Link>
          </Button>
        </SignedOut>

        {/* Optionally show something else if already signed in */}
        <SignedIn>
          <p className="text-green-600 font-semibold">
            You're already signed in! 🎉
          </p>
        </SignedIn>
      </div>
    </div>
  );
};

export default LandingCTA;
