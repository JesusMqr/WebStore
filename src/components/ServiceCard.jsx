

export const ServiceCard = ({icon,title,description}) => {

    return (
        <article className=" flex  w-full last:justify-self-center last:md:col-span-2 last:md:w-1/2 last:xl:w-full last:xl:col-span-1 ">
            <div className=' bg-emerald-400  rounded-lg aspect-square max-w-12 h-12 p-1 flex' >
                <img src={icon} alt=""  className="aspect-square "/>
            </div>
            <div className='flex flex-col leading-5 gap-3  p-3 text-start'>
                <h3 className='font-bold text-lg md:text-xl xl:text-2xl'>{title}</h3>
                <p className='text-sm md:text-lg xl:text-xl text-gray-300'>{description}</p>
            </div>
        </article>
    )
}