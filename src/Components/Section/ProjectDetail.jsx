import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../Section/ProjectDetail.css'

export default function ProjectDetail({
  title,
  techStack,
  github,
  screenshots = [],
  backLink = '/',
  theme = 'web',
  readme,
  liveDemo
}) {
  const [zoomed, setZoomed] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);
  const [mediaIndex, setMediaIndex] = useState(0);
  const videoRef = useRef(null);
  const [readmeContent, setReadmeContent] = useState('');
  const [loadingReadme, setLoadingReadme] = useState(true);
  const [readmeError, setReadmeError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    const mediaQuery = window.matchMedia('');
    const handleChange = (e) => setIsDarkMode(e.matches);

    setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);


  useEffect(() => {
    if (readme) {
      fetch(readme)
        .then((res) => {
          if (!res.ok) throw new Error('Could not fetch README.');
          return res.text();
        })
        .then((text) => {
          setReadmeContent(text);
          setLoadingReadme(false);
        })
        .catch((err) => {
          console.error(err);
          setReadmeError('Failed to load README.');
          setLoadingReadme(false);
        });
    } else {
      setLoadingReadme(false);
    }
  }, [readme]);

  const bodyColour = theme === 'web'
    ? 'bg-gradient-to-r from-indigo-50 to-blue-100 dark:from-blue-950 dark:to-black'
    : 'bg-gradient-to-r from-yellow-50 to-green-100 dark:from-yellow-900 dark:to-green-950';

  const primaryColor = theme === 'web'
    ? 'text-indigo-700 dark:text-yellow-400'
    : 'text-yellow-600 dark:text-green-400';

  const buttonBg = theme === 'web'
    ? 'bg-indigo-600 hover:bg-indigo-700 dark:bg-[#705800] dark:hover:bg-yellow-600'
    : 'bg-yellow-500 hover:bg-yellow-600 dark:bg-green-700 dark:hover:bg-green-600';

  const openMedia = (index) => {
    setMediaIndex(index);
    setCurrentMedia(screenshots[index]);
  };

  const nextMedia = () => {
    const nextIndex = (mediaIndex + 1) % screenshots.length;
    setMediaIndex(nextIndex);
    setCurrentMedia(screenshots[nextIndex]);
  };

  const prevMedia = () => {
    const prevIndex = (mediaIndex - 1 + screenshots.length) % screenshots.length;
    setMediaIndex(prevIndex);
    setCurrentMedia(screenshots[prevIndex]);
  };

  const closeMedia = () => {
    setCurrentMedia(null);
  };

  const setPlaybackRate = (rate) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
    }
  };

  return (
    <div className={`min-h-screen pt-20 ${bodyColour}`}>
      <motion.div
        className="max-w-4xl mx-auto px-4 py-12"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 text-center ${primaryColor}`}>
          {title}
        </h1>

        {screenshots.length > 0 && (
          <div>
            <h2 className={`text-2xl font-semibold mb-4 ${primaryColor}`}>
              Preview
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white dark:bg-[#111111] p-4 rounded-lg border-black dark:border-gray-500 border-2">
              {screenshots.map((url, idx) => {
                const isVideo = url.match(/\.(mp4|webm|ogg)$/i);
                const fileName = url.split('/').pop().split('.')[0];

                return isVideo ? (
                  <div
                    key={idx}
                    className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow cursor-pointer hover:scale-105 transition"
                  >
                    <motion.video
                      src={url}
                      controls
                      className="w-full h-full object-cover"
                      onClick={() => openMedia(idx)}
                    />
                    <div className="flex items-center justify-center absolute top-0 left-0 w-full px-2 py-1 bg-black/40 backdrop-blur-sm text-white text-sm font-semibold pointer-events-none">
                      {fileName}
                    </div>
                  </div>
                ) : (
                  <div
                    key={idx}
                    className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow cursor-pointer hover:scale-105 transition"
                  >
                    <motion.img
                      src={url}
                      alt={fileName}
                      className="w-full h-full object-cover"
                      onClick={() => openMedia(idx)}
                    />
                    <div className="flex items-center justify-center absolute top-0 left-0 w-full px-2 py-1 bg-black/40 backdrop-blur-sm text-white text-sm font-semibold pointer-events-none">
                      {fileName}
                    </div>
                  </div>
                );
              })}
            </div>


          </div>
        )}

        {techStack?.length > 0 && (
          <div>
            <h2 className={`text-2xl font-semibold mb-2 ${primaryColor}`}>
              Tech Stack
            </h2>
            <ul className="list-disc list-inside mb-6 bg-white dark:bg-[#111111] p-4 rounded-lg border-black dark:border-gray-500 border-2">
              {techStack.map((tech, idx) => (
                <li key={idx} className="text-gray-800 dark:text-gray-200">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h2 className={`text-2xl font-semibold mb-2 ${primaryColor}`}>
            Details About the Project
          </h2>
        </div>

        {loadingReadme && (
          <p className="mb-10 text-gray-600 dark:text-gray-300">Loading README...</p>
        )}
        {readmeError && (
          <p className="mb-10 text-red-600">{readmeError}</p>
        )}

        {!loadingReadme && !readmeError && readmeContent && (
          <div
            className={'prose prose-invert mt-10 mb-10 max-w-4xl mx-auto p-8 rounded-lg shadow dark:bg-[#111111] dark:text-gray-100 bg-white text-black border-black dark:border-gray-500 border-2'}
          >
            <ReactMarkdown
              children={readmeContent}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code
                      className="bg-gray-100 text-red-600 dark:bg-gray-800 dark:text-green-400 px-1 py-0.5 rounded"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
              }}
            />
          </div>
        )}

        <div className="flex gap-4 flex-wrap mt-6">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 dark:hover:bg-gray-700 transition"
            >
              View on GitHub
            </a>
          )}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block ${buttonBg} text-white px-6 py-3 rounded-full font-semibold transition`}
            >
              Live Demo
            </a>
          )}
          <Link
            to={`${backLink}#projects`}
            className={`inline-block ${buttonBg} text-white px-6 py-3 rounded-full font-semibold transition`}
          >
            ← Back to Projects
          </Link>
        </div>

        <AnimatePresence>
          {currentMedia && (
            <motion.div
              className={`fixed inset-0 backdrop-blur-md backdrop-brightness-25 z-50 p-4 ${zoomed ? 'overflow-auto block' : 'flex flex-col items-center justify-center'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {currentMedia.match(/\.(mp4|webm|ogg)$/i) ? (
                <>
                  <video
                    ref={videoRef}
                    src={currentMedia}
                    controls
                    autoPlay
                    className="max-w-full max-h-[80vh] rounded-lg mb-4"
                  />
                  <div className="flex gap-2 mb-4">
                    <button onClick={() => setPlaybackRate(1)} className="px-3 py-1 bg-white rounded-full text-black hover:bg-gray-200">1x</button>
                    <button onClick={() => setPlaybackRate(1.5)} className="px-3 py-1 bg-white rounded-full text-black hover:bg-gray-200">1.5x</button>
                    <button onClick={() => setPlaybackRate(2)} className="px-3 py-1 bg-white rounded-full text-black hover:bg-gray-200">2x</button>
                  </div>
                </>
              ) : (
                <div className='flex flex-col items-center justify-center'>
                  <img
                    src={currentMedia}
                    alt="Full Screenshot"
                    className={`rounded-lg mb-2 mt-2 ${zoomed ? 'w-4xl' : 'max-w-full max-h-[80vh]'}`}
                  />
                    <button
                      onClick={() => setZoomed(!zoomed)}
                      className="px-4 py-2 mb-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200"
                    >
                      {zoomed ? 'Zoom Out' : 'Zoom In'}
                    </button>
                </div>
              )}

              <div className="flex gap-4 items-center justify-center">
                {screenshots.length > 1 && (
                  <>
                    <button
                      onClick={prevMedia}
                      className="px-4 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200"
                    >
                      ⟵ Prev
                    </button>
                    <button
                      onClick={nextMedia}
                      className="px-4 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200"
                    >
                      Next ⟶
                    </button>
                  </>
                )}
                <button
                  onClick={closeMedia}
                  className="px-4 py-2 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700"
                >
                  ✕ Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
}
