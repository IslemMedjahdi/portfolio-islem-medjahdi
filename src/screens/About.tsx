import Footer from "../components/Footer";
import Header from "../components/Header";

type AboutProps = {
  theme: boolean;
  toggleTheme: () => void;
};

export default function About({ theme, toggleTheme }: AboutProps) {
  return (
    <div className={`${theme ? "dark" : ""}`}>
      <div className=" relative  flex h-screen flex-col items-center overflow-x-hidden bg-gray-50 transition scrollbar-thin scrollbar-track-gray-50 scrollbar-thumb-gray-300 dark:bg-[#111827] dark:scrollbar-thumb-gray-800 dark:scrollbar-track-gray-900">
        <div className="absolute right-20 top-20 h-44 w-72 -rotate-[14deg] rounded-lg bg-blue-400 opacity-25 blur-3xl" />
        <div className="absolute left-20 bottom-1/3 h-44 w-52  -rotate-12 rounded-md bg-blue-400 opacity-25 blur-3xl" />
        <Header />
        <main className="container mt-16 mb-[20vh] flex max-w-4xl flex-col items-start justify-center px-10">
          <h1 className="font-Space text-4xl font-bold  text-gray-600 dark:text-white md:text-5xl">
            About Me 👨‍🎓
          </h1>
          <p className="mt-5 font-Space text-gray-600 dark:text-gray-50">
            A brief intro to who i am and how i do what i do:
          </p>
          <p className="font-space mt-10 text-gray-600 dark:text-gray-50">
            I am{" "}
            <span className="text-2xl font-bold dark:text-white">
              Islem Medjahdi
            </span>
          </p>
          <p className="mt-6 tracking-wide text-gray-600 dark:text-gray-50">
            A Front-end Developer from Algeria. I am a high school student of
            Computer Science (ESI Algiers ex.INI). I've always been fascinated
            with how things work. fast forward to 2 years into school and i'm
            now structuring,developing and implementing incredible web and
            mobile apps.
          </p>
          <p className="mt-6 tracking-wide text-gray-600 dark:text-gray-50">
            I believe i’ve got the right skills and technologies to take your
            online presence on the level it truly deserves. Your website should
            be your no1 sales agent and its works 24/7, Get a quote now that’s
            best for your business.
          </p>
          <div className="relative z-10 mt-10 transition active:scale-95">
            <div className="absolute top-0 -z-10 h-full w-full translate-x-2 -translate-y-2 rounded-md border-2 border-blue-600 "></div>
            <button className="rounded-md bg-blue-600 px-8  py-2 font-Space text-gray-50 transition duration-300 hover:bg-blue-500 active:scale-95">
              Say Hello
            </button>
          </div>
        </main>
        <Footer location={2} theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}
