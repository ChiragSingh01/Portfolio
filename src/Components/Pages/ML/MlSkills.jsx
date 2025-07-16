import React from 'react'
import { SiPython, SiPytorch, SiTensorflow, SiOpencv, SiNumpy } from 'react-icons/si'

export default function MLSkills() {
  const skills = [
    {
      name: 'Python',
      icon: <SiPython size={30} className="text-yellow-500" />,
      level: 'Expert',
      percent: 95,
      usedIn: 'Core language for all my ML & DL projects'
    },
    {
      name: 'TensorFlow',
      icon: <SiTensorflow size={30} className="text-orange-500" />,
      level: 'Advanced',
      percent: 85,
      usedIn: 'Used in image classification & NLP models'
    },
    {
      name: 'PyTorch',
      icon: <SiPytorch size={30} className="text-red-500" />,
      level: 'Advanced',
      percent: 85,
      usedIn: 'Used for ViT & custom deep learning research'
    },
    {
      name: 'OpenCV',
      icon: <SiOpencv size={30} className="text-blue-500" />,
      level: 'Advanced',
      percent: 80,
      usedIn: 'Used for image processing & forged region detection'
    },
    {
      name: 'Numpy',
      icon: <SiNumpy size={30} className="text-blue-400" />,
      level: 'Advanced',
      percent: 80,
      usedIn: 'Backbone for all ML data operations'
    },
    {
      name: 'Vision Transformers',
      icon: <span className="text-2xl font-bold text-green-500">ViT</span>,
      level: 'Intermediate',
      percent: 65,
      usedIn: 'ViT for image captioning & ELA-based tampering detection'
    },
    {
      name: 'NLP',
      icon: <span className="text-2xl font-bold text-purple-500">NLP</span>,
      level: 'Intermediate',
      percent: 60,
      usedIn: 'Worked on LLMs & custom GPT-powered apps'
    },
    {
      name: 'Deep Learning',
      icon: <span className="text-2xl font-bold text-cyan-500">DL</span>,
      level: 'Advanced',
      percent: 85,
      usedIn: 'Custom DL models for classification & detection'
    }
  ]

  return (
    <div className="w-full mt-16">
      <h2 className="text-3xl font-bold text-yellow-600 dark:text-green-400 mb-8 text-center">
        Machine Learning Skills
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
                  className="h-3 rounded-full bg-gradient-to-r from-yellow-500 to-green-400 dark:from-yellow-400 dark:to-green-500"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>

            {/* Hover text IN FLOW */}
            <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 mt-4">
              <p className="text-sm text-center text-gray-700 dark:text-gray-300">
                {skill.usedIn}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
