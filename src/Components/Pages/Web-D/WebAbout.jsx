import React from 'react'
import { motion } from 'framer-motion'

export default function WebAbout() {
  return (
    <div className="w-full mt-30 max-w-3xl mx-auto text-center">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition"
      >
        <img
          src="/Chirag.JPG"
          alt="Chirag Profile"
          className="w-24 h-24 mx-auto rounded-full border-4 border-blue-600 shadow mb-4"
        />
        <h2 className="text-3xl font-bold text-indigo-700 dark:text-yellow-400 mb-4">
          About Me — Web Developer
        </h2>
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
          Hi, I’m Chirag Singh — a passionate web developer who loves crafting clean, responsive websites and interactive user experiences.
          From building non-profit platforms for social impact to designing modern e-commerce sites, I enjoy transforming ideas into pixel-perfect web solutions.
          My goal is to blend creativity and code to help brands and causes shine online.
        </p>
      </motion.div>
    </div>
  )
}
