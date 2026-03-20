export default function Download() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0E031C] to-[#1A1020] relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/concert-bg.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E031C] via-[#0E031C]/80 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Download info */}
          <div>
            <p className="text-orange-500 font-medium mb-2">Download Now</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Get the Havitah App
            </h2>
            <p className="text-gray-400 mb-8">
              Download our app and start discovering events, connecting with
              your community, and creating unforgettable experiences.
            </p>

            {/* App store buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="flex items-center gap-3 bg-black border border-[#3A3A3A] rounded-xl px-5 py-3 hover:border-white/30 transition-colors"
              >
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <p className="text-gray-400 text-xs">Download on the</p>
                  <p className="text-white font-semibold">App Store</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 bg-black border border-[#3A3A3A] rounded-xl px-5 py-3 hover:border-white/30 transition-colors"
              >
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div>
                  <p className="text-gray-400 text-xs">Get it on</p>
                  <p className="text-white font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right side - Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="bg-[#1A1A1A] rounded-[3rem] p-2 border border-[#2A2A2A] shadow-2xl">
                <div className="bg-[#0E031C] rounded-[2.5rem] overflow-hidden w-56 sm:w-64">
                  {/* App screenshot placeholder */}
                  <div className="aspect-[9/19] bg-gradient-to-b from-purple-900/50 to-[#0E031C] flex items-center justify-center">
                    <div className="text-center px-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-2xl">H</span>
                      </div>
                      <p className="text-white font-semibold mb-2">Build a community</p>
                      <p className="text-white font-semibold">for your Events</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
