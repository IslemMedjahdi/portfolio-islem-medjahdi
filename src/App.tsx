import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Gallery from "./screens/Gallery";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import { Helmet } from "react-helmet";
import Error from "./screens/Error";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState<boolean>(true);
  const [location, setLocation] = useState(0);
  const { pathname: initialLocation } = useLocation();
  useEffect(() => {
    const themeLocal = localStorage.getItem("theme");
    if (themeLocal != null) {
      setTheme(themeLocal === "true" ? true : false);
    }
  }, []);
  // initial location
  useEffect(() => {
    switch (initialLocation) {
      case "/about":
        setLocation(1);
        break;
      case "/projects":
        setLocation(2);
        break;
      case "/gallery":
        setLocation(5);
        break;
      case "/contact":
        setLocation(6);
        break;
      default:
        setLocation(0);
    }
  }, []);
  const toggleTheme = (): void => {
    localStorage.setItem("theme", theme ? "false" : "true");
    setTheme(!theme);
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio | Medjahdi </title>
      </Helmet>
      <div className={`flex w-screen justify-center ${theme ? "dark" : ""}`}>
        <Routes>
          <Route
            path="/"
            element={<Home theme={theme} setLocation={setLocation} />}
          />
          <Route path="about" element={<About theme={theme} />} />
          <Route path="projects" element={<Projects theme={theme} />} />
          <Route path="gallery" element={<Gallery theme={theme} />} />
          <Route path="contact" element={<Contact theme={theme} />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer
          location={location}
          setLocation={setLocation}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </div>
    </>
  );
}

export default App;
