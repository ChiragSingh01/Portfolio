import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa'

export default function Education({ theme = 'web' }) {
  const education = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Delhi Technological University (DTU)',
      period: '2021 - 2025',
      description: 'CGPA: 7.79'
    },
    {
      degree: 'Senior Secondary (12th)',
      institution: 'Hans Raj Samarak Ser. Sec. School, CBSE Board',
      period: '2019 - 2020',
      description: 'Percentage: 80%'
    },
    {
      degree: 'Secondary (10th)',
      institution: 'Nav Jeevan Adarsh Public School, CBSE Board',
      period: '2017 - 2018',
      description: 'Percentage: 82%'
    }
  ]

  return (
    <div className="w-full mt-16 max-w-3xl mx-auto text-center">
      <h2
        className={`text-3xl font-bold ${
          theme === 'web' ? 'text-indigo-700 dark:text-yellow-400' : 'text-yellow-600 dark:text-green-400'
        } mb-8`}
      >
        Education
      </h2>

      <div className="space-y-6 text-left">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1 flex items-center gap-2">
              <FaGraduationCap /> {edu.degree}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.institution}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
              <FaCalendarAlt /> <span>{edu.period}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-200">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
