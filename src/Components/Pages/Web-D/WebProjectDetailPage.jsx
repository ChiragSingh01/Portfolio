import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetail from '../../Section/ProjectDetail';
import { projects } from './WebProjects.js'; // adjust if needed

export default function WebProjectDetailPage() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
        <a href="/web" className="text-blue-600 underline">← Back to Projects</a>
      </div>
    );
  }

  return (
    <ProjectDetail
      title={project.title}
      description={project.description}
      techStack={project.techStack}
      github={project.github}
      liveDemo={project.liveDemo}
      screenshots={project.screenshots}
      backLink={project.backLink}
      theme={project.theme}
      readme={project.readme}   // ✅ Pass the README URL here
    />
  );
}
