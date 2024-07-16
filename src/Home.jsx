import mockup from './images/mockup.png';


export const Home = () => {

    

    return (
        <>
            <section id='home' className={"bg-[url('./images/banner.jpg')] w-full  h-screen    md:bg-contain bg-center"} >
                <div className='grid lg:grid-cols-2 h-full  w-full  d:max-w-screen-sm xl:max-w-screen-xl m-auto px-6  '>
                    <div className=' flex  flex-col justify-center  gap-5 md:gap-7 xl:gap-10 w-full px-3  '>
                        <h1 className='text-3xl md:text-4xl xl:text-6xl 
                        text-center md:text-start  uppercase font-extrabold'>Consigue tu <strong className='text-emerald-400'>pagina web</strong> personalizada</h1>
                        <p className=' text-sm md:text-lg xl:text-xl
                         text-gray-400 text-center md:text-start font-semibold'>
                            Bienvenido a nuestro servicio de desarrollo web, donde creamos soluciones digitales personalizadas que destacan tu negocio. 
                            nuestro objetivo es proporcionar una presencia en línea que te diferencie y atraiga a tu audiencia. ¡Comienza hoy y descubre cómo podemos
                             ayudarte a llevar tu negocio al siguiente nivel!</p>
                        <div className='w-full text-center mt-5 lg:text-start'>
                            <a  href='#contact' className='  bg-emerald-400 hover:shadow-lg hover:scale-100 scale-95 hover:shadow-emerald-600 transition text-black 
                            font-semibold text-md md:text-lg xl:text-2xl px-10 py-5'>Contactame</a>
                        </div>
                    </div>

                    <div className=' lg:flex items-center hidden'>
                     <img className='w-full ' src={mockup} alt="" />
                    </div>
                    
                    
                    
                </div>
                

            </section>
            
        </>
    )
}