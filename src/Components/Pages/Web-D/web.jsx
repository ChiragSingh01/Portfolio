import React, { useState, useEffect, useRef } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { useLocation } from 'react-router-dom'
import WebProjects from './WebProjects.jsx'
import WebSkills from './WebSkills'
import WebExperience from './WebExperience'
import WebAbout from './WebAbout'
import WebContact from './WebContact'
import WebFooter from './WebFooter'
import Education from '../../Section/Education'
import FloatingAvatar from '../../FloatingAvatar'

export default function Web({visitorName}) {
  const [activeSection, setActiveSection] = useState('home')

  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const experienceRef = useRef(null)
  const educationRef = useRef(null)
  const contactRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
      if (location.hash === '#projects' && projectsRef.current) {
        projectsRef.current.scrollIntoView({block: 'center'})
      }
    }, [location])

  useEffect(() => {
    const options = {
      threshold: 0.5, // % visible before triggering
      // rootMargin: '0px 0px -50% 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.dataset.section)
        }
      })
    }, options)

    // Attach observer to sections
    ;[aboutRef, skillsRef, projectsRef, experienceRef, educationRef, contactRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-50 to-blue-100 dark:from-blue-950 dark:to-black px-4 py-20 mt-10">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Avatar */}
        <img
          src="/Chirag_3d_Avtar.png"
          alt="Chirag's Avatar"
          className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-lg"
        />

        {/* Greeting */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center md:text-left">
          <Typewriter
            words={[
              'Welcome to the world of Web Development!',
              'Let’s craft beautiful, functional websites together.'
            ]}
            loop={0}
            cursor
            cursorStyle=""
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>
      </div>

      {/* Content placeholder */}
      <div className="mt-10 max-w-3xl text-center md:text-left">
        <p className="text-sm sm:text-lg text-gray-700 dark:text-gray-300 mb-4">
          Hi, I’m Chirag — a web developer passionate about creating responsive, engaging, and user-friendly websites.
        </p>
        <p className="text-sm sm:text-lg text-gray-700 dark:text-gray-300 mb-8">
          Scroll down to see my skills, experience, and web projects!
        </p>
      </div>
      <div className='w-full'>

        <section ref={aboutRef} id='about' data-section="about"><WebAbout/></section>
        <section ref={skillsRef} id='skills' data-section="skills"><WebSkills/></section>
        <section ref={projectsRef} id='projects' data-section="projects"><WebProjects/></section>
        <section ref={experienceRef} id='experience' data-section="experience"><WebExperience/></section>
        <section ref={educationRef} id='education' data-section="education"><Education theme="web" /></section>
        <section ref={contactRef} id='contact' data-section="contact"><WebContact/></section>

        <FloatingAvatar section={activeSection} theme="web" visitorName={visitorName}/>

      </div>
      
    </section>
    <WebFooter></WebFooter>
    </>
    
  )
}
