import React from "react";
import ReactDOM from "react-dom";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectCard from "./ProjectCard";
import ProjectList from './ProjectList';

function ProjectPage(){
    return (
        <>
            <h1>Ohio State Campus Enhancement Projects</h1>
            <ProjectList projects={MOCK_PROJECTS} />
        </>
    );
}


export default ProjectPage;
