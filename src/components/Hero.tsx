import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      {/* Collage background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          <div className="relative overflow-hidden">
            <Image
              src="/hero/hero-1.png"
              alt="Havitah community moment"
              fill
              priority
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/hero/hero-2.png"
              alt="Havitah live event energy"
              fill
              priority
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/hero/hero-3.png"
              alt="Havitah celebration gathering"
              fill
              priority
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/hero/hero-4.png"
              alt="Havitah friends together"
              fill
              priority
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E031C]/80 via-[#0E031C]/55 to-[#0E031C]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Where Events Come{' '}
            <span className="gradient-text">Alive Through</span>{' '}
            <span className="gradient-text">Community</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Connect with your community before, during, and after your events.
            Build lasting relationships and turn attendees into advocates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center gap-2">
              <span>Access App</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="btn-secondary flex items-center justify-center gap-2">
              <span>Explore Features</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
