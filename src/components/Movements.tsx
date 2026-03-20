'use client';

import { useEffect, useState } from 'react';

const phoneSlides = ['/sections/movements-phone.png'];

export default function Movements() {
  const [slideTick, setSlideTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlideTick((tick) => tick + 1);
    }, 9000);

    return () => clearInterval(id);
  }, []);

  const slideSrc = phoneSlides[slideTick % phoneSlides.length];

  return (
    <section className="py-20 md:py-28 bg-[#0E031C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Turn Your Events Into <span className="gradient-text-purple">Movements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Empower your attendees to become your biggest advocates and build
            a thriving community around your brand.
          </p>
        </div>

        {/* Phone Mockup with Purple Ring */}
        <div className="flex justify-center min-h-[520px] sm:min-h-[620px]">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="movement-ring-outer" />
            </div>

            <div className="movement-orb">
              <img
                key={slideTick}
                src={slideSrc}
                alt="Havitah app preview"
                className="movement-phone animate-slide-up"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            Start Creating Events
          </button>
        </div>
      </div>
    </section>
  );
}
