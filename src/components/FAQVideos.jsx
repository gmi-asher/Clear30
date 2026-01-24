import { faqVideos } from '../data/videos'
import VideoTile from './VideoTile'

function FAQVideos() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Decorative chevrons */}
        <div className="text-gray-300 text-2xl text-center mb-4 tracking-widest">
          ˅ ˅ ˅
        </div>

        {/* Section heading */}
        <h2 className="text-2xl font-normal text-center text-black mb-12">
          Get Your Questions Answered Before the Call
        </h2>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {faqVideos.map((video, index) => (
            <div
              key={video.id}
              className={index === faqVideos.length - 1 && faqVideos.length % 2 !== 0 ? 'md:col-span-2' : ''}
            >
              <div className={index === faqVideos.length - 1 && faqVideos.length % 2 !== 0 ? 'md:max-w-[calc((100%-2.5rem)/2)] md:mx-auto' : ''}>
                <VideoTile
                  videoId={video.id}
                  question={video.question}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQVideos
