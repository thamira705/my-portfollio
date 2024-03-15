import React from "react";
import ProjectItem from "./ProjectItem";
import superSetImg from "../assets/superset.jpg";
import f1Img from "../assets/f1.jpg";
import lImg from "../assets/lvlUp.gg.jpg";
import contractorsImg from "../assets/ContractorPro.jpeg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
        soluta. Porro impedit temporibus sunt voluptate ullam! Quas laudantium
        molestias laboriosam accusantium, dolorum, aspernatur animi sunt cumque
        dolorem deleniti perspiciatis? Ut.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={lImg}
          title="LvlUp.gg"
          type="Full stack Application"
        />
        <ProjectItem
          img={superSetImg}
          title="SuperSet"
          type="Android Application"
        />
        <ProjectItem img={f1Img} title="F1Db + UI" type="MS SQL server" />
        <ProjectItem
          img={contractorsImg}
          title="ContractorsPro"
          type="Frontend Prototype"
        />
      </div>
    </div>
  );
};

export default Projects;
