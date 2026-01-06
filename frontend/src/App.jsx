import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import DetailBlog from './Pages/DetailBlog'
import MyBlogs from './Pages/MyBlogs'
import Profile from './Pages/Profile'

const App = () => {
  return (
    <>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/blog/:id" element={<DetailBlog/>}/>
<Route path="/user/blogs" element={<MyBlogs/>}/>
<Route path="/profile" element={<Profile/>}/>
</Routes>
    </>
  )
}

export default App