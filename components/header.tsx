"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#3a3f47] shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-24 lg:h-28">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo-20utc-20decoration.png"
              alt="UTC Decorations"
              width={260}
              height={120}
              className="h-12 sm:h-20 lg:h-24 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href="/"
              className="text-white hover:text-blue-400 transition-all duration-300 font-bold text-[15px] lg:text-[16px] uppercase tracking-normal relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-blue-400 transition-all duration-300 font-bold text-[15px] lg:text-[16px] uppercase tracking-normal relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              ABOUT US
            </Link>
            <Link
              href="/projects"
              className="text-white hover:text-blue-400 transition-all duration-300 font-bold text-[15px] lg:text-[16px] uppercase tracking-normal relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              PROJECTS
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-blue-400 transition-all duration-300 font-bold text-[15px] lg:text-[16px] uppercase tracking-normal relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              CONTACT
            </Link>
          </nav>

          <button
            className="md:hidden p-2 hover:bg-gray-600 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-8 w-8 text-white" /> : <Menu className="h-8 w-8 text-white" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-600 bg-[#3a3f47] animate-in slide-in-from-top">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                className="text-white hover:text-blue-400 hover:bg-gray-600 transition-all duration-300 py-3 px-2 rounded-lg font-bold uppercase tracking-normal relative after:content-[''] after:absolute after:left-2 after:bottom-2 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-[calc(100%-16px)]"
                onClick={() => setIsMenuOpen(false)}
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-blue-400 hover:bg-gray-600 transition-all duration-300 py-3 px-2 rounded-lg font-bold uppercase tracking-normal relative after:content-[''] after:absolute after:left-2 after:bottom-2 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-[calc(100%-16px)]"
                onClick={() => setIsMenuOpen(false)}
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                ABOUT US
              </Link>
              <Link
                href="/projects"
                className="text-white hover:text-blue-400 hover:bg-gray-600 transition-all duration-300 py-3 px-2 rounded-lg font-bold uppercase tracking-normal relative after:content-[''] after:absolute after:left-2 after:bottom-2 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-[calc(100%-16px)]"
                onClick={() => setIsMenuOpen(false)}
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                PROJECTS
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-blue-400 hover:bg-gray-600 transition-all duration-300 py-3 px-2 rounded-lg font-bold uppercase tracking-normal relative after:content-[''] after:absolute after:left-2 after:bottom-2 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-[calc(100%-16px)]"
                onClick={() => setIsMenuOpen(false)}
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                CONTACT
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
