import { BookText } from "lucide-react";
import { Button } from "@/components/ui/button";

const LandingHero = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <BookText className="h-12 w-12 text-primary" />
          <span className="text-4xl font-bold ml-2 text-primary">Notabene</span>
        </div>
        <h1 className="text-5xl font-bold tracking-tight">
          Your thoughts, beautifully organized.
        </h1>
        <p className="text-xl text-muted-foreground">
          A modern note-taking app that helps you capture, organize, and share
          your ideas with Markdown support and seamless synchronization.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button size="lg" className="px-8 bg-primary hover:bg-primary/90">
            <a href="/notes" target="_blank">
              Get Started
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 border-primary text-primary hover:bg-primary/10 hover:text-primary"
          >
            <a href="/docs" target="_blank">
              Learn More
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
