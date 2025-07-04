import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import AuthenticationPage from "./auth/AuthenticationPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/sign-in/*" element={<AuthenticationPage />} />
        <Route path="/sign-up/*" element={<AuthenticationPage />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
