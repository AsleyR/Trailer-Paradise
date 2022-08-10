import React from 'react'
import { useParams } from 'react-router-dom'

const Trailer = () => {
  let { trailerId } = useParams()

  const renderTrailer = () => {
    return (
      <iframe width="560" height="315" 
      src="https://www.youtube.com/embed/AAZYIRhAyl0" title="YouTube video player" 
      frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen>
      </iframe>
    )
  }

  return (
    <div>
      <h1>FOOT</h1>
      <p>LAMO, this is the trailer with the id of {trailerId}</p>
      {renderTrailer()}
    </div>
  )
}

export default Trailer
