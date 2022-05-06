import React from "react";

type ProjectProps = {
  id?: number;
  name: string;
  description: string;
  github: string;
  livePreview: string;
  screenshot: string;
  index: number;
};

export default function Project({
  name,
  description,
  github,
  livePreview,
  screenshot,
  index,
}: ProjectProps) {
  return (
    <div className="reverse mt-6 grid items-center gap-10  md:grid-cols-2">
      <div className="flex flex-col items-start">
        <h2 className="font-Space text-2xl font-bold text-gray-700 dark:text-white">
          {name}
        </h2>
        <p className="mt-6 font-Space  text-gray-800 dark:text-gray-50">
          {description}
        </p>
        <div className="relative z-10 mt-10 transition active:scale-95">
          <div className="absolute top-0 -z-10 h-full w-full translate-x-2 -translate-y-2 rounded-md border-2 border-blue-600 "></div>
          <button
            onClick={() => window.open(github, "_blank")}
            className="rounded-md bg-blue-600 px-8  py-2 font-Space text-gray-50 transition duration-300 hover:bg-blue-500 active:scale-95"
          >
            View Project
          </button>
        </div>
      </div>
      <div
        onClick={() => {
          window.open(livePreview, "_blank");
        }}
        className={`group relative -order-1 cursor-pointer overflow-hidden  md:p-5 ${
          index % 2 === 0 ? "md:order-none" : "md:-order-1"
        } `}
      >
        <img
          className="pointer-events-none h-full w-full rounded-2xl border-2 border-blue-500 object-cover shadow-lg transition duration-300 group-hover:scale-105"
          src={screenshot}
          alt="screenshot"
        />
      </div>
    </div>
  );
}