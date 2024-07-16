
import logo from '../images/logo.png';
import navItems from "../Data/navItems.json";
import { useState } from 'react';
import { motion } from 'framer-motion';


export const NavBar=()=>{

    const [showNav,setShowNav]= useState(false);

    const handleShowNav = ()=>{
        setShowNav(!showNav);
    }


    return (
        <>
        <header className='w-full  fixed z-40 px-auto content-center  '>
            <nav className=" max-w-screen-xl mx-auto  bg-slate-900  text-white
            flex justify-between flex-col lg:flex-row " >
                <div className='flex justify-between w-full'>
                    <div className='flex justify-center align-middle gap-5'>
                        <div className='bg-emerald-400 p-3 flex '>
                        <img src={logo} className='xl:h-20 md:h-14 h-10 self-center' alt="" />
                        </div>
                        <p className=' font-bold self-center text-2xl'>WebStore</p>
                    </div>

                    <button onClick={()=>handleShowNav()} className='lg:hidden bg-emerald-400 px-5 '>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8l16 0" /><path d="M4 16l16 0" /></svg>
                    </button>
                </div>

                <ul  className={` ${showNav ?"flex  justify-center flex-wrap" :"hidden"} lg:flex-nowrap  py-10 lg:py-0
                lg:flex items-center group px-3 gap-3 md:gap-5 md:px-0   font-semibold uppercase text-lg`}>
                    {
                        navItems.map(({name,path},index)=>(
                            <li key={index} className='text-sm md:text-lg  xl:text-xl' >
                                <motion.a 
                                className='hover:text-emerald-400 transition '
                                href={path}
                                >{name}</motion.a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
        
        </>
    )
}