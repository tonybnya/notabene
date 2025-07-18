import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ClerkProviderWithRoutes from "./auth/ClerkProviderWithRoutes";
import App from "./App.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProviderWithRoutes>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProviderWithRoutes>
  </StrictMode>,
);
