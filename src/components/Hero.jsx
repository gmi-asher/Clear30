import { heroVideo } from '../data/videos'

function Hero() {
  return (
    <section className="bg-brand-dark py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Confirmation text */}
        <p className="text-white text-base mb-4">
          Your Meeting Is Confirmed!
        </p>

        {/* Main headline with gradient */}
        <h1
          className="text-3xl md:text-4xl font-medium uppercase mb-4 max-w-3xl mx-auto leading-tight"
          style={{
            background: 'linear-gradient(135deg, #5BB4A9 0%, #80C97A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          You're Booked — Here's What to Expect Before We Meet
        </h1>

        {/* Instruction line */}
        <p className="text-white text-base mb-10 max-w-2xl mx-auto">
          <strong>Save this page</strong> — These videos answer the most common questions before a campus partnership, so our meeting can focus on your campus.
        </p>

        {/* Hero video */}
        <div className="max-w-4xl mx-auto rounded-brand overflow-hidden shadow-brand-glow">
          <iframe
            src={`https://www.youtube.com/embed/${heroVideo.id}?rel=0&modestbranding=1&autoplay=1&mute=1`}
            title={heroVideo.title}
            className="w-full aspect-video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
