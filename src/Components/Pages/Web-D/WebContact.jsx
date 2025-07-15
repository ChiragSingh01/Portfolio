import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineMail } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import CustomAlert from '../../Section/CustomAlert'

export default function WebContact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [alertOpen, setAlertOpen] = useState(false)
    const [alertSuccess, setAlertSuccess] = useState(true)
    const [alertMessage, setAlertMessage] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.send(
      'service_r2lu2ux',
      'template_pcvp0qa',
      form,
      'zzR1uRtSr1rpDdDyC'
    )
      .then(
      () => {
        setAlertSuccess(true)
        setAlertMessage(`✅ Hi ${form.name}, I have received your message!`)
        setAlertOpen(true)
        setForm({ name: '', email: '', message: '' })
      },
      (error) => {
        setAlertSuccess(false)
        setAlertMessage('❌ Something went wrong. Please try again.')
        setAlertOpen(true)
        console.error(error)
      }
    )
  }

  const phoneNumber = "+918920124450"

  return (
    <div className="w-full mt-30 max-w-2xl mx-auto text-center">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition"
      >
        <img
          src="/Chirag_3d_Avtar.png"
          alt="Chirag Avatar"
          className="w-20 h-20 mx-auto rounded-full border-4 border-blue-600 shadow mb-4"
        />
        <h2 className="text-3xl font-bold text-indigo-700 dark:text-yellow-400 mb-4">
          Let’s Connect!
        </h2>
        <p className="text-gray-700 dark:text-gray-200 mb-6">
          Have an idea, a project, or just want to say hi? Send me a message or connect below!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-indigo-600 text-white py-3 rounded-full hover:bg-indigo-700 transition"
          >
            <HiOutlineMail size={20} /> Send Message
          </button>
        </form>

        {/* Profile Links */}
        <div className="mt-8 flex justify-center flex-wrap gap-6">
          <a
            href="https://www.linkedin.com/in/chirag-singh-117698313"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-700 dark:text-yellow-400 hover:scale-110 transition"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/ChiragSingh01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-700 dark:text-yellow-400 hover:scale-110 transition"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="mailto:chiraagsingh7@gmail.com"
            className="text-indigo-700 dark:text-yellow-400 hover:scale-110 transition"
          >
            <FaEnvelope size={30} />
          </a>

          <div className="relative group text-indigo-700 dark:text-yellow-400">
            <FaPhone size={30} className="hover:scale-110 transition" />
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black dark:bg-white text-white dark:text-black text-xs px-2 py-1 rounded shadow transition">
              {phoneNumber}
            </span>
            <a href={`tel:${phoneNumber}`} className="sr-only">Call Me</a>
          </div>
        </div>
      </motion.div>
      <CustomAlert
        isOpen={alertOpen}
        onClose={() => setAlertOpen(false)}
        isSuccess={alertSuccess}
        message={alertMessage}
        avatar="/Chirag_3d_Avtar.png"
      />
    </div>
  )
}
