'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceProviderModal from './ServiceProviderModal';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0E031C]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image
                src="/brand/logo.png"
                alt="Havitah logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-white font-semibold text-lg">Havitah</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm">
              How it works
            </Link>
            <button
              type="button"
              onClick={() => setIsServiceModalOpen(true)}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              For service providers
            </button>
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">
              About Us
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-gray-300 hover:text-white transition-colors text-sm">
              Login
            </Link>
            <Link
              href="/get-started"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm px-2 py-1">
                How it works
              </Link>
              <button
                type="button"
                onClick={() => setIsServiceModalOpen(true)}
                className="text-gray-300 hover:text-white transition-colors text-sm px-2 py-1 text-left"
              >
                For service providers
              </button>
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors text-sm px-2 py-1">
                About Us
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                <Link href="/login" className="text-gray-300 hover:text-white transition-colors text-sm px-2 py-1">
                  Login
                </Link>
                <Link
                  href="/get-started"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-lg text-sm font-medium text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <ServiceProviderModal
        open={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
      />
    </nav>
  );
}
