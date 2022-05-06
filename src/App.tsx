import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./screens/About";
import Home from "./screens/Home";
import Projects from "./screens/Projects";

function App() {
  const [theme, setTheme] = useState<boolean>(false);
  const toggleTheme = (): void => {
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
