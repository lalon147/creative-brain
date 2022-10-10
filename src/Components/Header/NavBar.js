import React from 'react';
import logo from "../../logo.jpg"
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
           <nav className='grid grid-cols-2 bg-slate-600 px-3 py-2 rounded-lg'>
                   <div className='flex  items-center'>
                      <h1 className='text-2xl font-bold mr-2'>CREATIVE BRAIN</h1>
                      <img className='w-20 rounded-lg' src={logo} alt=""/>
                   </div>
                   <div>
                       <ul className='flex justify-between pt-4 px-4'>
                          <li><Link className='text-none text-xl' to="/">Topics</Link></li>
                          <li><Link className='text-none text-xl' to="/blog">Blogs</Link></li>
                          <li><Link className='text-none text-xl' to=""> About</Link></li>
                       </ul>
                   </div>
            </nav>   
        </>
    );
};

export default NavBar;