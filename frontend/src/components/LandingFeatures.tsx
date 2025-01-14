import { BookText, Edit3, Calendar, Save, Lock, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

const LandingFeatures = () => {
  return (
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
            Convert your Markdown notes to clean HTML for sharing or publishing.
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
  );
};

export default LandingFeatures;
