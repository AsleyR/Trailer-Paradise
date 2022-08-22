import React from 'react'
import { useNavigate } from 'react-router-dom'

interface IProps {
    trailer: {
        id: number;
        url: string;
        imageUrl: string;
        trailerName: string;
    }
}

const TrailerCard = ({ trailer }: IProps) => {
  const navigation = useNavigate()

  return (
    <>
        <li className={`w-full h-full sm:w-full bg-gray grid shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer`} onClick={() => {navigation(`/trailer/${trailer.id}`)}}>
            <img className='mx-auto w-full h-full object-fill rounded' src={trailer.imageUrl}/>
            <div className='relative'>
                <span className='bg-gradient-to-b to-gray2 from-transparent w-full absolute bottom-0 text-base md:text-base lg:text-sm font-bold lg:font-normal text-center text-white pt-10 pb-1 px-5 md:px-1 rounded'>{trailer.trailerName}</span>
            </div>
        </li>
    </>
  )
}

export default TrailerCard
