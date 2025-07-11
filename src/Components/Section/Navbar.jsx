import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { BsSun, BsMoon } from 'react-icons/bs'

export default function MainNavbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setIsOpen(false), [location])

  const opacity = scrollY > 100 ? 0.6 : 1

  return (
    <motion.nav
      animate={{ opacity }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full flex flex-col items-center px-8 py-4 bg-white dark:bg-[#0c1322] shadow-md z-50 backdrop-blur-md border-b-3 border-black dark:border-white"
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/Chirag_3d_Avtar1.png"
            alt="Logo"
            className="w-11 h-11 rounded-full object-cover"
          />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Chirag
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center justify-center w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-600 p-1"
            layout
            transition={{ type: 'spring', stiffness: 700, damping: 30 }}
          >
            <motion.div
              className="w-5 h-5 rounded-full bg-white dark:bg-black flex items-center justify-center text-yellow-500 dark:text-yellow-300"
              layout
            >
              {darkMode ? <BsMoon size={14} /> : <BsSun size={14} />}
            </motion.div>
          </motion.button>

          <div
            className="md:hidden z-50 flex flex-col justify-center space-y-1 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-0.5 bg-black dark:bg-white"></div>
            <div className="w-6 h-0.5 bg-black dark:bg-white"></div>
            <div className="w-6 h-0.5 bg-black dark:bg-white"></div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full flex flex-col bg-white dark:bg-gray-900 shadow-md md:hidden overflow-hidden mt-4 rounded-md"
          >
            {navLinks.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
