import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function MLFooter() {
  return (
    <footer className="w-full py-12 flex flex-col items-center bg-gradient-to-r from-yellow-500 to-green-400 dark:from-yellow-700 dark:to-green-700">
      <h2 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-4 text-center">
        Curious about my Web Development projects too?
      </h2>
      <Link to="/web">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-black text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition dark:bg-white dark:text-green-700"
        >
          Explore Web Development
        </motion.button>
      </Link>
    </footer>
  )
}
