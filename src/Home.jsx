import { BtnContact } from "./components/BtnContact";


import createIcon from './assets/create.svg'
import designIcon from './assets/design.svg'
import webDevIcon from './assets/webDeveloper.svg'
import homeImage from './images/homeImage2.png'

export const Home = () => {
    return (
        <>

            <section className=" px-4 py-40 text-white mx-auto md:p-20  w-full  text-center
            bg-gradient-to-b from-slate-900 from-10% via-sky-500 via-90% to-sky-300-to-30%
            " >
                <div className="max-w-screen-lg mx-auto">
                    <div className="grid  grid-cols-1 md:grid-cols-2">
                        <div className=" text-center md:text-start">

                            <h1 id="home" className="text-4xl font-extrabold uppercase  " > Consigue tu 
                            <span className="text-sky-300"> pagina web </span> 
                             personalizada </h1>
                            <p className="text-lg my-10 ">¿Necesitas una página web personalizada? ¡Estás en el lugar correcto! Transformamos
                                tu visión digital en realidad con diseños exclusivos y funcionalidad avanzada. Creamos sitios web
                                que capturan la esencia de tu marca y elevan la experiencia del usuario.</p>

                        </div>
                        <div className="w-full  ml-auto">
                            
                            <img className="drop-shadow-2xl  " 
                            src={homeImage} alt="" />
                        </div>

                    </div>

                    <div className="mb-10">
                        <h3 className="md:text-start text-center text-xl font-bold mt-5 uppercase mb-5">Servicios:</h3>
                        <div className="grid gap-20  md:grid-cols-2">
                            <ul className="flex  font-semibold flex-col gap-5">
                                <li className="mx-auto md:mx-0 text-center inline-flex gap-2">
                                <img  src={createIcon} alt="" />
                                    Creación de Páginas Web Personalizadas</li>
                                <li className="mx-auto md:mx-0 inline-flex gap-2">
                                    <img src={designIcon} alt="" />
                                    Diseño Adaptable y Atractivo
                                </li>
                                <li className="mx-auto md:mx-0 inline-flex gap-2">
                                    <img src={webDevIcon} alt="" />
                                    Desarrollo de Aplicaciones Web
                                </li>
                            </ul>
                            <div className=" flex items-center justify-center h-full ">
                            <BtnContact />
                        </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}