import React from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-8">
      <h2 className="text-xl font-semibold mb-4">作品集</h2>
      <div className="grid gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
