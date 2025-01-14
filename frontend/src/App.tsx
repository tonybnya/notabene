import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Docs from "./pages/Docs";
import Notes from "./pages/Notes";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="landing" element={<Landing />} />
            <Route path="about" element={<About />} />
            <Route path="docs" element={<Docs />} />
            <Route path="notes" element={<Notes />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
