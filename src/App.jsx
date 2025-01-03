import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Features from "./components/Features/Features.jsx";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />

      <Hero />

      <About />

      <Features />
    </main>
  );
};

export default App;
