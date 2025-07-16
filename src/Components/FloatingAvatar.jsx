import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

export default function FloatingAvatar({
  from,
  section,
  theme = 'web',
  visitorName = ''
}) {
  const isHome = !section

  const dragTip = isHome && window.innerWidth < 1200 ? " (Tip: You can drag me if I block any content!)" : ""

  const generalGreeting =
    from === 'ml'
      ? `You will be redirected to my Machine Learning portfolio in a few seconds${visitorName ? `, ${visitorName}` : ''}!${dragTip}`
      : from === 'web'
      ? `You will be redirected to my Web Development portfolio in a few seconds${visitorName ? `, ${visitorName}` : ''}!${dragTip}`
      : `You can choose which side of me you want to explore${visitorName ? `, ${visitorName}` : ''}.${dragTip}`

  const sectionMessages = {
    about: `This is about me${visitorName ? `, ${visitorName}` : ''}.`,
    skills: `Here's my tech stack${visitorName ? `, ${visitorName}` : ''}.`,
    projects: `These are my projects${visitorName ? `, ${visitorName}` : ''}.| You can click on a card to see full details.`,
    experience: `Check my experience${visitorName ? `, ${visitorName}` : ''}!`,
    education: `My education journey${visitorName ? `, ${visitorName}` : ''}.`,
    contact: `Let’s get in touch${visitorName ? `, ${visitorName}` : ''}!| You can directly mail me by filling the form.`
  }

  const text = section ? sectionMessages[section] || '' : generalGreeting
  const [part1, part2] = text.split('|', 2)

  const [showFirst, setShowFirst] = useState(false)
  const [showSecond, setShowSecond] = useState(false)
  const [showBubble, setShowBubble] = useState(true)

  // ✅ Check if device is mobile/tablet
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200)

    useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setShowFirst(true)
    setShowSecond(false)
    setShowBubble(true)

    let timer1, timer2, timer3

    if (part2 && part2.trim()) {
      timer1 = setTimeout(() => setShowFirst(false), part1.length * 50 + 1000)
      timer2 = setTimeout(() => setShowSecond(true), part1.length * 50 + 1300)
    }

    timer3 = setTimeout(
      () => setShowBubble(false),
      (part1.length + (part2 ? part2.length : 0)) * 50 + 2000
    )

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [section, part1, part2])

  return (
    <motion.div
      drag={isMobile}
      dragMomentum={false}
      dragConstraints={{
        left: 0,
        right: 0,
        top: -window.innerHeight * 0.8,
        bottom: 0
      }}
      className="fixed bottom-6 left-6 z-50 flex flex-row items-center space-x-3 sm:space-x-4"
    >
      <motion.img
        src="/Chirag_3d_Avtar.png"
        alt="Assistant"
        className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 ${
          theme === 'web'
            ? 'border-indigo-700 dark:border-yellow-400'
            : 'border-yellow-600 dark:border-green-400'
        } shadow-lg`}
        initial={{ y: 20, opacity: 0 }}
        animate={{ opacity: 1, y: -10 }}
      />

      <AnimatePresence mode="wait">
        {text && showBubble && (
          <motion.div
            key={section || 'general'}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 text-black dark:text-white px-3 py-2 rounded-xl shadow-md max-w-xs sm:max-w-sm md:max-w-md text-sm sm:text-base md:text-lg"
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
    </motion.div>
  )
}
