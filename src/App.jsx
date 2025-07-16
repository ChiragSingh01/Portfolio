import './App.css'
import React, { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from "./Components/Section/Navbar"
import WebNavbar from './Components/Section/WebNavbar'
import MLNavbar from './Components/Section/MlNavbar'
import ScrollToTop from './Components/scrollToTop'
import LoadingPage from './Components/Section/LoadingPage'

const Home = lazy(() => import('./Components/Section/Home/Home'))
const ML = lazy(() => import('./Components/Pages/ML/Ml'))
const Web = lazy(() => import('./Components/Pages/Web-D/web'))
const NotFound = lazy(() => import('./Components/Pages/NotFound'))
const WebProjectDetailPage = lazy(() => import('./Components/Pages/Web-D/WebProjectDetailPage'))
const MLProjectDetailPage = lazy(() => import('./Components/Pages/ML/MLProjectDetailPage'))
const Intro = lazy(() => import('./Components/Section/Intro'))

function AppContent({ darkMode, setDarkMode, visitorName, setVisitorName }) {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const to = params.get('to')

  // ✅ Figure out theme automatically based on path
  const theme = location.pathname.startsWith('/ml') ? 'ml' : 'web'

  return (
    <>
      <ScrollToTop />
      <div className={darkMode ? 'dark' : ''}>
        <Suspense fallback={<LoadingPage theme={theme} darkMode={darkMode} />}>
          <Routes>
            <Route path="/" element={<><Navbar darkMode={darkMode} setDarkMode={setDarkMode} /><Intro to={to} setVisitorName={setVisitorName} /></>} />
            <Route path="/MainHome" element={<><Navbar darkMode={darkMode} setDarkMode={setDarkMode} /><Home to={to} visitorName={visitorName} /></>} />
            <Route path="/web" element={<><WebNavbar darkMode={darkMode} setDarkMode={setDarkMode} /><Web visitorName={visitorName} /></>} />
            <Route path="/web/*" element={<><WebNavbar darkMode={darkMode} setDarkMode={setDarkMode} /><NotFound /></>} />
            <Route path="/ml" element={<><MLNavbar darkMode={darkMode} setDarkMode={setDarkMode} /><ML visitorName={visitorName} /></>} />
            <Route path="/ml/*" element={<><MLNavbar darkMode={darkMode} setDarkMode={setDarkMode} /><NotFound /></>} />
            <Route path="*" element={<><Navbar darkMode={darkMode} setDarkMode={setDarkMode} /><NotFound /></>} />
            <Route path="/web/projects/:id" element={<><Navbar darkMode={darkMode} setDarkMode={setDarkMode} /><WebProjectDetailPage visitorName={visitorName} darkmode={darkMode} /></>} />
            <Route path="/ml/projects/:id" element={<><Navbar darkMode={darkMode} setDarkMode={setDarkMode} /><MLProjectDetailPage visitorName={visitorName} /></>} />
          </Routes>
        </Suspense>
      </div>
    </>
  )
}

export default function App() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
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
