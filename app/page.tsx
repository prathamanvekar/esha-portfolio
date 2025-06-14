"use client"

import type React from "react"

import { Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const nameRef = useRef<HTMLSpanElement>(null)
  const router = useRouter()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.reload()
  }

  const handleNameMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (nameRef.current) {
      const rect = nameRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      setMousePosition({ x, y })
    }
  }

  const handleNameClick = () => {
    router.push("/about-me")
  }

  const techStack = [
    "Jira",
    "Confluence",
    "DevOps",
    "Linux",
    "React",
    "React Native",
    "MERN Stack",
    "AWS",
    "Python",
    "C++",
    "JavaScript",
    "MySQL",
    "GitHub",
  ]

  return (
    <main
      className={`min-h-screen text-gray-300 p-4 sm:p-6 font-mono transform transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
    >
      <div className="max-w-3xl mx-auto">
        {/* Navbar */}
        <nav
          className={`flex items-center justify-between py-4 transform transition-all duration-500 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
        >
          <div className="space-x-6 sm:space-x-10">
            <Link
              href="/"
              onClick={handleHomeClick}
              className="relative text-gray-300 hover:text-white transition-colors duration-200 group cursor-pointer"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-300 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </div>
          <div className="flex space-x-4 sm:space-x-6">
            <Link
              href="https://www.linkedin.com/in/esha-anvekar"
              aria-label="LinkedIn"
              className="relative group text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-200"
            >
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-200 -z-10"></div>
            </Link>
            <Link
              href="https://github.com/eshanvekar-01"
              aria-label="GitHub"
              className="relative group text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200"
            >
              <Github size={18} className="sm:w-5 sm:h-5" />
              <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-200 -z-10"></div>
            </Link>
            <Link
              href="mailto:eshaanvekar@gmail.com"
              aria-label="Mail"
              className="relative group text-gray-400 hover:text-red-400 transform hover:scale-110 transition-all duration-200"
            >
              <Mail size={18} className="sm:w-5 sm:h-5" />
              <div className="absolute inset-0 bg-red-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-200 -z-10"></div>
            </Link>
          </div>
        </nav>

        {/* Intro */}
        <section
          className={`mt-8 sm:mt-10 space-y-4 transform transition-all duration-500 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          <div className="relative">
            <h1 className="text-2xl sm:text-3xl font-bold text-white transition-colors duration-200">
              Hi, I'm{" "}
              <span
                ref={nameRef}
                className="relative cursor-pointer inline-block transform hover:scale-105 transition-transform duration-200"
                onMouseMove={handleNameMouseMove}
                onClick={handleNameClick}
                style={{
                  backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #7c3aed 0%, #8b5cf6 20%, #a855f7 40%, #c084fc 60%, #e879f9 80%, #ffffff 100%)`,
                  backgroundSize: "300% 300%",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "900",
                  willChange: "background-position",
                }}
                onMouseLeave={() => setMousePosition({ x: 50, y: 50 })}
              >
                Esha Anvekar
              </span>
            </h1>
          </div>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg">
            {[
              "Software Development Engineer at Barclays",
              "Former Intern at Barclays",
              "Startup experience as a Software Intern",
              "Passionate about building impactful products",
              "Open to collaboration—let's connect!",
            ].map((item, idx) => (
              <li key={idx} className="hover:text-white transform hover:translate-x-1 transition-all duration-200">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Side Projects */}
        <section
          className={`mt-8 sm:mt-10 transform transition-all duration-500 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          <h2 className="mb-4 text-xl sm:text-2xl font-semibold text-white transition-colors duration-200">Projects</h2>
          <ul className="list-decimal list-inside space-y-3 text-base sm:text-lg">
            <li className="hover:text-white transform hover:translate-x-1 transition-all duration-200">
              Built a{" "}
              <Link
                href="https://github.com/vaibhavbichave/Smart-Journal"
                className="relative text-blue-400 hover:text-blue-300 transition-colors duration-200 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                smart journal
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 transition-all duration-200 group-hover:w-full"></span>
              </Link>{" "}
              that uses emotion recognition to recommend music or Spotify playlists
            </li>
            <li className="hover:text-white transform hover:translate-x-1 transition-all duration-200">
              Built a discussion forum for collaborative learning and sharing ideas
            </li>
            <li className="hover:text-white transform hover:translate-x-1 transition-all duration-200">
              Built many other things—always experimenting and learning!
            </li>
          </ul>
        </section>

        {/* Tech I Know */}
        <section
          className={`mt-8 sm:mt-10 transform transition-all duration-500 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-semibold text-white transition-colors duration-200">
            Tech I Know
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className={`
                  group relative overflow-hidden
                  px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-400
                  border border-gray-700 rounded-lg
                  hover:border-purple-400/60 hover:text-white
                  transform hover:-translate-y-1 hover:scale-105
                  transition-all duration-200 cursor-default
                  hover:shadow-lg hover:shadow-purple-500/20
                  ${isLoaded ? "opacity-100" : "opacity-0"}
                `}
                style={{
                  transitionDelay: `${500 + idx * 30}ms`,
                  willChange: "transform",
                }}
              >
                <span className="relative z-10">{tech}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              </span>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 text-xs sm:text-sm text-gray-500">
            <p>© 2024 Esha Anvekar</p>
            <p className="hover:text-gray-300 transition-colors duration-200">If you found a bug, it's a feature. You're welcome.</p>
          </div>
        </footer>
      </div>
    </main>
  )
}
