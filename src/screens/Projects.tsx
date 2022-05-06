import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";
import markdownScreenShot from "../assets/markdownScreenShot.png";
import CountryFinderScreenShot from "../assets/CountryFinderScreenShot.png";
import APSScreenShot from "../assets/APSScreenShot.png";
import DOMEScreenShot from "../assets/DOMEScreenShot.png";
type ProjectsProps = {
  theme: boolean;
  toggleTheme: () => void;
};

type ProjectType = {
  id: number;
  name: string;
  description: string;
  github: string;
  livePreview: string;
  screenshot: string;
};

const projects: ProjectType[] = [
  {
    id: 1,
    name: "Markdown Editor",
    description:
      "MarkDown Editor is a fullstack web application for creating, editing and saving markdowns with live preview.",
    github: "https://github.com/IslemMedjahdi/markdown-editor",
    livePreview: "https://markdown-editor-islemmedjahdi.vercel.app/",
    screenshot: markdownScreenShot,
  },
  {
    id: 2,
    name: "Country Finder",
    description:
      "Country finder A website that allows you to browse the countries of the world with all the necessary information about the country with advanced search features",
    github: "https://github.com/IslemMedjahdi/Country-finder",
    livePreview: "https://country-finder-medjahdi.netlify.app/",
    screenshot: CountryFinderScreenShot,
  },
  {
    id: 3,
    name: "APS: The art of problem solving",
    description:
      "APS: THE ART OF PROBLEM SOLVING is a website for the ESMS event of the CSE club.",
    github: "https://github.com/IslemMedjahdi/ESMS12-APS-website",
    livePreview: "https://aps-esms12.netlify.app/",
    screenshot: APSScreenShot,
  },
  {
    id: 4,
    name: "DOME: todo app",
    description:
      "DOME is a TODO App that allows the user to add, delete and reorder the tasks of the todo list using drag and drop.",
    github: "https://github.com/IslemMedjahdi/Do-Me-Todo-App",
    livePreview: "https://dome-todoapp.netlify.app/",
    screenshot: DOMEScreenShot,
  },
];
export default function Projects({ theme, toggleTheme }: ProjectsProps) {
  return (
    <div className={`${theme ? "dark" : ""}`}>
      <div className="relative flex h-screen flex-col items-center overflow-x-hidden bg-gray-50 transition dark:bg-[#111827]">
        <div className="absolute right-20 top-20 h-44 w-72 -rotate-[14deg] rounded-lg bg-blue-400 opacity-25 blur-3xl" />
        <div className="absolute left-20 bottom-1/3 h-44 w-52  -rotate-12 rounded-md bg-blue-400 opacity-25 blur-3xl" />
        <Header />
        <main className="container mt-16 mb-[20vh] flex max-w-4xl flex-col items-start justify-center px-10">
          <h1 className="font-Space text-4xl font-bold  text-gray-600 dark:text-white md:text-5xl">
            Projects 💡
          </h1>
          <p className="mt-5 font-Space text-gray-600 dark:text-gray-50">
            Some things i've been working on in the past few years:
          </p>
          <div>
            {projects.map((project, index) => (
              <Project index={index} key={project.id} {...project} />
            ))}
          </div>
        </main>
        <Footer location={1} theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}