"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import Contact from "./Contact"; // ✅ import Contact overlay

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

// ✅ Removed "Centre" link
const navLinks = [
  { name: "About", href: "/#about" },
  { name: "What We Treat", href: "/treatment" },
  { name: "Contact", href: "/contact" },
  { name: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleLinkClick = (link) => {
    if (link.name === "Contact") {
      setShowContact(true);
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`absolute top-0 left-0 w-full z-50 bg-transparent ${poppins.className}`}
      >
        <div className="w-full px-0">
          <div className="flex items-center justify-between py-0">
            {/* Left: Logo */}
            <div className="flex items-center space-x-2 pl-2">
              <Link href="/" className="inline-block">
                <div className="flex items-center">
                  <div className="w-[85px] h-[85px] relative">
                    <Image
                      src="/plogo2.png"
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Glassmorphic Nav Links */}
            <div
              className="hidden md:flex items-center space-x-8 px-6 py-2 rounded-full backdrop-blur-md relative"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(230,230,230,0.15))",
                WebkitBackdropFilter: "blur(20px)",
                backdropFilter: "blur(20px)",
              }}
            >
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() =>
                    link.name === "What We Treat" && setHovered(true)
                  }
                  onMouseLeave={() => setHovered(false)}
                >
                  {link.name === "Contact" ? (
                    <button
                      onClick={() => handleLinkClick(link)}
                      className="text-base text-gray-800 font-medium px-3 py-1 rounded-full transition-all duration-300 hover:bg-pink-600 hover:text-white"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => handleLinkClick(link)}
                      className="text-base text-gray-800 font-medium px-3 py-1 rounded-full transition-all duration-300 hover:bg-pink-600 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Dropdown on hover */}
                  {link.name === "What We Treat" && hovered && (
                    <div className="absolute left-0 mt-2 w-64 bg-white/90 backdrop-blur-md rounded-lg shadow-lg py-2">
                      {[
                        {
                          name: "Orthopedic Conditions",
                          href: "/treatment#orthopedic",
                        },
                        {
                          name: "Paediatric Conditions",
                          href: "/treatment#paediatric",
                        },
                        {
                          name: "Neurological Conditions",
                          href: "/treatment#neurological",
                        },
                        {
                          name: "Oncological (Cancer) Conditions",
                          href: "/treatment#oncological",
                        },
                      ].map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setHovered(false)}
                          className="block px-4 py-2 text-gray-700 hover:bg-pink-600 hover:text-white text-sm"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right: Social Icons */}
            <div className="hidden md:flex items-center space-x-3 pr-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-green-600"
                >
                  <path d="M12.004 2.003a9.93 9.93 0 0 0-8.65 14.78L2 22l5.34-1.36A9.93 9.93 0 1 0 12.004 2zM12 20a8 8 0 1 1 7.999-8A8 8 0 0 1 12 20zm4.7-5.6c-.26-.13-1.53-.76-1.77-.85-.24-.09-.42-.13-.6.13-.17.26-.68.85-.83 1.03-.15.17-.3.2-.56.07-.26-.13-1.09-.4-2.08-1.27-.77-.68-1.3-1.53-1.45-1.78-.15-.26-.02-.4.11-.53.11-.1.26-.26.39-.4.13-.13.17-.22.26-.38.09-.17.04-.32-.02-.45-.06-.13-.6-1.44-.82-1.97-.22-.52-.43-.45-.6-.46l-.51-.01c-.17 0-.45.06-.68.32-.23.26-.9.88-.9 2.15s.92 2.49 1.05 2.67c.13.17 1.81 2.77 4.37 3.89.61.26 1.08.41 1.45.52.61.19 1.16.16 1.6.1.49-.07 1.53-.63 1.75-1.25.22-.62.22-1.15.15-1.25-.06-.1-.24-.17-.49-.3z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/dr_poojas_rehabandtherapy"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-purple-500"
                >
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3.004 3.004 0 0 1-3 3zm4.5-8a1 1 0 1 1-1-1 1.001 1.001 0 0 1 1 1z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-sky-400"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.25 4.25 0 0 0 1.88-2.34 8.59 8.59 0 0 1-2.7 1.03 4.24 4.24 0 0 0-7.22 3.87A12 12 0 0 1 3.15 4.7a4.25 4.25 0 0 0 1.31 5.67 4.2 4.2 0 0 1-1.92-.53v.05a4.25 4.25 0 0 0 3.4 4.16 4.27 4.27 0 0 1-1.91.07 4.26 4.26 0 0 0 3.97 2.95A8.51 8.51 0 0 1 2 19.54a12 12 0 0 0 6.29 1.84A12 12 0 0 0 20.3 9.29a8.67 8.67 0 0 0 2.16-2.25z" />
                </svg>
              </a>
            </div>

            {/* Mobile
             Hamburger */}
            <button
              className="md:hidden pr-4 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m0 6H4"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* ✅ Mobile Menu (Fixed Version) */}
          {menuOpen && (
            <div className="md:hidden bg-white/80 backdrop-blur-lg rounded-lg mx-4 mt-2 p-4 space-y-3">
              {navLinks.map((link) =>
                link.name === "Contact" ? (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link)}
                    className="block w-full text-left text-gray-800 hover:bg-pink-600 hover:text-white rounded-full text-base font-medium px-3 py-1 transition-all duration-300"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block w-full text-left text-gray-800 hover:bg-pink-600 hover:text-white rounded-full text-base font-medium px-3 py-1 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* ✅ Contact Overlay */}
      <Contact isOpen={showContact} onClose={() => setShowContact(false)} />
    </>
  );
}
