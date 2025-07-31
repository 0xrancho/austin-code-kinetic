import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainBackground from "../components/background/MainBackground";
import ChatInterface from "../components/GABI/ChatInterface";

const Gabi = () => {
  return (
    <div className="min-h-screen relative">
      <MainBackground />
      <Navbar />
      <main className="relative z-10 pt-24 pb-20">
        <div className="w-full relative z-10">
          <div className="content-box w-full mx-auto p-12 md:p-16">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Chat with GABI
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
                My AI assistant is here to help you explore my work, understand my approach,
                and determine if we're a good fit for your project. Ask GABI anything!
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-border/50 p-8 shadow-xl">
                <div className="relative">
                  <div className="h-[600px]">
                    <ChatInterface />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                GABI is powered by advanced AI and trained on Joel's experience, projects, and expertise.
                <br />
                Get instant insights about potential collaborations.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gabi;