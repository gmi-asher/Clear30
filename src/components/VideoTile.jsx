function VideoTile({ videoId, question, aspectRatio = '3/2' }) {
  return (
    <div className="text-center">
      {/* Question title */}
      <h3 className="text-lg font-normal text-black mb-4">
        "{question}"
      </h3>

      {/* Video container */}
      <div className="rounded-brand overflow-hidden shadow-brand hover:scale-[1.02] transition-transform duration-200">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={question}
          className={`w-full ${aspectRatio === '16/9' ? 'aspect-video' : 'aspect-[3/2]'}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default VideoTile
