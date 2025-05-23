import { BookText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-secondary/20 w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="flex max-lg:flex-col gap-4 justify-between items-center">
          <a href="/" className="flex items-center">
            <BookText className="h-6 w-6 text-primary" />
            <span className="ml-2 font-semibold text-primary">Notabene</span>
          </a>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Notabene. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
