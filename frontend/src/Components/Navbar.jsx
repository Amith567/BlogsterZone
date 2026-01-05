import React, { useState } from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className='w-full  bg-blue-900 sticky top-0 z-5'>
                <div className='h-14 flex justify-between items-center px-4'>
                    <div className='text-white text-2xl cursor-pointer'>BlogsterZone</div>
                    <div className='hidden md:flex gap-6'>
                        <div className='nav-items'>Home</div>
                        <div className='nav-items'>My Blogs</div>
                        <div className='nav-items'>Login</div>
                        <div className='nav-items'>Profile</div>
                    </div>
                
                <button className="md:hidden text-white text-2xl" onClick={() => setOpen(!open)}>
                    ☰
                </button></div>
                {open &&
                    <div className='md:hidden flex flex-col gap-0.5 px-3'>
                        <div className='nav-items'>Home</div>
                        <div className='nav-items'>My Blogs</div>
                        <div className='nav-items'>Login</div>
                        <div className='nav-items'>Profile</div>
                    </div>
                }
                
            </div>
        </>
    )
}

export default Navbar