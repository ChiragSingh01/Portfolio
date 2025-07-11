import React from 'react'
import { motion } from 'framer-motion'

export default function MLAbout() {
  return (
    <div className="w-full mt-16 max-w-3xl mx-auto text-center">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition"
      >
        <img
          src="/Chirag.JPG"
          alt="Chirag Profile"
          className="w-24 h-24 mx-auto rounded-full border-4 border-yellow-500 shadow mb-4"
        />
        <h2 className="text-3xl font-bold text-yellow-600 dark:text-green-400 mb-4">
          About Me — ML Engineer
        </h2>
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
          Hello, I’m Chirag Singh — an aspiring Machine Learning engineer with a deep curiosity for intelligent systems.
          I love working at the intersection of data, deep learning, and computer vision to solve real-world problems like forgery detection and visual search.
          I believe in building AI that is explainable, ethical, and impactful.
        </p>
      </motion.div>
    </div>
  )
}
