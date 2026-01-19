import { useEffect, useState } from "react"
import { UserProfile } from "../api/auth.api"
import { useParams } from "react-router-dom"

const UsersProfile = () => {
    const { id } = useParams()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const getUsersProfile = async () => {
            try {
                const res = await UserProfile(id)
                setUser(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getUsersProfile()
    }, [id])

    if (!user) {
        return <p>loading...</p>
    }
    return (
        <>
            <div className="w-full h-screen flex flex-col md:flex-row">
                <div className='w-full flex flex-col md:flex-row'>
                    <section className='w-full md:flex-1 flex justify-center items-center flex-col gap-3'>
                        <div className='rounded-full overflow-hidden w-24 h-24 border-2 border-blue-700'>
                            <img src={`http://127.0.0.1:8000${user.profile.avatar}`} alt="profile" />
                        </div>
                        <p className='text-sm font-semibold'>Username : {user.username}</p>
                        <p className='text-sm'>Email: {user.email}</p>
                        <p className='px-5 md:px-15'><span className='font-semibold'>Bio</span><br />{user.profile.bio}</p>
                    </section>
                    <section className='w-full md:flex-1 flex flex-col items-center justify-center '>
                        <p className='profile-items'>First Name : {user.profile.first_name}</p>
                        <p className='profile-items'>Last Name : {user.profile.last_name}</p>
                        <p className='profile-items'>DOB : {user.profile.dob}</p>
                        <p className='profile-items'>Personal Website : {user.profile.portfolio}</p>
                        <p className='profile-items'>facebook : {user.profile.facebook}</p>
                        <p className='profile-items'>Twitter : {user.profile.twitter}</p>
                        <p className='profile-items'>Phone: {user.phone}</p>
                    </section>
                </div>
            </div>
        </>
    )
}

export default UsersProfile