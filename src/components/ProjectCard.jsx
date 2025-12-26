import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-medium">{project.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-200">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end space-y-2">
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline">示範</a>
          ) : (
            <span className="text-sm text-gray-400">示範：—</span>
          )}
          {project.repo ? (
            <a href={project.repo} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline">程式碼</a>
          ) : (
            <span className="text-sm text-gray-400">程式碼：—</span>
          )}
        </div>
      </div>
    </div>
  );
}
