import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from "./Components/Section/Navbar"
import WebNavbar from './Components/Section/WebNavbar'
import MLNavbar from './Components/Section/MlNavbar'
import Home from "./Components/Section/Home/Home"
import ML from "./Components/Pages/ML/Ml"
import Web from "./Components/Pages/Web-D/web"
import NotFound from './Components/Pages/NotFound'
import ScrollToTop from './Components/scrollToTop'
import WebProjectDetailPage from './Components/Pages/Web-D/WebProjectDetailPage'
import MLProjectDetailPage from './Components/Pages/ML/MLProjectDetailPage'
import Intro from './Components/Section/Intro'

function AppContent({ darkMode, setDarkMode, visitorName, setVisitorName }) {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const to = params.get('to')

  return (
    <>
      <ScrollToTop />
      <div className={darkMode ? 'dark' : ''}>
        <Routes>
          <Route path="/" element={<><Navbar darkMode={darkMode} setDarkMode={setDarkMode} /><Intro to = {to} setVisitorName={setVisitorName} /></>} />
          <Route path="/MainHome" element={<><Navbar darkMode={darkMode} setDarkMode={setDarkMode} /><Home to = {to} visitorName={visitorName} /></>} />
          <Route path="/web" element={<><WebNavbar darkMode={darkMode} setDarkMode={setDarkMode} /><Web visitorName={visitorName}/></>} />
          <Route path="/web/*" element={<><WebNavbar darkMode={darkMode} setDarkMode={setDarkMode} /><NotFound /></>} />
          <Route path="/ml" element={<><MLNavbar darkMode={darkMode} setDarkMode={setDarkMode} /><ML visitorName={visitorName}/></>} />
          <Route path="/ml/*" element={<><MLNavbar darkMode={darkMode} setDarkMode={setDarkMode} /><NotFound /></>} />
          <Route path="*" element={<><Navbar darkMode={darkMode} setDarkMode={setDarkMode} /><NotFound /></>} />
          <Route path="/web/projects/:id" element={<><Navbar darkMode={darkMode} setDarkMode={setDarkMode} /><WebProjectDetailPage visitorName={visitorName} darkmode={darkMode}/></>} />
          <Route path="/ml/projects/:id" element={<><Navbar darkMode={darkMode} setDarkMode={setDarkMode} /><MLProjectDetailPage visitorName={visitorName}/></>} />
        </Routes>
      </div>
    </>
  )
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [visitorName, setVisitorName] = useState('')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <BrowserRouter>
      <AppContent
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        visitorName={visitorName}
        setVisitorName={setVisitorName}
      />
    </BrowserRouter>
  )
}

