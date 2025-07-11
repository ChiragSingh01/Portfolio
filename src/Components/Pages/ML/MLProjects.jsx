import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { mlProjects } from './MLProjects.js'

export default function MLProjects() {
  return (
    <div className="w-full mt-30">
      <h2 className="text-3xl font-bold text-yellow-600 dark:text-green-400 mb-8 text-center">
        ML Projects
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mlProjects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-yellow-600 dark:text-green-400 mb-2">
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
                to={`/ml/projects/${project.id}`}
                className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-600 transition"
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
