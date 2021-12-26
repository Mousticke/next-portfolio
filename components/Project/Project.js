import React from "react";
import { ProjectContainer } from "./Project.styles";
import projects from "@/config/projectData";

function Project(props, ref) {
  return (
    <ProjectContainer id={props.id} ref={ref}>
      <h1 className="title-count">Projects</h1>
    </ProjectContainer>
  );
}

export default React.forwardRef(Project);
