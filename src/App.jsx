import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
const App = () => {
  return (
    <div className=" min-h-screen overflow-x-hidden text-neutral-300 antialiased slection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed inset-0 z-[-1] h-full w-full">
        <div
          className="absolute top-0 z-[-2] h-screen w-screen bg-[#9461A3] 
            bg-[radial-gradient(#ffffff33_1px,#9461A3_1px)] bg-[size:20px_20px]"
        ></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
};

export default App;
