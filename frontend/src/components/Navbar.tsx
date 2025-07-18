import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { BookText, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <BookText className="h-6 w-6 text-primary" />
            <span className="ml-2 font-semibold text-primary">Notabene</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <SignedOut>
              <Button
                asChild
                variant="ghost"
                className="text-white bg-primary hover:bg-primary/90"
              >
                <Link to="/sign-in">Create a note</Link>
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 hover:text-primary"
              >
                <SignInButton />
              </Button>
            </SignedOut>
            <SignedIn>
              <Button
                asChild
                variant="ghost"
                className="text-white bg-primary hover:bg-primary/90"
              >
                <Link to="/dashboard">Create a note</Link>
              </Button>
              <UserButton />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <SignedOut>
              <Button
                asChild
                variant="ghost"
                className="w-full justify-center text-white bg-primary hover:bg-primary/90"
              >
                <Link to="/sign-in">Create a note</Link>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-center border-primary text-primary hover:bg-primary/10 hover:text-primary"
              >
                <Link to="/sign-in">Login</Link>
              </Button>
            </SignedOut>
            <SignedIn>
              <Button
                asChild
                variant="ghost"
                className="w-full justify-center text-white bg-primary hover:bg-primary/90"
              >
                <Link to="/dashboard">Create a note</Link>
              </Button>
              <UserButton />
            </SignedIn>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
