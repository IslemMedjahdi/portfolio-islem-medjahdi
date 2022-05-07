import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Gallery from "./screens/Gallery";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import { Helmet } from "react-helmet";
import Error from "./screens/Error";

function App() {
  const [theme, setTheme] = useState<boolean>(true);
  useEffect(() => {
    const themeLocal = localStorage.getItem("theme");
    if (themeLocal != null) {
      setTheme(themeLocal === "true" ? true : false);
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
      <Routes>
        <Route
          path="/"
          element={<Home theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="about"
          element={<About theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="projects"
          element={<Projects theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="gallery"
          element={<Gallery theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="contact"
          element={<Contact theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
