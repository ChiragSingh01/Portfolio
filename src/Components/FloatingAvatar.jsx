import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

export default function FloatingAvatar({ from, section, theme = 'web', visitorName = '' }) {
  // ✅ 1) General welcome based on `from`
  const generalGreeting =
    from === 'ml'
      ? `You will be redirected to my Machine Learning portfolio in few seconds${visitorName ? `, ${visitorName}` : ''}!`
      : from === 'web'
      ? `You will be redirected to my Web Development portfolio in few seconds${visitorName ? `, ${visitorName}` : ''}!`
      : `You can choose which side of me you want to explore${visitorName ? `, ${visitorName}` : ''}.`

  // ✅ 2) Section-specific messages
  const sectionMessages = {
    about: `This is about me${visitorName ? `, ${visitorName}` : ''}.`,
    skills: `Here's my tech stack${visitorName ? `, ${visitorName}` : ''}.`,
    projects: `These are my projects${visitorName ? `, ${visitorName}` : ''}.| You can click on a card to see full details.`,
    experience: `Check my experience${visitorName ? `, ${visitorName}` : ''}!`,
    education: `My education journey${visitorName ? `, ${visitorName}` : ''}.`,
    contact: `Let’s get in touch${visitorName ? `, ${visitorName}` : ''}!| You can directly mail me by filling the form.`
  }

  // ✅ Final text: pick section OR fallback to general
  const text = section ? sectionMessages[section] || '' : generalGreeting
  const [part1, part2] = text.split('|', 2)

  const [showFirst, setShowFirst] = useState(false)
  const [showSecond, setShowSecond] = useState(false)

  useEffect(() => {
    setShowFirst(true)
    setShowSecond(false)

    let timer1, timer2

    if (part2 && part2.trim()) {
      timer1 = setTimeout(() => setShowFirst(false), part1.length * 50 + 1000)
      timer2 = setTimeout(() => setShowSecond(true), part1.length * 50 + 1300)
    }

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [section, part1, part2])

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col items-start">
      <div className="relative flex flex-col items-center">
        <motion.img
          src="/Chirag_3d_Avtar.png"
          alt="Assistant"
          className={`w-16 h-16 rounded-full border-2 ${
            theme === 'web' ? 'border-indigo-700' : 'border-yellow-600'
          } shadow-lg`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ opacity: 1, y: -10 }}
        />

        <AnimatePresence mode="wait">
          {text && (
            <motion.div
              key={section || 'general'}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: -70 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="absolute top-full left-20 -right-70 bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-2 rounded-xl shadow-md max-w-xs break-words"
            >
              <AnimatePresence mode="wait">
                {showFirst && (
                  <motion.div
                    key="part1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Typewriter
                      words={[part1.trim()]}
                      typeSpeed={40}
                      cursor
                      cursorStyle=""
                    />
                  </motion.div>
                )}

                {showSecond && part2 && (
                  <motion.div
                    key="part2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Typewriter
                      words={[part2.trim()]}
                      typeSpeed={40}
                      cursor
                      cursorStyle=""
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
