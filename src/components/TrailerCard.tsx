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
      title: "Titanic",
      releaseYear: 1989,
      duration: 168,
      imgUrl: "/"
    }
  ])

  const renderCards = (): JSX.Element[] => {
    return (
      trailer.map((trailer) => {
        return (
          <ul className='trailer-card-container'>
            <li className='trailer-card-wrapper'>
              <img className='trailer-card-img' src={trailer.imgUrl} alt="card-img"></img>
              <h3 className='trailer-card-title'>{trailer.title}</h3>
              <p className='trailer-card-year'>{trailer.releaseYear}</p>
              <p className='trailer-card-duration'>{trailer.duration}</p>
            </li>
          </ul>
        )
      })
    )
  }

  return (
    <div className='container-flex'>
      {renderCards()}
    </div>
  )
}

export default TrailerCard