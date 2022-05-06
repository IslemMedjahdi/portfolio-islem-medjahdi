import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";

type ProjectsProps = {
  theme: boolean;
  toggleTheme: () => void;
};

type Project = number;

const projects: Project[] = [1, 2, 3, 4];
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
            {projects.map((project) => (
              <Project />
            ))}
          </div>
        </main>
        <Footer location={1} theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}
