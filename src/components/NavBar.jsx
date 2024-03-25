

const navItems = [
    {
        path:"#home",
        name:"Inicio"
    },
    {
        path:"#projects",
        name:"Paginas"
    },
    {
        path:"#contact",
        name:"Contacto"
    }
]


export const NavBar=()=>{
    return (
        <nav className="fixed z-50 text-center  w-screen bg-inherit h-12 py-auto  ">
            <ul className=" font-semibold text-lg mx-auto rounded-b-xl bg-slate-100  text-sky-blue-700  shadow-lg h-full max-w-screen-sm flex flex-row gap-16 
            items-center align-middle justify-center">
                {
                    navItems.map(({path,name},index)=>(
                        <li key={index} className="text-sky-blue-700 hover:text-sky-400 hover:scale-110 duration-100">
                            <a href={path}>{name}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}