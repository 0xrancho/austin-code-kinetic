
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MainBackground from "../components/background/MainBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <MainBackground />
      
      {/* Content */}
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
