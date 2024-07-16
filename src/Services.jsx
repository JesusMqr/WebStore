import { ServiceCard } from "./components/ServiceCard"
import create from './assets/create.svg';
export const Services =()=>{

    const services = [
        {
            icon:create,
            title: 'Diseño responsivo',
            description:
             'Aseguramos que tu sitio web se adapte perfectamente a cualquier dispositivo, desde smartphones hasta computadoras de escritorio. Utilizamos tecnologías modernas para crear diseños fluidos que mejoran la experiencia del usuario.'
        },
        {
            icon:create,
            title: 'SEO',
            description: 
            'Optimizamos tu sitio web para que sea más visible en motores de búsqueda como Google. Implementamos las mejores prácticas de SEO, incluyendo palabras clave, metaetiquetas y contenido de calidad.'
        },
        {
            icon:create,
            title: 'Páginas web Personalizadas',
            description: 
            'Desarrollamos sitios web a medida que se adaptan perfectamente a tus necesidades y objetivos específicos. Creamos diseños únicos y funcionalidades personalizadas que destacan tu marca.'
        }
    ];

    return (
        <section id='services' className="bg-slate-900 w-full py-20">
            <div className=" w-fullmd:max-w-screen-sm xl:max-w-screen-xl m-auto text-center flex flex-col gap-5 p-5 ">
                <h2 className="text-xl md:text-3xl xl:text-4xl uppercase text-emerald-400 font-semibold">
                    Servicios</h2>
                <p className="text-sm md:text-lg xl:text-xl text-gray-300 text-semibold">
                Ofrezco una gama de servicios para ayudarte a destacar en el mundo digital. Mis especialidades incluyen:</p>
                <div className= "  grid grid-cols-1 py-20 gap-10 md:grid-cols-2 xl:grid-cols-3">
                    {
                        services.map(({icon,title, description},index)=>(
                            <ServiceCard key={index} icon={icon} title={title} description={description}/>
                        ))
                    }
                    
                </div>
            </div>
        </section>
    )
}