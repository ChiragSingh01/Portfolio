import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from './WebProjects.js'  // adjust path if needed

export default function WebProjects() {
  return (
    <div className='mt-30 mb-30 w-full'>
      <h2 className="text-3xl font-bold text-indigo-700 dark:text-yellow-400 mb-8 text-center">
        Web Development Projects
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-indigo-700 dark:text-yellow-400 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.shortDescription}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Tech: {project.techStack.join(', ')}
            </p>
            <div className='mt-auto flex'>
              <Link
                to={`/web/projects/${project.id}`}
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
