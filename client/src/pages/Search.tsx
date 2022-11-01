import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import SearchForm from '../components/SearchForm'
import TrailerCardHList from '../components/trailer/TrailerCardHList'
import { useLocation, useParams } from 'react-router-dom'

// Store .env value to variable
const backendUrl = process.env.REACT_APP_BACKEND_URL

interface IState {
  trailerList: {
    _id: string;
    title: string
    trailerUrl: string
    coverUrl: string
  }[]
}

const Search = () => {
  let { searchTerm } = useParams()
  const [trailer, setTrailer] = useState<IState['trailerList']>([])
  const [hasLoaded, setHasLoaded] = useState<Boolean>();
  const [hasSearch, setHasSearch] = useState<Boolean>(false);
  const params = new URLSearchParams(window.location.search)
  const search = params.get('search') 

  const checkForOnlyPlusChar = (str: string | undefined) => {
    if (str !== undefined) {
      return new RegExp("^[+\s]+$").test(str)
    }
  }

  if (search === "" || checkForOnlyPlusChar(window.location.search.split('=').pop()) || window.location.search === "") {
    document.title = "Explore - Trailer Paradise"
  } else {
    document.title = `${search} - Trailer Paradise`
  }

  useEffect(() => {
    const getTrailerList = () => {
      if (search !== null || window.location.search !== "") {
        Axios.get(`${backendUrl}/api/trailers/${search}`).then(res => {
          setTrailer((state) => {
            state = res.data
            return state
          })
          setHasLoaded((state) => {
            state = true
            return state
          })
          setHasSearch(true)
        }).catch(err => {
          console.log(err)
        })
      }
      else {
        Axios.get(`http://localhost:4000/api/trailers/`).then(res => {
          setTrailer((state) => {
            state = res.data
            return state
          })
          setHasLoaded((state) => {
            state = true
            return state
          })
          setHasLoaded(true)
        })
      }
    }

    // const getTrailerList2 = () => {
    //   const params = new URLSearchParams(window.location.search)
    //   const search = params.get('search')
    //   console.log(`test: ${search}`)
    //   if (location.pathname === "/explore" || location.pathname === "/explore/") {
    //     setHasSearch(false)
    //     setHasLoaded((state) => {
    //       state = false
    //       return state
    //     })
    //     Axios.get("http://localhost:4000/api/trailers").then(res => {
    //       setTrailer((state) => {
    //         state = res.data
    //         return state
    //       })
    //       console.log(res.data)
    //       setHasLoaded(true)
    //     }).catch(err => {
    //       console.log(err)
    //     })
    //   }
    //   else {
    //     Axios.get(`http://localhost:4000/api/trailers/${searchTerm}`).then(res => {
    //       setHasLoaded((state) => {
    //         state = false
    //         return state
    //       })
    //       setHasSearch(true)
    //       console.log(res.data)
    //       setTrailer((state) => {
    //         state = res.data
    //         return state
    //       })
    //       setHasLoaded(true)
    //       console.log(trailer)
    //     }).catch(err => {
    //       console.log(err)
    //     })
    //   }
    // }
    
    getTrailerList()

  }, [])

  return (
    <div className='max-w-full h-full bg-dark2'>
      <div className='pt-[5rem] md:pt-[5rem]'>
        <div className='grid px-5 gap-10 md:px-5 lg:px-20 py-10 text-white'>
          <div className='max-w-6xl px-3'>
            {hasSearch && window.location.search !== "" && search !== "" && !checkForOnlyPlusChar(window.location.search.split('=').pop()) ? <h2 className='font-bold text-2xl md:text-4xl truncate'>Search results for "{search}</h2>: <h2 className='font-bold text-2xl md:text-4xl'>Search</h2>}
            <SearchForm />
          </div>
          <div className="px-3">
            {hasLoaded ? <TrailerCardHList trailerList={trailer}/>: null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search