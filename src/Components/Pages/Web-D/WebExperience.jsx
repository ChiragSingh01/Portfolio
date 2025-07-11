import React from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt } from 'react-icons/fa'

export default function WebExperience() {
  const experiences = [
    {
      title: 'Frontend Developer, Astitva NGO',
      company: 'NGO Volunteer',
      period: 'Aug 2023 - Present',
      description:
        'Built & maintain the official website for Astitva NGO, improving their outreach & online donations.'
    },
    {
      title: 'Freelance Developer',
      company: 'Self-Employed',
      period: 'Jan 2023 - May 2023',
      description:
        'Designed custom websites for local businesses & startups using React, Tailwind, Firebase.'
    },
    {
      title: 'Portfolio Project',
      company: 'Personal Project',
      period: 'Ongoing',
      description:
        'Created a modern, interactive portfolio to showcase my work, integrating animations & dynamic content.'
    }
  ]

  return (
    <div className="w-full mt-30">
      <h2 className="text-3xl font-bold text-indigo-700 dark:text-yellow-400 mb-8 text-center">
        Web Development Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">{exp.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{exp.company}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
              <FaCalendarAlt />
              <span>{exp.period}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-200">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
