import React from 'react'

const UserProfile = ({params}:any) => {
  return (
    <div>
        <h1>PROFILE</h1>
        <hr />
        <p className="text-4xl">PROFILE PAGE BRUH {params.id} </p>
    </div>
  )
}

export default UserProfile