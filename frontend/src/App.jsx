import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import DetailBlog from './Pages/DetailBlog'
import MyBlogs from './Pages/MyBlogs'
import Profile from './Pages/Profile'
import SignIn from './Pages/Auth/SignIn'
import SignUp from './Pages/Auth/SignUp'
import NewBlog from './Pages/NewBlog'
import EditProfile from './Pages/EditProfile'
import EditBlog from './Pages/EditBlog'

const App = () => {
  return (
    <>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/login" element={<SignIn/>}/>
<Route path="/register" element={<SignUp/>}/>

<Route path='/blog/add' element={<NewBlog/>}/>
<Route path="/blog/:id" element={<DetailBlog/>}/>
<Route path="/user/blogs" element={<MyBlogs/>}/>
<Route path="/blog/:id/edit" element={<EditBlog/>}/>

<Route path="/profile" element={<Profile/>}/>
<Route path='/profile/edit' element={<EditProfile/>}/>

</Routes>
    </>
  )
}

export default App