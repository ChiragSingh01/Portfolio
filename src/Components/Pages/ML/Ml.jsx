import React, { useState, useEffect, useRef } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { useLocation } from 'react-router-dom'
import MLProjects from './MLProjects.jsx'
import MLSkills from './MlSkills'
import MLExperience from './MLExperience'
import MLAbout from './MLAbout'
import MLContact from './MLContact'
import MLFooter from './MLFooter'
import Education from '../../Section/Education'
import FloatingAvatar from '../../FloatingAvatar'

export default function ML( {visitorName} ) {
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
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-yellow-50 to-green-100 dark:from-yellow-900 dark:to-green-950 px-4 py-20 mt-10">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Avatar */}
        <img
          src="/Chirag_3d_Avtar.png"
          alt="Chirag's Avatar"
          className="w-32 h-32 rounded-full border-4 border-yellow-500 shadow-lg"
        />

        {/* Greeting */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center md:text-left">
          <Typewriter
            words={[
              'Welcome to the world of Machine Learning!',
              'Let’s build intelligent, innovative solutions together.'
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
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Hi, I’m Chirag — an aspiring ML Engineer focused on building deep learning models and AI-powered applications.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Scroll down to see my research, skills, and ML projects!
        </p>
      </div>
      
      <div className='w-full'>

        <section ref={aboutRef} id='about' data-section="about"><MLAbout/></section>
        <section ref={skillsRef} id='skills' data-section="skills"><MLSkills/></section>
        <section ref={projectsRef} id='projects' data-section="projects"><MLProjects/></section>
        <section ref={experienceRef} id='experience' data-section="experience"><MLExperience/></section>
        <section ref={educationRef} id='education' data-section="education"><Education theme="ml" /></section>
        <section ref={contactRef} id='contact' data-section="contact"><MLContact/></section>
      </div>
    </section>
    <FloatingAvatar section={activeSection} theme="ml" visitorName={visitorName}/>
    <MLFooter></MLFooter>
    </>
  )
}
