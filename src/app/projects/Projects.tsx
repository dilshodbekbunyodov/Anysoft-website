"use client";
import { BaseRadioGroup } from "@/components/base-radio/BaseRadioGroup";
import React, { useState } from "react";
import { projectDetailsData, projectTypeData } from "./constants";
import ProjectVIewItem from "@/components/example-projects/ProjectVIewItem";

const Projects = () => {
  const [projectType, setProjectType] = useState<string>("all");
  const projects = Object.values(projectDetailsData);
  const filteredItems =
    projectType === "all"
      ? projects
      : projects.filter((el) => el.type === projectType);

  return (
    <div className="px-4 text-xl lg:px-8 lg:text-4xl xl:px-16 2xl:px-32">
      <BaseRadioGroup
        data={projectTypeData}
        selected={projectType}
        changeHandler={(type: string) => setProjectType(type)}
        groupName="projects"
      />
      <div className="mt-12 grid-cols-2 gap-6 xl:grid">
        {filteredItems.map((item) => (
          <ProjectVIewItem
            key={item.id}
            colSpan="col-span-1"
            href={item.href}
            name={item.name}
            brief={item.brief}
            templateMedia={item.templateMedia}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
