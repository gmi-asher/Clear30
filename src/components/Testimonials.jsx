import { testimonialVideos, credibilityBullets } from '../data/videos'

function Testimonials() {
  return (
    <section className="bg-brand-dark py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <h2 className="text-2xl font-normal text-white text-center mb-6">
          Hear From Clear30 Users
        </h2>

        {/* Credibility bullets */}
        <ul className="text-center mb-12">
          {credibilityBullets.map((bullet, index) => (
            <li key={index} className="text-white text-base mb-2">
              <span className="text-brand-primary mr-2">✓</span>
              {bullet}
            </li>
          ))}
        </ul>

        {/* Testimonial video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialVideos.map((video) => (
            <div key={video.id} className="rounded-xl overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                title="Clear30 User Testimonial"
                className="w-full aspect-video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-white/50 text-sm text-center mt-8">
          *Individual experiences may vary. Results depend on implementation, student population, and engagement levels.*
        </p>
      </div>
    </section>
  )
}

export default Testimonials
