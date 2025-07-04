import { Navigate, Outlet } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProtectedLayout = () => {
  return (
    <>
      <SignedOut>
        <Navigate to="/sign-in" replace />
      </SignedOut>
      <SignedIn>
        <Navbar />
        <Outlet />
        <Footer />
      </SignedIn>
    </>
  );
};

export default ProtectedLayout;
