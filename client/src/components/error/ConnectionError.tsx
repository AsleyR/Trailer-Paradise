import React from 'react'

const ConnectionError = () => {
  return (
    <div>
      <div className="grid">
        <p className='text-lg'>Oops! It seems there was an error while trying to connect to the server.</p>
      </div>
      <p className='text-base font-bold'>(Server Error - 500)</p>
    </div>
  )
}

export default ConnectionError
