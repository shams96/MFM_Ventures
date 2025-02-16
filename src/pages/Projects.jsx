import React from 'react';
    import ProjectCard from '../components/ProjectCard';
    import { projectsData } from '../data';

    function Projects() {
      return (
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-container">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      );
    }

    export default Projects;
