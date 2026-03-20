export default function EventJourney() {
  const steps = [
    {
      number: '01',
      title: 'Create & Customize',
      description: 'Set up your event with our intuitive tools',
    },
    {
      number: '02',
      title: 'Invite & Engage',
      description: 'Build anticipation with your community',
    },
    {
      number: '03',
      title: 'Host & Connect',
      description: 'Deliver memorable experiences',
    },
    {
      number: '04',
      title: 'Review & Grow',
      description: 'Gather insights and expand your reach',
    },
  ];

  return (
    <section className="py-20 bg-[#0E031C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your Event Journey in 30 Seconds
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From creation to celebration, we make every step seamless
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-[#1A1A1A] rounded-2xl p-6 border border-[#2A2A2A] card-hover"
            >
              <span className="text-4xl font-bold gradient-text opacity-50">{step.number}</span>
              <h3 className="text-lg font-semibold text-white mt-4 mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
