import { SliderProducts } from './components/SliderProducts';

export const Products =()=>{
    return (
        <section id="products" className="bg-slate-950 w-full py-20  px-5 text-center">
            <div className="max-w-screen-xl mx-auto flex flex-col gap-5 ">
            <h2 className="text-3xl uppercase text-emerald-400 font-semibold">Proyectos Realizados</h2>
            <p className="text-gray-300 text-semibold">Explora algunas de las páginas web personalizadas 
                que he desarrollado.</p>
            <div className=" py-10 ">
                <SliderProducts/>
            </div>
            
            </div>
        
        </section>
    )
}