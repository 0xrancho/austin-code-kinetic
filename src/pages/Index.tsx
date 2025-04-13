
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Links from "../components/Links";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground relative">
      {/* Fixed Background Pattern Layer */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle, #6666FF 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center',
        }}
        aria-hidden="true"
      ></div>
      
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
