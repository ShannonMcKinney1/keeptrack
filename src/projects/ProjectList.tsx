import React from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';
import { useState } from 'react';



interface ProjectListProps {
  projects: Project[];
}

const handleEdit = (project: Project) => {
  console.log(project);
  //setProjectBeingEdited(project);
};

function ProjectList ({ projects }: any) {

  return (
    <div className="row">
      {projects.map((project: Project) => (
        <div key={project.id} className="cols-sm">
          {<ProjectCard project={project} onEdit={handleEdit} />}          
        </div>
      ))}
    </div>
  );
}

export default ProjectList;