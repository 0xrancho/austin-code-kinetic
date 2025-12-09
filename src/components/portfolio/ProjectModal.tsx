
import React from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import type { Project } from '../../data/projects';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Split the details by newline characters to create paragraphs
  const paragraphs = project.details.split('\n\n');
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-black/90 border border-white/20 rounded-lg p-6 max-w-2xl w-full shadow-xl text-white relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full bg-white/10 hover:bg-white/20"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="mb-6 w-full aspect-video overflow-hidden rounded-md">
          <img 
            src={project.images[0]} 
            alt={project.title} 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <h2 className="text-3xl font-bold mb-3">{project.title}</h2>
        
        <div className="mb-6 text-white/80">
          {paragraphs.map((paragraph, index) => (
            <p 
              key={index} 
              className={`${paragraph.startsWith('•') ? 'pl-5' : ''} mb-4`}
            >
              {paragraph}
            </p>
          ))}
        </div>
        
        {project.techStack && (
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">Tech Stack:</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="inline-block px-3 py-1 text-sm bg-white/10 rounded-md text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex justify-end gap-3 mt-8">
          {project.link && !project.link.includes('example.com') && (
            <Button
              className="brand-button"
              asChild
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </Button>
          )}
          <Button
            variant="outline"
            className="bg-transparent border border-white/40 hover:bg-white/10"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
