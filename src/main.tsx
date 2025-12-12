import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import ThemedApp from "./ThemedApp.tsx";
import App from "./App.tsx";
import Home from "./screens/home/Home.tsx";
import About from "./screens/about/About.tsx";
import Projects from "./screens/projects/Projects.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemedApp>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </ThemedApp>
    </BrowserRouter>
  </StrictMode>
);

