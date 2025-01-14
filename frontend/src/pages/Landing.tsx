import { BookText, Edit3, Calendar, Save, Lock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <BookText className="h-12 w-12 text-primary" />
            <span className="text-4xl font-bold ml-2 text-primary">
              Notabene
            </span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight">
            Your thoughts, beautifully organized
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
              className="px-8 border-primary text-primary hover:bg-primary/10"
            >
              <a href="/docs" target="_blank">
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-16 text-primary">
          Everything you need in a note-taking app
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow border-secondary/20">
            <Edit3 className="h-8 w-8 text-primary mx-auto" />
            <h3 className="text-xl font-semibold text-primary">
              Rich Markdown Support
            </h3>
            <p className="text-muted-foreground">
              Write in Markdown and see your notes transform into beautifully
              formatted content.
            </p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow border-secondary/20">
            <Save className="h-8 w-8 text-primary mx-auto" />
            <h3 className="text-xl font-semibold text-primary">
              Auto-Save & Sync
            </h3>
            <p className="text-muted-foreground">
              Your notes are automatically saved and synced across all your
              devices.
            </p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow border-secondary/20">
            <Lock className="h-8 w-8 text-primary mx-auto" />
            <h3 className="text-xl font-semibold text-primary">
              Secure by Design
            </h3>
            <p className="text-muted-foreground">
              Your notes are protected with enterprise-grade security and
              encryption.
            </p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow border-secondary/20">
            <Calendar className="h-8 w-8 text-primary mx-auto" />
            <h3 className="text-xl font-semibold text-primary">
              Timestamp Tracking
            </h3>
            <p className="text-muted-foreground">
              Keep track of when your notes were created and last modified.
            </p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow border-secondary/20">
            <FileText className="h-8 w-8 text-primary mx-auto" />
            <h3 className="text-xl font-semibold text-primary">HTML Export</h3>
            <p className="text-muted-foreground">
              Convert your Markdown notes to clean HTML for sharing or
              publishing.
            </p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow border-secondary/20">
            <BookText className="h-8 w-8 text-primary mx-auto" />
            <h3 className="text-xl font-semibold text-primary">
              Organized Collections
            </h3>
            <p className="text-muted-foreground">
              Keep your notes organized with custom collections and tags.
            </p>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="bg-secondary/10 rounded-2xl p-12 text-center max-w-3xl mx-auto border border-secondary/20">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Start taking better notes today
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of users who have already transformed their
            note-taking experience.
          </p>
          <Button size="lg" className="px-8 bg-primary hover:bg-primary/90">
            Create Your Free Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
