
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Links from "../components/Links";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MainBackground from "../components/background/MainBackground";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden texture-bg">
      {/* Background visual elements */}
      <MainBackground />
      
      {/* Content */}
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
