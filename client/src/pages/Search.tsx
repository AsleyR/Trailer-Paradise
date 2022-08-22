import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import SearchForm from '../components/SearchForm'
import TrailerCard from '../components/trailer/TrailerCardHList'
import { useLocation } from 'react-router-dom'

interface IState {
  trailerList: {
    id: number;
    url: string
    imageUrl: string
    trailerName: string
  }[]
}

const Search = () => {
  const location = useLocation()
  const [trailer, setTrailer] = useState<IState['trailerList']>([])
  const [hasLoaded, setHasLoaded] = useState<Boolean>();
  const [hasSearch, setHasSearch] = useState<Boolean>();

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
    <div className='max-w-full h-full bg-dark2'>
      <div className='pt-[5rem] md:pt-[10rem]'>
        <div className='grid px-5 gap-10 md:px-5 lg:px-20 py-10 text-white'>
          <div>
            {hasSearch ? <h2 className='font-bold text-2xl md:text-4xl'>Search results for "{location.pathname}"</h2>: <h2 className='font-bold text-2xl md:text-4xl'>Search</h2>}
            <SearchForm />
          </div>
            {hasLoaded ? <TrailerCard trailerList={trailer}/>: null}
        </div>
      </div>
    </div>
  )
}

export default Search