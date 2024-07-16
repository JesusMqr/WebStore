import { useEffect } from "react";
import navItems from "./Data/navItems.json";
import { motion } from "framer-motion";




export const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <>
            <section id="footer" className="bg-slate-950 text-white px-5 lg:px-0 ">
                <div className="mx-auto max-w-screen-xl flex flex-col md:flex-row gap-10 justify-between  py-10 text-center ">
                    <span className="text-sm">
                    © {year} developed by Jesus Maquera.
                    </span>
                    <ul className="flex justify-center  gap-3 border-red-500   ">
                    {
                        navItems.map(({name,path},index)=>(
                            <li key={index} className='text-sm md:text-md ' >
                                <motion.a 
                                className='hover:text-emerald-400 transition hover:underline '
                                href={path}
                                >{name}</motion.a>
                            </li>
                        ))
                    }
                    </ul>
                    
                </div>
            </section>
        </>
    );
};
