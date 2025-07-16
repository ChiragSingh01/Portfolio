import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { useNavigate } from 'react-router-dom'

export default function Intro({ to, setVisitorName }) {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [showInput, setShowInput] = useState(false)
  const [showPersonalized, setShowPersonalized] = useState(false)
  const [showStartButton, setShowStartButton] = useState(false)
  const [slideToCorner, setSlideToCorner] = useState(false)
  const [showCornerMessage, setShowCornerMessage] = useState(false)
  const [showBackdrop, setShowBackdrop] = useState(true)
  const [goto, setGoto] = useState('this')

  useEffect(() => {
    if (to === 'web') {
      setGoto('my Web Development')
    } else if (to === 'ml') {
      setGoto('my Machine Learning')
    } else {
      setGoto('this')
    }
  }, [to])

  const navigate = useNavigate()

  useEffect(() => {
    if (step === 1) {
      const t = setTimeout(() => setStep(2), 2000)
      return () => clearTimeout(t)
    }
    if (step === 2) {
      const t = setTimeout(() => {
        setShowInput(true)
      }, 3000)
      return () => clearTimeout(t)
    }
  }, [step])

  const handleNameSubmit = () => {
    const trimmedName = name.trim()
    setVisitorName(trimmedName)
    setShowPersonalized(true)
    setShowInput(false)
    setStep(3)

    setTimeout(() => {
      setShowStartButton(true)
    }, 4000)
  }

  const handleStart = () => {
    setSlideToCorner(true)

    setTimeout(() => {
      setShowBackdrop(false)
    }, 500)

    setTimeout(() => {
      setShowCornerMessage(true)
    }, 1000)

    setTimeout(() => {
      if (to === 'web' || to === 'ml') {
        navigate('/MainHome', { state: { from: `${to}` } })
      } else {
        navigate('/MainHome')
      }
    }, 3000)
  }

  return (
    <div className="h-screen relative bg-gradient-to-r from-indigo-500 to-teal-400 dark:from-indigo-950 dark:to-teal-900">
      {/* ✅ Backdrop */}
      <AnimatePresence>
        {showBackdrop && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* ✅ Avatar */}
      <motion.div
        initial={{
          position: 'fixed',
          top: '25%',
          left: '50%',
          x: '-50%',
          y: '-50%',
          width: 128,
          height: 128
        }}
        animate={
          slideToCorner
            ? {
                top: 'auto',
                right: 'auto',
                bottom: '2rem',
                left: '2rem',
                x: 0,
                y: 0,
                width: 64,
                height: 64
              }
            : {}
        }
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="rounded-full overflow-hidden border-2 border-indigo-700 shadow-xl z-[100]"
      >
        <img
          src="/Chirag_3d_Avtar.png"
          alt="Assistant"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* ✅ Corner message */}
      {showCornerMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: -30 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-28 bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-2 rounded-xl shadow-md z-[100] text-sm md:text-base"
        >
          You can find me here!
        </motion.div>
      )}

      {/* ✅ Steps */}
      {!slideToCorner && (
        <motion.div className="fixed inset-0 flex flex-col items-center justify-center z-[95] px-4">
          {step === 1 && (
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-4 text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Typewriter words={["Hi! I’m Chirag's assistant."]} typeSpeed={30} cursor />
            </motion.h2>
          )}

          {step === 2 && (
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-4 text-center max-w-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Typewriter
                words={[
                  "Tell me your name so I can interact with you better, or leave it blank and submit."
                ]}
                typeSpeed={30}
                cursor
              />
            </motion.h2>
          )}

          {showInput && !showPersonalized && (
            <div className="flex flex-col items-center w-full max-w-sm">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="px-4 py-2 rounded-md text-black dark:text-white w-full mb-4"
              />
              <button
                onClick={handleNameSubmit}
                className="bg-indigo-600 text-white px-6 py-2 rounded-md w-full sm:w-auto"
              >
                Submit
              </button>
            </div>
          )}

          {showPersonalized && (
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-4 text-center max-w-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Typewriter
                words={[
                  `${name && name.trim() ? `Hi ${name.trim()}!` : ''} I’ll help you navigate ${goto} portfolio and show you how to interact with each element. Shall we start?`
                ]}
                typeSpeed={30}
                cursor
              />
            </motion.h2>
          )}

          {showStartButton && (
            <button
              onClick={handleStart}
              className="bg-green-600 text-white px-6 py-2 rounded-md mt-4 text-base sm:text-lg md:text-xl"
            >
              Yes
            </button>
          )}
        </motion.div>
      )}
    </div>
  )
}
