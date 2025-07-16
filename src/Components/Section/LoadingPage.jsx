import React from 'react'
import { motion } from 'framer-motion'

export default function LoadingPage({ theme = 'web', darkMode = false }) {
  const colors = {
    web: darkMode ? 'text-yellow-400 border-yellow-400' : 'text-indigo-700 border-indigo-700',
    ml: darkMode ? 'text-green-400 border-green-400' : 'text-yellow-600 border-yellow-600',
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-white dark:bg-gray-900">
      {/* Avatar */}
      <motion.img
        src="/Chirag_3d_Avtar.png"
        alt="Loading Avatar"
        className="w-20 h-20 rounded-full mb-6 shadow-lg"
        initial={{ scale: 0.9 }}
        animate={{ scale: [0.9, 1.05, 0.9] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />

      {/* Spinner */}
      <motion.div
        className={`w-16 h-16 border-4 border-t-transparent rounded-full animate-spin ${colors[theme]}`}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      />

      {/* Message */}
      <p className={`mt-6 text-lg font-medium ${colors[theme]}`}>
        Please wait, the page is loading...
      </p>
    </div>
  )
}
