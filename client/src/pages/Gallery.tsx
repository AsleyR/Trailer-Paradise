import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import TrailerCard from '../components/trailer/TrailerCardHList'

interface IState {
  trailerList: {
    id: number;
    url: string;
    imageUrl: string;
    trailerName: string;
  }[]
}

const Gallery = () => {
  const [trailer, setTrailer] = useState<IState['trailerList']>([])
  const [hasLoaded, setHasLoaded] = useState<Boolean>();

  useEffect(() => {
    const getTrailerList = () => {
      Axios.get("http://localhost:4000/api/trailers").then(res => {
        setTrailer(res.data)
        setHasLoaded(true) // Prevents components from rendering before useEffect finishes
      }).catch(err => {
        console.log(err)
      })
    }

    getTrailerList()
  }, [])

  return (
    <div className=''>
      <div className='px-20 py-10'>
        <h2 className='font-bold text-4xl'>Lastest Trailers</h2>
      </div>
      {hasLoaded ? <TrailerCard trailerList={trailer}/>: null}
    </div>
  )
}

export default Gallery