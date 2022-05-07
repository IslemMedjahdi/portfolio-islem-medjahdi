import Footer from "../components/Footer";
import Header from "../components/Header";

type GalleryProps = {
  theme: boolean;
  toggleTheme: () => void;
};

export default function Gallery({ theme, toggleTheme }: GalleryProps) {
  return (
    <div className={`${theme ? "dark" : ""}`}>
      <div className="relative flex h-screen flex-col items-center overflow-x-hidden bg-gray-50 transition dark:bg-[#111827]">
        <Header />
        <main className="container mt-12 mb-[20vh] flex max-w-4xl flex-col items-start justify-center px-10">
          <h1 className="font-Space text-4xl font-bold  text-gray-600 dark:text-white md:text-5xl">
            Gallery 📸
          </h1>
          <div></div>
        </main>
        <Footer theme={theme} toggleTheme={toggleTheme} location={5} />
      </div>
    </div>
  );
}
