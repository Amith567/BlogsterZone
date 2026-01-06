import React from 'react'

const Profile = () => {
const user=   {
  "id": 1,
  "username": "amith_anil",
  "email": "amith.anil@example.com",
  "phone": "+91-9876543210",
  "is_verified": true,
  "profile": {
    "bio": "Full-stack developer interested in security and ZKP",
    "avatar": "https://example.com/avatar.png"
  }
}

  return (
    <div>Profile</div>
  )
}

export default Profile