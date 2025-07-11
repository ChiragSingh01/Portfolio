import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectDetail from '../../Section/ProjectDetail'
import { mlProjects } from './MLProjects'

export default function MLProjectDetailPage() {
  const { id } = useParams()

  const project = mlProjects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
        <a href="/ml" className="text-blue-600 underline">← Back to Projects</a>
      </div>
    )
  }

  return <ProjectDetail {...project} />
}
