import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { FaListUl, FaShare, FaTimes, FaYoutube } from 'react-icons/fa'
import Axios from 'axios'
import TrailerVideo from '../components/trailer/TrailerVideo'
import TrailerCard from '../components/trailer/TrailerCard'

const backendUrl = process.env.REACT_APP_BACKEND_URL

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
  },
  copyInput: {
    copyInput: string | undefined
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
  const [sharePop, setSharePop] = useState<Boolean>()
  const [savePop, setSavePop] = useState<Boolean>()
  const [copyInput, setCopyInput] = useState<IState['copyInput']>({
    copyInput: window.location.href
  })

  // document.title = "Trailer - Trailer Paradise"

  useEffect(() => {
    const getTrailerData = () => {
      Axios.get(`${backendUrl}/api/trailers/id/${trailerId}`).then(res => {
        if (res.status === 200) {
          setTrailer(res.data)
          setHasLoaded(true)
          document.title = `${res.data.title} - Trailer Paradise`
        }
        
      }).catch(err => {
        console.log(err)
        navigation('/error-404')
      })
    }

    const getSingleRandomTrailerData =() => {
      Axios.get(`${backendUrl}/api/trailers/id/random`).then(async (res) => {
        if (res.status === 200) {
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

  const handleCopyInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCopyInput({
      ...copyInput,
      [e.target.name]: e.target.value
    })
  }

  const renderTrailerData = () => {
    return (
      <div className='max-w-7xl justify-self-center w-auto py-3 pr-0 lg:pr-10 text-white transition-all'>
        <div className='justify-self-center'>
          <h1 className='text-2xl md:text-2l font-bold'>{trailer?.title}</h1>
          <p className='font-medium'>{trailer?.releaseDate}</p>
          <div className='w-full'>
            <p className='pt-2 md:pt-1 md:text-base'>{trailer?.description}</p>
          </div>
        </div>
        <div className='mt-3'>
          <div className='flex gap-3'>
            <button onClick={() => setSharePop(true)} className='inline-flex font-bold items-center px-5 py-1 bg-transparent border-2 border-gray2 rounded-sm text-white hover:text-gray-300'>{<FaShare className='mr-2'/>}SHARE</button>
            <button onClick={() => setSavePop(true)} className='inline-flex font-bold items-center px-5 py-1 bg-col1 hover:bg-col2 rounded-sm text-white'>{<FaListUl className='mr-2'/>}SAVE</button>
          </div>
        </div>
      </div>  
    )
  }

  const copyCurrentUrlToClipboard = () => {
    let copyText = copyInput.copyInput

    if (copyText !== undefined) {
      navigator.clipboard.writeText(copyText).then(() => {
        /* 
        ==============================================
        Knowing myself, this piece of code will become
        foreign to me in the near future.
        Good luck to my future self then, aparrently.
        ==============================================
        */
       
       // Selects all text in 'copyInput' input by dispatching a
       // focus event on the 'copyInput' input.
        const copyInput = document.getElementById('copyInput')
        copyInput?.addEventListener('focus', (e: any) => {
          e.target.select()
        })
        let focusEvent = new FocusEvent('focus')
        copyInput?.dispatchEvent(focusEvent)
      }).catch(err => {
        alert(`Something went wrong while trying to copy to clipboard. Check console for more info.`)
        console.log(err)
      })
    }
  }

  const renderSharePopUp = () => {
    return (
      <div className={`fixed z-50 grid justify-center items-center inset-0 w-full h-full`}>
        <div onClick={() => setSharePop(false)}  className="absolute inset-0 z-40 h-full bg-black/50"></div>
        <div className="grid gap-2 z-50 mx-5 px-5 py-5 items-center bg-dark2 ring-1 ring-gray2 text-white rounded-sm">
          <div className="grid grid-cols-2 items-center">
            <h1 className='text-lg'>Share trailer</h1>
            <div onClick={() => {setSharePop(false); console.log(window.location.href)}} className="cursor-pointer justify-self-end">
              <FaTimes className='text-xl hover:text-gray-300'/>
            </div>
          </div>
          <div className="flex gap-3 mb-3 mt-1">
            <div className="cursor-pointer flex flex-col gap-2 justify-center items-center text-center active:ring" onClick={() => setCopyInput({copyInput: window.location.href})}>
              <div className="flex justify-center items-center bg-gray-100 w-14 h-14 rounded-full">
                <img className='w-7 h-full' src="/images/tp-logo.svg" alt="" />
              </div>
              <p className='text-sm'>Trailer Paradise</p>
            </div>
            <div className="cursor-pointer flex flex-col gap-2 justify-center items-center text-center active:ring" onClick={() => setCopyInput({copyInput: `https://youtu.be/${trailer?.trailerUrl.split('embed/').pop()}`})}>
              <div className="flex justify-center items-center bg-col2 w-14 h-14 rounded-full">
                <FaYoutube className='text-3xl'/>
              </div>
              <p className='text-sm'>YouTube</p>
            </div>
          </div>
          <div className="flex bg-gray2 ring-1 ring-gray3 py-4 px-3 gap-4 w-full rounded-[1px]">
            <input id='copyInput' type="text" name='copyInput' value={copyInput.copyInput} onChange={handleCopyInputChange} readOnly
            size={48} className="text-white bg-gray2 w-full rounded-[1px] focus:outline-none focus:outline-blue-500 focus:outline-2"
            />
            <button onClick={copyCurrentUrlToClipboard} className='px-3 bg-col2 hover:bg-col1 transition-all rounded-full'>Copy</button>
          </div>
        </div>
      </div>
    )
  }

  const renderSavePopUp = () => {
    return (
      <div className={`fixed z-50 grid justify-center items-center inset-0 w-full h-full`}>
        <div onClick={() => setSavePop(false)} className="absolute inset-0 z-40 h-full bg-black/50"></div>
        <div className="grid gap-2 z-50 mx-5 px-5 py-5 items-center bg-dark2 ring-1 ring-gray2 text-white rounded-sm">
          <div className="grid grid-cols-2">
            <div className="text-lg">
              <p>Save trailer</p>
            </div>
            <div onClick={() => {setSavePop(false)}} className="cursor-pointer justify-self-end">
                <FaTimes className='text-xl hover:text-gray-300'/>
            </div>
          </div>
          <p className='px-10 py-5 font-bold text-lg text-center'>Coming soon!</p>
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
    <>
    { sharePop ?
      renderSharePopUp():
      null
    }
    { savePop ?
      renderSavePopUp():
      null
    }
    <div className='pt-[6rem] md:pt-[5rem] h-full'>
      <div className='grid grid-cols-1 pb-5'>
        {reloadTrailer ? null : renderTrailerVideo()}
        <div className='grid grid-cols-none md:grid-cols-1'>
          <div className="grid grid-cols-1 md:grid-cols-[auto_auto] gap-3 md:gap-8 lg:gap-2 px-10 lg:px-[10rem] justify-center transition-all">
            {reloadTrailer ? null : renderTrailerData()}
            <div className='flex flex-col py-3 justify-center'>
              <h1 className='text-white text-left lg:text-center text-2xl font-bold pb-3'>Watch next</h1>
              <div className="flex lg:justify-center">
                <div className='w-[10rem] lg:w-32'>
                  <TrailerCard key={'trailerCard'} trailer={relatedTrailerCard}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Trailer
