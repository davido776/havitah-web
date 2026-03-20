'use client';

import { useState } from 'react';
import Image from 'next/image';

const slides = [
  {
    label: 'Discover',
    title:
      'Find events that match your vibe with AI-powered recommendations, location-based suggestions, and trending Havitah Waves that show what’s hot in your city.',
    description:
      'Our intelligent discovery system helps you find events that match your interests, location, and social connections. Never miss out on the experiences that matter to you.',
    image: '/sections/discover-phone.png',
  },
  {
    label: 'Create',
    title:
      'Create and manage events with stunning visuals, smart scheduling, and tools built for every scale.',
    description:
      'From intimate gatherings to large-scale celebrations, Havitah gives you everything you need to launch, promote, and manage memorable experiences.',
    image: '/sections/discover-phone.png',
  },
  {
    label: 'Engage',
    title:
      'Share your thoughts, connect with attendees, and build community with social-first tools and Havitah Reels.',
    description:
      'Turn moments into movements by sparking conversations, capturing highlights, and keeping your community active before, during, and after events.',
    image: '/sections/discover-phone.png',
  },
  {
    label: 'Details',
    title:
      'All the event details that matter — locations, schedules, organizer info, and real-time updates.',
    description:
      'Everything your audience needs is in one place, with rich event pages and live updates that keep everyone aligned.',
    image: '/sections/discover-phone.png',
  },
];

export default function Discover() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  return (
    <section className="py-20 bg-[#1A1020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-500 px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-sm font-medium">{activeSlide.label}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {activeSlide.title}
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              {activeSlide.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {slides.map((slide, index) => (
                <button
                  key={slide.label}
                  onClick={() => setActiveIndex(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                    index === activeIndex
                      ? 'bg-orange-500 text-white border-orange-500'
                      : 'bg-white/5 text-gray-300 border-white/10 hover:border-orange-500/60 hover:text-white'
                  }`}
                >
                  {slide.label}
                </button>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl lg:max-w-none">
              <div className="absolute -inset-10 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-full blur-3xl" />
              <div
                key={activeIndex}
                className="relative w-full h-[360px] sm:h-[420px] lg:h-[560px] animate-slide-in-right"
              >
                <Image
                  src={activeSlide.image}
                  alt={`${activeSlide.label} preview`}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
