import Header from "../components/Header";

export default function Home() {
  return (
    <div className="dark">
      <div className="h-screen flex items-center flex-col relative bg-gray-50 dark:bg-[#111827] overflow-x-hidden">
        <div className="h-44 w-72 absolute blur-3xl opacity-25 right-20 top-20 rounded-lg -rotate-[14deg] bg-blue-400" />
        <div className="h-44 w-52 rounded-md absolute blur-3xl  opacity-25 left-20 bottom-1/3 -rotate-12 bg-blue-400" />
        <Header />
        <main className="flex px-10 flex-col container items-start justify-center min-h-[80vh]">
          <div>
            <h1 className="dark:text-gray-50 font-Space text-4xl md:text-5xl leading-relaxed md:leading-relaxed  text-gray-600 font-bold">
              Hello!👋🏻 <br />
              My name is Islem
              <br />
              I'm a{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90.2deg, #3B82F6 63.77%, #EC4899 83.43%, #3B82F6 99.94%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Front-end Developer
              </span>
            </h1>
          </div>
          <div>
            <p className="dark:text-gray-50 text-gray-600 font-Space">
              Let me help you grow your business and make your product look
              pretty while at it
            </p>
          </div>
          <div className="relative mt-10 z-10">
            <div className="absolute w-full -z-10 h-full top-0 translate-x-2 -translate-y-2 rounded-md border-2 border-blue-600"></div>
            <button className="font-Space duration-300 hover:bg-blue-500 text-gray-50 bg-blue-600 px-8 py-2 rounded-md">
              Say Hello
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
