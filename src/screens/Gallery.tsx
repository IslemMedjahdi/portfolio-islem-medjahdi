import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import { Helmet } from "react-helmet";

type GalleryProps = {
  theme: boolean;
  toggleTheme: () => void;
};

const photos = [
  {
    id: 1,
    src: img1,
    alt: "img",
  },
  {
    alt: "img",
    id: 2,
    src: img3,
  },
  {
    alt: "img",
    id: 3,
    src: img4,
  },
  {
    alt: "img",
    id: 4,
    src: img6,
  },
  {
    alt: "img",
    id: 5,
    src: img5,
  },
  {
    alt: "img",
    id: 6,
    src: img2,
  },
  {
    alt: "img",
    id: 7,
    src: img7,
  },
  {
    alt: "img",
    id: 8,
    src: img8,
  },
  {
    alt: "img",
    id: 9,
    src: img9,
  },
  {
    alt: "img",
    id: 10,
    src: img10,
  },
];

export default function Gallery({ theme, toggleTheme }: GalleryProps) {
  return (
    <div className={`${theme ? "dark" : ""}`}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio | Medjahdi | Gallery</title>
      </Helmet>
      <div className="relative flex h-screen flex-col items-center overflow-x-hidden bg-gray-50 transition scrollbar-thin scrollbar-track-gray-50 scrollbar-thumb-gray-300 dark:bg-[#111827] dark:scrollbar-thumb-gray-800 dark:scrollbar-track-gray-900">
        <Header />
        <main className="container mt-12 mb-[25vh] flex max-w-4xl flex-col items-start justify-center px-10">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-Space text-4xl font-bold  text-gray-600 dark:text-white md:text-5xl"
          >
            Gallery 📸
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mt-5 font-Space text-gray-600 dark:text-gray-50"
          >
            I'm sharing with you one of my best moments. Drag to see the full
            picture
          </motion.p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-10 self-center justify-self-center">
            {photos.map((photo, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                key={photo.id}
              >
                <motion.img
                  drag
                  alt={photo.alt}
                  dragConstraints={{ bottom: 0, left: 0, right: 0, top: 0 }}
                  whileDrag={{ scale: 3 }}
                  className="h-36 w-auto cursor-grab overflow-hidden rounded-lg border-2 border-gray-500 object-cover shadow-lg  dark:border-gray-300"
                  src={photo.src}
                />
              </motion.div>
            ))}
          </div>
        </main>
        <Footer theme={theme} toggleTheme={toggleTheme} location={5} />
      </div>
    </div>
  );
}
