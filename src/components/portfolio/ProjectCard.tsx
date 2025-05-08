
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
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover" 
        />
      </div>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="text-white/70">{project.description}</p>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
