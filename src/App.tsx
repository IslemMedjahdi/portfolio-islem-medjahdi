import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./screens/About";
import Home from "./screens/Home";
import Projects from "./screens/Projects";

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
    </Routes>
  );
}

export default App;
