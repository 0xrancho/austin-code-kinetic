import { Github, Linkedin, Twitter, Youtube, Link as LinkIcon } from 'lucide-react';

interface LinkItem {
  id: number;
  title: string;
  url: string;
  icon: React.ReactNode;
}

const links: LinkItem[] = [
  {
    id: 1,
    title: "LinkedIn",
    url: "https://linkedin.com/",
    icon: <Linkedin className="h-5 w-5" />
  },
  {
    id: 2,
    title: "Twitter",
    url: "https://twitter.com/",
    icon: <Twitter className="h-5 w-5" />
  },
  {
    id: 3,
    title: "GitHub",
    url: "https://github.com/",
    icon: <Github className="h-5 w-5" />
  },
  {
    id: 4,
    title: "YouTube",
    url: "https://youtube.com/",
    icon: <Youtube className="h-5 w-5" />
  },
  {
    id: 5,
    title: "Personal Blog",
    url: "https://blog.example.com/",
    icon: <LinkIcon className="h-5 w-5" />
  }
];

const Links = () => {
  return (
    <section id="links" className="py-20 relative">
      <div className="w-full relative z-10">
        <div className="content-box w-full mx-auto p-12 md:p-16">
          <h2 className="section-title">
            Connect With Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {links.map(link => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-black/80 border border-white/20 rounded-lg hover:bg-black/90 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex-shrink-0 mr-4 bg-white/10 rounded-full p-3">
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium">{link.title}</h3>
                  <p className="text-white/60 text-sm truncate">{link.url}</p>
                </div>
                <div className="ml-auto">
                  <svg 
                    className="h-4 w-4 text-white/40" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Links;
