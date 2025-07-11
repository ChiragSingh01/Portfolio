import React, { useState, useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import FloatingAvatar from '../../FloatingAvatar'

export default function Home({ visitorName = '' }) {
  const [showProfile, setShowProfile] = useState(false)
  const [flipped, setFlipped] = useState(false)
  const [redirectTarget, setRedirectTarget] = useState(null)
  const [showRedirectMessage, setShowRedirectMessage] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from

  // ✅ Auto redirect if redirected from Intro
  useEffect(() => {
    if (from === 'web' || from === 'ml') {
      setRedirectTarget(from)

      const redirectTimer = setTimeout(() => {
        navigate(`/${from}`)
      }, 8000)

      const speechTimer = setTimeout(() => {
        setShowRedirectMessage(true)
      }, 4500)

      return () => {
        clearTimeout(redirectTimer)
        clearTimeout(speechTimer)
      }
    }
  }, [from, navigate])

  // ✅ Show profile after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProfile(true)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-indigo-500 to-teal-400 dark:from-indigo-950 dark:to-teal-900 px-4">
      {/* Flip container */}
      <div className="relative w-40 h-40 mb-6 perspective">
        <AnimatePresence>
          {!showProfile && (
            <motion.span
              key="wave"
              initial={{ rotate: 0, opacity: 1 }}
              animate={{
                rotate: [0, 20, -20, 20, 0],
                transition: { repeat: Infinity, duration: 2 }
              }}
              exit={{ opacity: 0, scale: 0, rotate: 0 }}
              className="absolute inset-0 text-[10rem] flex items-center justify-center"
            >
              👋
            </motion.span>
          )}

          {showProfile && (
            <motion.div
              key="flip"
              className="relative w-full h-full"
              onClick={() => setFlipped(!flipped)}
            >
              <motion.div
                className="absolute w-full h-full rounded-full border-4 border-blue-500 shadow-lg [transform-style:preserve-3d]"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Front side - Real photo */}
                <img
                  src="/Chirag.JPG"
                  alt="Profile"
                  className="absolute w-full h-full rounded-full object-cover backface-hidden"
                />

                {/* Back side - Avatar */}
                <img
                  src="/Chirag_3d_Avtar.png"
                  alt="Avatar"
                  className="absolute w-full h-full rounded-full object-cover [transform:rotateY(180deg)] backface-hidden"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ✅ Avatar speech bubble for redirect */}
      {redirectTarget && showRedirectMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white text-black px-4 py-2 rounded-full shadow-md mb-6"
        >
          👋 Hey, I’m sending you to{' '}
          <span className="font-semibold">
            {redirectTarget === 'web' ? 'Web Development' : 'Machine Learning'}
          </span>{' '}
          in a few seconds!
        </motion.div>
      )}

      {/* Text */}
      <div className="text-center">
        {!showProfile && (
          <h1 className="text-5xl font-bold flex items-center justify-center gap-2 text-white">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Typewriter
                words={[`Hi${visitorName ? `, ${visitorName}` : ''}`]}
                cursor
                cursorStyle=""
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </motion.span>
          </h1>
        )}

        {showProfile && (
          <>
            <h1 className="text-3xl sm:text-5xl font-extrabold flex items-center justify-center gap-2 text-white mb-2">
              I’m{' '}
              <motion.span
                className="text-yellow-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Typewriter
                  words={['Chirag Singh']}
                  cursor
                  cursorStyle=""
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={3000}
                />
              </motion.span>
            </h1>
            <h2 className="text-2xl text-white mb-4">
              Web Developer | ML Researcher | B.Tech IT @ DTU
            </h2>
            {redirectTarget &&(
              <p className="text-lg text-white mb-6 max-w-xl">
                I design modern websites and build intelligent ML systems. <br />
                Click my photo to flip between real & avatar.
              </p>
            )}

            {!redirectTarget && (
              <>
                <p className="text-lg text-white mb-6 max-w-xl">
                  I design modern websites and build intelligent ML systems. <br />
                  Click my photo to flip between real & avatar — then choose where you’d like to go!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/web"
                    className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                  >
                    Explore Web Development
                  </Link>
                  <Link
                    to="/ml"
                    className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
                  >
                    Explore Machine Learning
                  </Link>
                </div>
              </>
            )}
          </>
        )}
      </div>
      <FloatingAvatar from = {from} visitorName={visitorName}/>
    </section>
  )
}
