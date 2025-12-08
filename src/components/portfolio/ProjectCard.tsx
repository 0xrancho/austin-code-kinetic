
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <Card 
      className="cursor-pointer bg-black/90 border border-white/20 text-white overflow-hidden transition-transform hover:scale-105"
      onClick={() => onClick(project)}
    >
      <div className="w-full aspect-video overflow-hidden">
        {project.images.length === 1 ? (
          <img 
            src={project.images[0]} 
            alt={project.title} 
            className="w-full h-full object-cover object-top" 
          />
        ) : (
          <div className="grid grid-cols-2 gap-1 w-full h-full">
            {project.images.slice(0, 2).map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`${project.title} ${index + 1}`} 
                className="w-full h-full object-cover object-top" 
              />
            ))}
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="text-white/70">{project.description}</p>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
