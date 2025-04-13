
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Links from "../components/Links";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Links />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
