import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaListUl, FaShare } from 'react-icons/fa'
import TrailerVideo from '../components/trailer/TrailerVideo'
import TrailerCard from '../components/trailer/TrailerCard'

interface IState {
  trailer: {
    trailerUrl: string;
    title: string;
    date: string; // Temp
    description: string;
  }
}

const Trailer = () => {
  let { trailerId } = useParams()
  const [trailer, setTrailer] = useState<IState['trailer']>(
    {
      trailerUrl: "https://youtube.com/embed/JwXfVGjSz-4",
      title: "Peaky Blinders - Season 1",
      date: "Jul 30, 2015",
      description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby."
    }
  )

  const renderTrailerData = () => {
    return (
      <div className='justify-self-center w-auto px-5 md:pl-[2rem] lg:pl-[5rem] py-3 text-white transition-all'>
        <div className='justify-self-center'>
          <h1 className='text-2xl md:text-2l font-bold'>{trailer.title}</h1>
          <p className='font-medium'>{trailer.date}</p>
          <div className='w-full'>
            <p className='pt-2 md:pt-1 md:text-base'>{trailer.description}</p>
          </div>
        </div>
        <div className='mt-3'>
          <div className='flex gap-3'>
            <button className='inline-flex font-bold items-center px-5 py-1 bg-col1 hover:bg-col2 rounded-sm text-white'>{<FaShare className='mr-2'/>}SHARE</button>
            <button className='inline-flex font-bold items-center px-5 py-1 bg-col1 hover:bg-col2 rounded-sm text-white'>{<FaListUl className='mr-2'/>}SAVE</button>
          </div>
        </div>
      </div>  
    )
  }

  const renderTrailerVideo = () => {
    return (
      <div className='bg-dark1 border-b-2 border-gray1 grid grid-cols-1 md:grid-cols-none py-0 md:py-12 justify-center shadow'>
        <div className='justify-center px-0 md:px-0 w-auto md:w-[45rem] lg:w-[50rem] transition-all'>
          <div className='grid grid-cols-1 justify-center max-w-[55rem]'>
            <TrailerVideo trailerUrl={trailer.trailerUrl}/>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='pt-[6rem] md:pt-[5rem] h-full'>
      <div className='grid grid-cols-1 pb-[10rem]'>
        {renderTrailerVideo()}
        <div className='grid grid-cols-none md:grid-cols-1'>
          <div className="grid grid-cols-1 lg:grid-cols-[auto_min-content] justify-center">
            {renderTrailerData()}
            <div className=''>
              <h1 className='text-white text-center text-2xl font-bold'>Related Content</h1>
              <div>
                <TrailerCard trailer={{url: "/trailer/Breaking-Bad", imageUrl: "https://cdn.themovieseries.net//breaking-bad-season-1-hsh/cover.png", trailerName: "Breaking Bad - Season 1"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trailer
