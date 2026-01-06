import React from 'react'
import Navbar from '../Components/Navbar'


const Profile = () => {
    const user = {
        "id": 1,
        "username": "amith_anil",
        "email": "amith.anil@example.com",
        "phone": "9876543210",
        "profile": {
            "first_name": "Amith",
            "last_name": "Anil",
            "avatar": "https://example.com/media/profiles/amith.jpg",
            "bio": "A Full-stack developer interested in secure systems and Zero-Knowledge Proofs.Full-stack developer interested in secure systems and Zero-Knowledge Proofs.Full-stack developer interested in secure systems and Zero-Knowledge Proofs.Full-stack developer interested in secure systems and Zero-Knowledge Proofs.Full-stack developer interested in secure systems and Zero-Knowledge Proofs.",
            "dob": "2002-06-15",
            "portfolio": "https://amith.dev",
            "facebook": "https://facebook.com/amith.anil",
            "instagram": "https://instagram.com/amith.anil",
            "twitter": "https://twitter.com/amith_anil"
        }
    }
    return (
        <>
            <Navbar />

            <div className='w-full flex flex-col md:flex-row'>
                <section className='w-full md:flex-1 flex justify-center items-center flex-col gap-3'>
                    <p className='mt-2 text-center text-3xl font-semibold md:mt-10 md:mb-10'>Hi {user.profile.first_name} !</p>
                    <div className='rounded-full overflow-hidden w-24 h-24 border-2 border-blue-700'>
                    <img src="src/assets/profile.png" alt="profile" />
                    </div>
                    <p className='text-sm font-semibold'>Username : {user.username}</p>
                    <p className='text-sm'>Email: {user.email}</p>
                    
                    <p className='px-5 md:px-15'><span className='font-semibold'>Bio</span><br />{user.profile.bio}</p>
                    <button className='text-white bg-red-700 px-3 py-2 rounded-md hover:bg-red-800 md:mt-30 text-sm'>Logout</button>
                </section>

                <section className='w-full md:flex-1 flex flex-col items-center justify-center '>

                    <p className='profile-items'>First Name : {user.profile.first_name}</p>
                    <p className='profile-items'>Last Name : {user.profile.last_name}</p>
                    <p className='profile-items'>DOB : {user.profile.dob}</p>
                    <p className='profile-items'>Personal Website : {user.profile.portfolio}</p>
                    <p className='profile-items'>facebook : {user.profile.facebook}</p>
                    <p className='profile-items'>Twitter : {user.profile.twitter}</p>

                    <p className='profile-items'>Phone: {user.phone}</p>
                    <button className='mt-3 md:mt-20 bg-blue-500 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-600'>Edit Profile</button>
                </section>
            </div>

        </>
    )
}

export default Profile