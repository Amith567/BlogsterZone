import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { GetProfile, UpdateProfile } from '../api/auth.api'

const EditProfile = () => {
  const navigate = useNavigate()

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  const [first_name, setFname] = useState('')
  const [last_name, setLname] = useState('')
  const [bio, setBio] = useState('')
  const [dob, setDob] = useState('')
  const [portfolio, setPortfolio] = useState('')
  const [twitter, setTwitter] = useState('')
  const [facebook, setFacebook] = useState('')
  const [photo, setPhoto] = useState(null)

  /* ================= LOAD PROFILE ================= */
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const res = await GetProfile()
        const data = res.data

        setUsername(data.username || '')
        setPhone(data.phone || '')
        setBio(data.profile?.bio || '')
        setFname(data.profile?.first_name || '')
        setLname(data.profile?.last_name || '')
        setPortfolio(data.profile?.portfolio || '')
        setFacebook(data.profile?.facebook || '')
        setTwitter(data.profile?.twitter || '')
        setDob(data.profile?.dob || '')
      } catch (err) {
        setError('Failed to load profile')
      }
    }

    loadProfile()
  }, [])

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const payload = new FormData()

      if (username.trim()) payload.append('username', username)
      if (phone.trim()) payload.append('phone', phone)

      if (first_name.trim()) payload.append('profile.first_name', first_name)
      if (last_name.trim()) payload.append('profile.last_name', last_name)
      if (bio.trim()) payload.append('profile.bio', bio)
      if (portfolio.trim()) payload.append('profile.portfolio', portfolio)
      if (twitter.trim()) payload.append('profile.twitter', twitter)
      if (facebook.trim()) payload.append('profile.facebook', facebook)

      if (dob) payload.append('profile.dob', dob)

      if (photo) payload.append('profile.avatar', photo)

      await UpdateProfile(payload)
      navigate('/profile')
    } catch (err) {
      setError(err?.response?.data || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <p>Loading...</p>

  return (
    <>
      <Navbar />

      <div className="w-full flex justify-center mt-4">
        <section className="w-sm lg:min-w-4xl border border-blue-800 rounded-xl mb-5">
          <p className="text-2xl font-semibold text-center bg-blue-800 text-white w-full py-3 rounded-t-xl">
            Edit Profile
          </p>

          <form className="px-3" onSubmit={handleSubmit}>
            {error && (
              <div className="mt-3 mb-3 text-xs text-red-500 text-center">
                {error}
              </div>
            )}

            <div className="mt-3 mb-3 flex gap-3">
              <div className="flex-1">
                <label className="label-items">User Name</label>
                <input
                  type="text"
                  className="inp-items"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="flex-1">
                <label className="label-items">Phone</label>
                <input
                  type="tel"
                  className="inp-items"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 flex gap-3">
              <div className="flex-1">
                <label className="label-items">First Name</label>
                <input
                  type="text"
                  className="inp-items"
                  value={first_name}
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>

              <div className="flex-1">
                <label className="label-items">Last Name</label>
                <input
                  type="text"
                  className="inp-items"
                  value={last_name}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-3 mb-3">
              <label className="label-items">Bio</label>
              <textarea
                className="inp-items h-32"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>

            <div className="mt-3 mb-3 flex gap-3">
              <div className="flex-1">
                <label className="label-items">Portfolio</label>
                <input
                  type="text"
                  className="inp-items"
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                />
              </div>

              <div className="flex-1">
                <label className="label-items">Facebook</label>
                <input
                  type="text"
                  className="inp-items"
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-3 mb-3 flex gap-3">
              <div className="flex-1">
                <label className="label-items">Twitter</label>
                <input
                  type="text"
                  className="inp-items"
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                />
              </div>

              <div className="flex-1">
                <label className="label-items">DOB</label>
                <input
                  type="date"
                  className="inp-items"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
            </div>

<div className="mt-3 mb-3">
  <label className="label-items">Profile Photo</label>
  <input
    type="file"
    accept="image/*"
    className="inp-items"
    onChange={(e) => {
      const file = e.target.files[0]
      if (!file) return

      setPhoto(file)
      
    }}
  />
</div>

            <div className="mt-4 mb-3 flex justify-center">
              <button
                type="submit"
                className="bg-blue-800 py-2 px-5 text-white rounded-md hover:bg-blue-900"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}

export default EditProfile
