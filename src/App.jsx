import { useState } from "react";
import "./index.css";
import { LoadingScreen } from "./components/Loading";
import { Navbar } from "./components/navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/home";
import { AboutMe } from "./components/sections/about";
import { Projects } from "./components/sections/projects";
import { ContactMe } from "./components/sections/contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Home />
        <AboutMe />
        <Projects />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
