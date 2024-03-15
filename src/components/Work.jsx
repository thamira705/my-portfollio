import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2024,
    title: "Sales Associate at Lens Crafters",
    duration: "currently present",
    details: "dhuahduahsdhiaufha",
  },
  {
    year: 2023,
    title:
      "Vice President of Incoming Global Talent and Coporate Relations at AIESEC MB",
    duration: "1 Year",
    details: "ndjashdashodhasifhios",
  },
  {
    year: 2024,
    title: "Incoming Global Talent team member at AIESEC MB",
    duration: "1 Year",
    details: "fhahfoahsfhasoifhiashfoiahfihoifahioa",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
