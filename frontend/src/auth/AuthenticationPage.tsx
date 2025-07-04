import { useLocation } from "react-router-dom";
import { SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";

const AuthenticationPage = () => {
  const location = useLocation();
  const isSignUp = location.pathname.includes("sign-up");

  return (
    <div className="auth-container">
      <SignedOut>
        {isSignUp ? (
          <SignUp routing="path" path="/sign-up" />
        ) : (
          <SignIn routing="path" path="/sign-in" />
        )}
      </SignedOut>
      <SignedIn>
        <div className="redirect-message">
          <p>You are already signed in.</p>
        </div>
      </SignedIn>
    </div>
  );
};

export default AuthenticationPage;
