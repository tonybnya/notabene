import { BookText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const LandingHero = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <BookText className="h-12 w-12 text-primary" />
          <span className="text-4xl font-bold ml-2 text-primary">Notabene</span>
        </div>

        {/* Heading & Description */}
        <h1 className="text-5xl font-bold tracking-tight">
          Your thoughts, beautifully organized.
        </h1>
        <p className="text-xl text-muted-foreground">
          A modern note-taking app that helps you capture, organize, and share
          your ideas with Markdown support and seamless synchronization.
        </p>

        {/* Call To Action */}
        <div className="flex gap-4 justify-center pt-4">
          {/* Show this if user is NOT signed in */}
          <SignedOut>
            <Button
              size="lg"
              className="px-8 bg-primary hover:bg-primary/90"
              asChild
            >
              <Link to="/sign-up">Get Started</Link>
            </Button>
          </SignedOut>

          {/* Show this if user IS signed in */}
          <SignedIn>
            <Button
              size="lg"
              className="px-8 bg-primary hover:bg-primary/90"
              asChild
            >
              <Link to="/dashboard">Go to Dashboard</Link>
            </Button>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
