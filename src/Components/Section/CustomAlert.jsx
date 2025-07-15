import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CustomAlert({ isOpen, onClose, isSuccess, message, avatar }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed inset-0 backdrop-blur-xl flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={avatar}
              alt="Avatar"
              className="w-16 h-16 mx-auto rounded-full border-4 border-current mb-4"
            />
            <h3
              className={`text-xl font-bold mb-2 ${
                isSuccess ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              }`}
            >
              {isSuccess ? 'Message Sent!' : 'Oops!'}
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">{message}</p>
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-full ${
                isSuccess
                  ? 'bg-green-600 dark:bg-green-400 text-white'
                  : 'bg-red-600 dark:bg-red-400 text-white'
              } hover:opacity-90`}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
