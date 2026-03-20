import Image from 'next/image';

export default function CommunityStages() {
  const stages = [
    {
      tag: 'Before',
      tagColor: 'bg-orange-500',
      title: 'Before Event',
      subtitle: 'Build Anticipation',
      description: 'Build hype and anticipation with event teasers, countdown timers, and early-bird access to event info.',
      image: '/images/before-event.jpg',
      buttonText: 'Create Invitations',
      buttonStyle: 'btn-primary',
    },
    {
      tag: 'During',
      tagColor: 'bg-purple-500',
      title: 'During Event',
      subtitle: 'Ride the Wave',
      description: 'Catch the energy, engage with live polls, share moments, capture the vibe with real-time engagement tools.',
      image: '/images/during-event.jpg',
      buttonText: "Let's Get It!",
      buttonStyle: 'btn-purple',
      stars: 5,
      highlight: true,
    },
    {
      tag: 'After',
      tagColor: 'bg-blue-500',
      title: 'After Event',
      subtitle: 'Stay Connected',
      description: 'Turn attendees into community members. Share highlights, collect feedback, and plan your next event.',
      image: '/images/after-event.jpg',
      buttonText: 'View Highlights',
      buttonStyle: 'btn-secondary',
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/sections/community-stage.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E031C]/90 via-[#0E031C]/75 to-[#0E031C]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Community At Every Stage
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Manage your event&apos;s lifecycle community from start to finish, from teasers to thank yous, and create experiences with dedicated tools for every phase.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stages.map((stage, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden card-hover ${
                stage.highlight ? 'ring-2 ring-purple-500/50' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent z-10" />
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${stage.image}')`,
                    backgroundColor: '#2A2A2A',
                  }}
                />
                <span className={`absolute top-4 left-4 z-20 ${stage.tagColor} text-white text-xs font-medium px-3 py-1 rounded-full`}>
                  {stage.tag}
                </span>
              </div>

              {/* Content */}
              <div className="bg-[#1A1A1A] p-6 border border-[#2A2A2A] border-t-0 rounded-b-2xl">
                <h3 className="text-lg font-semibold text-white mb-1">{stage.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{stage.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{stage.description}</p>

                {stage.stars && (
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(stage.stars)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs text-gray-500 ml-2">much energy</span>
                  </div>
                )}

                <button className={`w-full ${stage.buttonStyle} text-sm`}>
                  {stage.buttonText}
                  <svg className="inline-block w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
