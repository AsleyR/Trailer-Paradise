import React from 'react'

interface IProps {
    trailer: {
        videoUrl?: string
    }
}

const TrailerVideo = ({videoUrl}: IProps['trailer']) => {
  return (
    <div className='relative pb-[56.25%] h-0 transition-all'>
      <iframe
      src={`${videoUrl}`} title="YouTube video player" 
      frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen className='absolute outline-0 focus:outline-0 focus-visible:outline-none top-0 left-0 w-[100%] h-[100%] rounded-none md:rounded justify-self-center transition-all'>
      </iframe>
    </div>
  )
}

export default TrailerVideo
