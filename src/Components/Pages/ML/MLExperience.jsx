import React from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt } from 'react-icons/fa'

export default function MLExperience() {
  const experiences = [
    {
      title: 'PCB Defect Detection Project',
      company: 'Research Project, University',
      period: 'Jan 2024 - May 2024',
      description:
        'Designed a deep learning pipeline using CNNs & OpenCV for defect detection in PCB manufacturing.'
    },
    {
      title: 'Image Forgery Detection',
      company: 'Independent Research',
      period: 'Sept 2023 - Dec 2023',
      description:
        'Developed a hybrid ViT model for detecting & localizing tampered image regions with CASIA dataset.'
    },
    {
      title: 'Visual Search & Retrieval',
      company: 'Satellite Imagery Research',
      period: 'Feb 2024 - Present',
      description:
        'Created intelligent visual search & retrieval systems for satellite data using NLP & DL pipelines.'
    }
  ]

  return (
    <div className="w-full mt-30">
      <h2 className="text-3xl font-bold text-yellow-600 dark:text-green-400 mb-8 text-center">
        ML Experience
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
