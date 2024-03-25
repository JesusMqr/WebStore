export const ContactItem=({url,icon,title,text})=>{
    return(
        <>
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:shadow-lg
        duration-300 flex gap-3 bg-black/15 rounded-lg p-2 ">
            <a href={url}>
            <img className="bg-white h-full p-2 rounded-lg" src={icon} alt="" />
            </a>
            <div className="text-start">
                <h4 className="text-lg font-bold text-slate-300">{title}</h4>
                <p className="text-base text-white">{text}</p>
            </div>
        </div>
        </>
    )
}