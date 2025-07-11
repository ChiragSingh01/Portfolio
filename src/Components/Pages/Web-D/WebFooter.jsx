import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function WebFooter() {
  return (
    <footer className="w-full py-12 flex flex-col items-center bg-gradient-to-r from-indigo-500 to-teal-400 dark:from-indigo-950 dark:to-teal-900">
      <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 text-center">
        Want to see my Machine Learning projects too?
      </h2>
      <Link to="/ml">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Explore Machine Learning
        </motion.button>
      </Link>
    </footer>
  )
}
