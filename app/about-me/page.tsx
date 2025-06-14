"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AboutMe() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main
      className={`min-h-screen text-gray-300 p-4 sm:p-6 font-mono transform transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
    >
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <div
          className={`mb-6 sm:mb-8 transform transition-all duration-500 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
        >
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft
              size={16}
              className="sm:w-5 sm:h-5 transform group-hover:-translate-x-0.5 transition-transform duration-200"
            />
            <span className="relative text-sm sm:text-base">
              Back to the professional stuff
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-white transition-all duration-200 group-hover:w-full"></span>
            </span>
          </Link>
        </div>

        {/* Header */}
        <section
          className={`mb-8 sm:mb-12 transform transition-all duration-500 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 hover:text-gray-100 transition-colors duration-200">
            The Other Side
          </h1>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed hover:text-gray-300 transition-colors duration-200">
            Since you clicked on my name, here's what I do when I'm not pretending to be a serious developer.
          </p>
        </section>

        {/* Content */}
        <section
          className={`space-y-8 sm:space-y-12 transform transition-all duration-500 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          {/* Hobbies */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 hover:text-gray-100 transition-colors duration-200">
              Things I Actually Enjoy
            </h2>
            <ul className="space-y-3 sm:space-y-4">
              {[
                {
                  title: "Singing",
                  description: "Mostly in the shower where my acoustics are Grammy-worthy",
                },
                {
                  title: "Sleeping",
                  description: "I've turned procrastination into an art form",
                },
                {
                  title: "Piano",
                  description: "Playing the same 3 songs I learned in 2019",
                },
                {
                  title: "Dancing",
                  description: '"Trying" is the operative word here',
                },
                {
                  title: "Reading Colleen Hoover",
                  description: "Yes, I cry over fictional men. No, I'm not ashamed",
                },
                {
                  title: "Skincare",
                  description: "My 10-step routine is the only routine I actually stick to",
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="group relative p-2 sm:p-3 -mx-2 sm:-mx-3 rounded-lg hover:bg-gray-800/30 transform hover:translate-x-2 transition-all duration-200 cursor-default"
                  style={{
                    transitionDelay: `${400 + idx * 50}ms`,
                    willChange: "transform",
                  }}
                >
                  <span className="text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-200 text-sm sm:text-base">
                    {item.title}
                  </span>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-sm sm:text-base">
                    {" "}
                    - {item.description}
                  </span>
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-purple-500/50 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top"></div>
                </li>
              ))}
            </ul>
          </div>

          {/* Korean Obsession */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/30 via-purple-400/50 to-purple-500/30"></div>
            <div className="pl-6 sm:pl-8">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 hover:text-gray-100 transition-colors duration-200">
                My Korean Problem
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-300 leading-relaxed hover:text-white transform hover:translate-x-1 transition-all duration-200 cursor-default text-sm sm:text-base">
                  <span className="text-purple-400 font-medium hover:text-purple-300 transition-colors duration-200">
                    BTS Army
                  </span>{" "}
                  since before it was cool to admit it. I know all their names, birthdays, and probably more about their
                  lives than my own family.
                </p>
                <p className="text-gray-300 leading-relaxed hover:text-white transform hover:translate-x-1 transition-all duration-200 cursor-default text-sm sm:text-base">
                  <span className="text-purple-400 font-medium hover:text-purple-300 transition-colors duration-200">
                    K-Drama addict
                  </span>{" "}
                  who has mastered the art of ugly crying at 3 AM. Second lead syndrome is real and I suffer from it
                  regularly.
                </p>
                <p className="text-xs sm:text-sm text-gray-500 italic hover:text-gray-400 transform hover:translate-x-1 transition-all duration-200 cursor-default pl-3 sm:pl-4 border-l border-gray-700">
                  Fun fact: I've learned more Korean from subtitles than actual studying. My pronunciation is
                  questionable at best.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-500 text-xs sm:text-sm hover:text-gray-400 transition-colors duration-200 cursor-default">
              panchi da goat
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
