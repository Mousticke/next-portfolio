import React from "react";
import {
  ProjectArticle,
  ProjectButtons,
  ProjectContainer,
  ProjectDescription,
  ProjectDescriptionContainer,
  ProjectPreview,
  ProjectSection,
  ProjectSubInfoMd,
  ProjectTag,
  ProjectTags,
  ProjectTitle,
  ProjectType,
} from "./Project.styles";
import projects from "@/config/projectData";
import Image from "next/image";
import Link from "next/link";

function Project(props, ref) {
  const projectButtonComponent = (source, visit, display) => (
    <ProjectButtons className={display}>
      <Link href={source} passHref>
        <a target="_blank" rel="noopener noreferrer" aria-label="Source code">
          Source
        </a>
      </Link>
      {visit !== "" && (
        <Link href={visit}>
          <a target="_blank" rel="noopener noreferrer" aria-label="Visit Site">
            Visit
          </a>
        </Link>
      )}
    </ProjectButtons>
  );

  const projectTagsComponent = (tags, display) => (
    <ProjectTags className={display}>
      {tags.map(({ name, id }) => (
        <ProjectTag key={id}>#{name}</ProjectTag>
      ))}
    </ProjectTags>
  );

  return (
    <ProjectSection id={props.id} ref={ref}>
      <h1 className="title-count">Projects</h1>
      <ProjectContainer>
        {projects.map(
          ({ title, type, description, image, tags, source, visit, id }) => (
            <ProjectArticle key={id}>
              <ProjectTitle className="smDisplay">{title}</ProjectTitle>
              <ProjectPreview>
                <Link href={source} passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Source code"
                  >
                    <Image
                      src={image}
                      alt={`Feature project ${title}`}
                      layout="responsive"
                      loading="lazy"
                      width={800}
                      height={500}
                    />
                  </a>
                </Link>
              </ProjectPreview>
              <ProjectDescriptionContainer>
                <ProjectType className="mdDisplay">{type}</ProjectType>
                <ProjectTitle className="mdDisplay">
                  <Link href={source} passHref>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Source code"
                    >
                      {title}
                    </a>
                  </Link>
                </ProjectTitle>
                <ProjectDescription>
                  <p>{description}</p>
                  {projectTagsComponent(tags, "mdDisplay")}
                  {projectButtonComponent(source, visit, "mdDisplay")}
                </ProjectDescription>
              </ProjectDescriptionContainer>
              {projectButtonComponent(source, visit, "smDisplay")}
              {projectTagsComponent(tags, "smDisplay")}
            </ProjectArticle>
          ),
        )}
      </ProjectContainer>
    </ProjectSection>
  );
}

export default React.forwardRef(Project);
