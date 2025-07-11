import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  const location = useLocation()
  const path = location.pathname

  let bgClass = ''
  let homePath = '/'

  if (path.startsWith('/web')) {
    bgClass = 'from-indigo-50 to-blue-100 dark:from-indigo-900 dark:to-blue-950'
    homePath = '/web'
  } else if (path.startsWith('/ml')) {
    bgClass = 'from-yellow-50 to-green-100 dark:from-yellow-900 dark:to-green-950'
    homePath = '/ml'
  } else {
    bgClass = 'from-indigo-50 to-teal-100 dark:from-indigo-950 dark:to-teal-900'
    homePath = '/'
  }

  return (
    <section
      className={`flex flex-col justify-center items-center h-screen bg-gradient-to-r ${bgClass} px-4`}
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-7xl font-extrabold text-indigo-600 dark:text-yellow-400 mb-4"
      >
        404
      </motion.h1>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col md:flex-row items-center gap-4 mb-6"
      >
        <img
          src="/Sad_Avtar.png"
          alt="Chirag's Avatar"
          className="w-24 h-24 rounded-full border-4 border-indigo-600 dark:border-yellow-400 shadow-lg"
        />
        <p className="text-xl text-gray-800 dark:text-gray-200 text-center md:text-left">
          Oops! The page{' '}
          <span className="font-mono text-indigo-700 dark:text-yellow-300">
            "{path}"
          </span>{' '}
          doesn’t exist.
        </p>
      </motion.div>

      <Link
        to={homePath}
        className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
      >
        Go back Home
      </Link>
    </section>
  )
}
