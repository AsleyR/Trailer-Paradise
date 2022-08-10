import React, { useState } from 'react'

interface IState {
  trailer: {
    title: string
    releaseYear: number
    duration: number
    imgUrl: string
  }[]
}

const TrailerCard: React.FC = () => {
  const [trailer, setTrailer] = useState<IState['trailer']>([
    {
      title: "Titanic",
      releaseYear: 1989,
      duration: 168,
      imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3VvL5_ARQCk6aY-nGVS0PgHaK5%26pid%3DApi&f=1"
    },
    {
      title: "Up",
      releaseYear: 2009,
      duration: 66,
      imgUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.impawards.com%2F2009%2Fposters%2Fup.jpg&f=1&nofb=1"
    },
    {
      title: "Ratatouille",
      releaseYear: 2007,
      duration: 111,
      imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fx6KG861QLVZBa1gGS8vbGpfJ0iw.jpg&f=1&nofb=1"
    }
  ])

  const renderCards = (): JSX.Element[] => {
    return (
      trailer.map((trailer) => {
        return (
            <li className='grid md:grid-cols-none sm:grid-cols-2 rounded-lg w-40 hover:scale-[1.05] transition-all duration-300 cursor-pointer shadow-lg'>
              <img className='md:h-auto sm:h-full md:h-full md:rounded-t-lg sm:rounded-none max-w-full' src={trailer.imgUrl} alt="card-img"></img>
              <div className='container mx-auto px-5 py-2'>
                <h3 className='font-bold sm:text-4xl md:text-base'>{trailer.title}</h3>
                <p className='md:text-base sm:text-xl'>{trailer.releaseYear}</p>
                <p className='md:text-base sm:text-xl'>{trailer.duration} Minutes</p>
              </div>
            </li>
        )
      })
    )
  }

  return (
    <div className='my-10 mx-20'>
      <ul className='grid grid-cols-8 md:gap-48 sm:gap-12 sm:grid-cols-1 md:grid-cols-8'>
        {renderCards()}
      </ul>
    </div>
  )
}

export default TrailerCard