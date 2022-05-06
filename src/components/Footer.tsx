import { AiFillHome } from "react-icons/ai";
import { BsLightbulbFill, BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

type FooterProps = {
  location: number;
  theme: boolean;
  toggleTheme: () => void;
};

export default function Footer({ theme, location, toggleTheme }: FooterProps) {
  return (
    <div className="fixed top-[87vh] z-50 flex  max-w-xs items-center space-x-3 rounded-xl bg-white drop-shadow-lg dark:border-[1px] dark:border-[#374151] dark:bg-gray-900  sm:max-w-xl">
      <div className="flex items-center space-x-3 overflow-x-auto py-2 pl-5 scrollbar-none">
        <Link
          to={"/"}
          className={`flex transition hover:opacity-80 ${
            location === 0 ? "bg-blue-500" : "bg-gray-100 dark:bg-gray-800"
          } ${
            location === 1 || location === 0 ? "scale-110" : "scale-95"
          } cursor-pointer items-center justify-center rounded-xl p-2  transition duration-200 hover:scale-110 hover:opacity-80`}
        >
          <AiFillHome
            className={`h-7 w-7  ${
              location === 0 ? "text-white" : "text-gray-600"
            } dark:text-white`}
          />
        </Link>
        <Link
          to={"/projects"}
          className={`flex ${
            location === 1 ? "bg-blue-500" : "bg-gray-100 dark:bg-gray-800"
          } ${
            location === 1 || location === 0 || location === 2
              ? "scale-110"
              : "scale-95"
          } cursor-pointer items-center justify-center rounded-xl p-2  transition duration-200 hover:scale-110 hover:opacity-80`}
        >
          <BsLightbulbFill
            className={`h-7 w-7 ${
              location === 1 ? "text-white" : "text-gray-600"
            } dark:text-white`}
          />
        </Link>
        <Link
          to={"/about"}
          className={`flex ${
            location === 2 ? "bg-blue-500" : "bg-gray-100 dark:bg-gray-800"
          } ${
            location === 2 || location === 3 || location === 1
              ? "scale-110"
              : "scale-95"
          } cursor-pointer items-center justify-center rounded-xl p-2  transition duration-200 hover:scale-110 hover:opacity-80`}
        >
          {" "}
          <CgProfile
            className={`h-7 w-7 ${
              location === 2 ? "text-white" : "text-gray-600"
            } dark:text-white`}
          />
        </Link>
        <div
          className={`flex ${
            location === 3 ? "bg-blue-500" : "bg-gray-100 dark:bg-gray-800"
          } ${
            location === 3 || location === 4 || location === 2
              ? "scale-110"
              : "scale-95"
          } cursor-pointer items-center justify-center rounded-xl p-2  transition duration-200 hover:scale-110 hover:opacity-80`}
        >
          <AiFillHome
            className={`h-7 w-7 ${
              location === 3 ? "text-white" : "text-gray-600"
            } dark:text-white`}
          />
        </div>
        <div
          className={`flex ${
            location === 4 ? "bg-blue-500" : "bg-gray-100 dark:bg-gray-800"
          } ${
            location === 4 || location === 3 || location === 5
              ? "scale-110"
              : "scale-95"
          } cursor-pointer items-center justify-center rounded-xl p-2  transition duration-200 hover:scale-110 hover:opacity-80`}
        >
          {" "}
          <AiFillHome
            className={`h-7 w-7 ${
              location === 4 ? "text-white" : "text-gray-600"
            } dark:text-white`}
          />{" "}
        </div>
        <div
          className={`flex ${
            location === 5 ? "bg-blue-500" : "bg-gray-100 dark:bg-gray-800"
          } ${
            location === 5 || location === 6 || location === 4
              ? "scale-110"
              : "scale-95"
          } cursor-pointer items-center justify-center rounded-xl p-2  transition duration-200 hover:scale-110 hover:opacity-80`}
        >
          {" "}
          <AiFillHome
            className={`h-7 w-7 ${
              location === 5 ? "text-white" : "text-gray-600"
            } dark:text-white`}
          />{" "}
        </div>
        <div
          className={`flex ${
            location === 6 ? "bg-blue-500" : "bg-gray-100 dark:bg-gray-800"
          } ${
            location === 6 || location === 5 || location === 7
              ? "scale-110"
              : "scale-95"
          } cursor-pointer items-center justify-center rounded-xl p-2  transition duration-200 hover:scale-110 hover:opacity-80`}
        >
          <AiFillHome
            className={`h-7 w-7 ${
              location === 6 ? "text-white" : "text-gray-600"
            } dark:text-white`}
          />
        </div>
        <div
          className={`flex ${
            location === 7 ? "bg-blue-500" : "bg-gray-100 dark:bg-gray-800"
          } ${
            location === 7 || location === 6 || location === 8
              ? "scale-110"
              : "scale-95"
          } cursor-pointer items-center justify-center rounded-xl p-2  transition duration-200 hover:scale-110 hover:opacity-80`}
        >
          {" "}
          <AiFillHome
            className={`h-7 w-7 ${
              location === 7 ? "text-white" : "text-gray-600"
            } dark:text-white`}
          />{" "}
        </div>
      </div>
      <div className="py-2 pr-5">
        <div className="h-4/5 w-px bg-gray-600" />
        <div
          onClick={toggleTheme}
          className={`flex scale-105
          cursor-pointer items-center justify-center rounded-xl bg-gray-100 p-2  transition duration-200 hover:opacity-80 active:scale-95 dark:bg-gray-800`}
        >
          {theme ? (
            <BsFillMoonFill className="h-7 w-7 text-white" />
          ) : (
            <BsSunFill className="h-7 w-7 text-gray-600 " />
          )}
        </div>
      </div>
    </div>
  );
}