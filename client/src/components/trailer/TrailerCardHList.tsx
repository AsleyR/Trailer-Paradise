import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TrailerCard from './TrailerCard'

interface IProps {
  trailerList: {
    _id: string;
    title: string;
    trailerUrl: string;
    coverUrl: string;
  }[]
}

const TrailerCardHList = ({ trailerList }: IProps) => {
    const navigation = useNavigate()
    const [trailer, setTrailer] = useState(trailerList)

  const renderTrailerCard = () => {
    return (
        trailer.map((trailer) => {
            return (
              <TrailerCard trailer={trailer}/>
            )
        })
    )
  }
    return (
    <ul className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-x-5 sm:gap-x-5 md:gap-x-5 gap-y-5'>
      {renderTrailerCard()}
    </ul>
  )
}


export default TrailerCardHList
