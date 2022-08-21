import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Profile = () => {
  let { userId } = useParams()

  return (
    <div>
      <h1 className='text-5xl'>This is the profile page of the user with the id of <span className='font-bold'>{userId}</span>.</h1>
    </div>
  )
}

export default Profile
