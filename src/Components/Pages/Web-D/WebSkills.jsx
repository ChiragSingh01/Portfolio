import React from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiFirebase, SiGit, SiFramer } from 'react-icons/si'

export default function WebSkills() {
  const skills = [
    {
      name: 'HTML',
      icon: <SiHtml5 size={30} className="text-orange-500" />,
      level: 'Expert',
      percent: 95,
      usedIn: 'Landing Pages, Portfolio'
    },
    {
      name: 'CSS',
      icon: <SiCss3 size={30} className="text-blue-500" />,
      level: 'Expert',
      percent: 95,
      usedIn: 'Styled components, Animations'
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript size={30} className="text-yellow-400" />,
      level: 'Advanced',
      percent: 85,
      usedIn: 'All projects, Dynamic UI'
    },
    {
      name: 'React',
      icon: <SiReact size={30} className="text-sky-400" />,
      level: 'Advanced',
      percent: 85,
      usedIn: 'Portfolio Website, Todo App'
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss size={30} className="text-teal-400" />,
      level: 'Advanced',
      percent: 85,
      usedIn: 'All modern UI layouts'
    },
    {
      name: 'Framer Motion',
      icon: <SiFramer size={30} className="text-pink-400" />,
      level: 'Intermediate',
      percent: 65,
      usedIn: 'Page transitions, Animations'
    },
    {
      name: 'Firebase',
      icon: <SiFirebase size={30} className="text-yellow-500" />,
      level: 'Intermediate',
      percent: 65,
      usedIn: 'Auth, Database for apps'
    },
    {
      name: 'Git',
      icon: <SiGit size={30} className="text-red-500" />,
      level: 'Advanced',
      percent: 85,
      usedIn: 'Version control for all projects'
    }
  ]

  return (
    <div className="w-full mt-30">
      <h2 className="text-3xl font-bold text-indigo-700 dark:text-yellow-400 mb-8 text-center">
        Web Development Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 w-full overflow-hidden"
          >
            {skill.icon}
            <p className="mt-2 font-semibold text-gray-800 dark:text-gray-100">{skill.name}</p>

            <div className="w-full mt-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.level}
                </span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.percent}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 dark:from-yellow-400 dark:to-green-400"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>

            {/* Hover text IN FLOW */}
            <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 mt-4">
              <p className="text-sm text-center text-gray-700 dark:text-gray-300">
                Used in: {skill.usedIn}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
