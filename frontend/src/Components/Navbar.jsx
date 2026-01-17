import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const location=useLocation()
    const hideNewBlog= location.pathname==='/blog/add'
    const isLogined=!!localStorage.getItem('access')
    return (
        <>
            <div className='w-full  bg-blue-800 sticky top-0 z-5'>
                <div className='h-14 flex justify-between items-center px-4'>
                    <div className='text-white text-2xl cursor-pointer' ><Link to='/'>BlogsterZone</Link></div>
                    <div className='hidden md:flex gap-6'>
                        <div className='nav-items'><Link to="/" className='w-full block'>Home</Link></div>
                       {!hideNewBlog && isLogined &&<div className='nav-items' ><Link to="/blog/add" className='w-full block'>Create Blog</Link></div>}
                        {isLogined &&<div className='nav-items' ><Link to="/user/blogs" className='w-full block'>My Blogs</Link></div>}
                        {!isLogined &&(<div className='nav-items'><Link to='/login'>Login</Link></div>)}
                       {isLogined && <div className='nav-items'><Link to='/profile' className='block w-full'>Profile</Link></div>}
                    </div>
                
                <button className="md:hidden text-white text-2xl" onClick={() => setOpen(!open)}>
                    ☰
                </button></div>
                {open &&
                    <div className='md:hidden flex flex-col gap-0.5 px-3'>
                        <div className='nav-items'><Link to="/" className='w-full block'>Home</Link></div>
                        {!hideNewBlog && isLogined && <div className='nav-items'><Link to="/blog/add" className='w-full block'>Create Blog</Link></div>}
                        {isLogined && <div className='nav-items'><Link to="/user/blogs" className='w-full block'>My Blogs</Link></div>}
                        {!isLogined&&<div className='nav-items'><Link to='/login'>Login</Link></div>}
                        {isLogined&& <div className='nav-items'><Link to='/profile' className='block w-full'>Profile</Link></div>}
                    </div>
                }
                
            </div>
        </>
    )
}

export default Navbar