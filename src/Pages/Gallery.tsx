import React, { useState } from 'react'
import TrailerCard from '../components/trailer/TrailerCardHList'

interface IState {
  trailerList: {
    url: string;
    imageUrl: string;
    trailerName: string;
  }[]
}

const Gallery = () => {
  const [trailer, setTrailer] = useState<IState['trailerList']>([
    {
        url: "/trailer/123",
        imageUrl: "https://cdn.themovieseries.net/cover/minions-the-rise-of-gru.png",
        trailerName: "Minions: The Rise of Gru"
    },
    {
        url: "/trailer/123",
        imageUrl: "https://cdn.themovieseries.net//titanic-jxq/cover.png",
        trailerName: "Titanic"
    },
    {
      url: "/trailer/123",
      imageUrl: "https://cdn.themovieseries.net/cover/fight-club.png",
      trailerName: "Fight Club"
    },
    {
      url: "/trailer/123",
      imageUrl: "https://cdn.themovieseries.net/cover/spider-man-far-from-home.png",
      trailerName: "Spider-Man: Far from Home"
    },
    {
      url: "/trailer/peaky-blinders-season-3",
      imageUrl: "https://cdn.themovieseries.net//peaky-blinders-season-3-jsv/cover.png",
      trailerName: "Peaky Blinders - Season 3"
    },
    {
      url: "/trailer/the-batman",
      imageUrl: "https://cdn.themovieseries.net/cover/the-batman.png",
      trailerName: "The Batman"
    },
    {
      url: "/trailer/breaking-bad-season-1",
      imageUrl: "https://cdn.themovieseries.net//breaking-bad-season-1-hsh/cover.png",
      trailerName: "Breaking Bad - Season 1"
    },
    {
      url: "/trailer/the-queens-gambit-season-1",
      imageUrl: "https://cdn.themovieseries.net/cover/the-queens-gambit-season-1.png",
      trailerName: "The Queen's Gambit - Season 1"
    },
    {
      url: "/trailer/once-upon-a-time-in-hollywood",
      imageUrl: "https://cdn.themovieseries.net/cover/once-upon-a-time-in-hollywood.png",
      trailerName: "Once Upon a Time in Hollywood"
    }
  ])

  return (
    <div className=''>
      <div className='px-20 py-10'>
        <h2 className='font-bold text-4xl'>Lastest Trailers</h2>
      </div>
      <TrailerCard trailerList={trailer}/>
    </div>
  )
}

export default Gallery