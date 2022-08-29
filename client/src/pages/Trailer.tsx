import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { FaListUl, FaShare } from 'react-icons/fa'
import Axios from 'axios'
import TrailerVideo from '../components/trailer/TrailerVideo'
import TrailerCard from '../components/trailer/TrailerCard'

interface IState {
  trailer: {
    title: string;
    description: string;
    trailerUrl: string;
    releaseDate: string;
  },
  trailerCard: {
    _id: string;
    title: string
    trailerUrl: string
    coverUrl: string
  }
}

const Trailer = () => {
  let { trailerId } = useParams()
  const navigation = useNavigate()
  const location = useLocation()
  const [path, setPath] = useState(location.pathname)
  const [reloadTrailer, setReloadTrailer] = useState<Boolean>()
  const [trailer, setTrailer] = useState<IState['trailer']>()
  const [relatedTrailerCard, setRelatedTrailerCard] = useState<IState['trailerCard']>({_id: "",title:"",trailerUrl:"",coverUrl:""})
  const [hasLoaded, setHasLoaded] = useState<Boolean>()

  useEffect(() => {
    const getTrailerData = () => {
      Axios.get(`http://localhost:4000/api/trailers/${trailerId}`).then(res => {
        if (res.status = 200) {
          setTrailer(res.data)
          setHasLoaded(true)
        }

      }).catch(err => {
        console.log(err)
        navigation('/error-404')
      })
    }

    const getSingleRandomTrailerData =() => {
      Axios.get('http://localhost:4000/api/trailers/random').then(res => {
        if (res.status = 200) {
          setRelatedTrailerCard(res.data[0])
          setHasLoaded(true)
        }
      })
    }

    if (location.pathname !== path) {
      setPath(location.pathname)
      getTrailerData()
    }

    getTrailerData()
    getSingleRandomTrailerData()
  }, [location])

  const renderTrailerData = () => {
    return (
      <div className='justify-self-center w-auto py-3 pr-0 lg:pr-10 text-white transition-all'>
        <div className='justify-self-center'>
          <h1 className='text-2xl md:text-2l font-bold'>{trailer?.title}</h1>
          <p className='font-medium'>{trailer?.releaseDate}</p>
          <div className='w-full'>
            <p className='pt-2 md:pt-1 md:text-base'>{trailer?.description}</p>
          </div>
        </div>
        <div className='mt-3'>
          <div className='flex gap-3'>
            <button className='inline-flex font-bold items-center px-5 py-1 bg-transparent border-2 border-gray2 rounded-sm text-white hover:text-gray-300'>{<FaShare className='mr-2'/>}SHARE</button>
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
            {hasLoaded ? <TrailerVideo videoUrl={trailer?.trailerUrl}/>: null}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='pt-[6rem] md:pt-[5rem] h-full'>
      <div className='grid grid-cols-1 pb-5'>
        {reloadTrailer ? null : renderTrailerVideo()}
        <div className='grid grid-cols-none md:grid-cols-1'>
          <div className="grid grid-cols-1 lg:grid-cols-[auto_min-content] gap-10 lg:gap-0 px-5 lg:px-[10rem] justify-center transition-all">
            {reloadTrailer ? null : renderTrailerData()}
            <div className=''>
              <h1 className='text-white text-left lg:text-center text-2xl font-bold pb-3'>Related Content</h1>
              <div className='w-[10rem] lg:w-32'>
                <TrailerCard trailer={relatedTrailerCard}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trailer
