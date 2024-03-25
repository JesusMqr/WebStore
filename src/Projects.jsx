import { PageItem } from "./components/PageItem"
import page01 from "./images/page-01.png"

const pages = [
    {
        title:"PhotoGrape",
        image:page01,
        description:"Pagina web de presentacion para PhotoGrape, servicios de fotografias.",
        urlDeploy:"https://photo-grape.vercel.app/",
        tag:[
            {
                name:"Fotografia",
            },
            {
                name:"Pagina Web",
            }
        ]
    }
]


export const Projects = ()=>{
    return (
        <>
        <section id="projects" className="   max-w-screen-sm px-5
        md:max-w-screen-lg mx-auto mt-20 ">
            <h2 className="text-2xl text-sky-blue-600 uppercase font-semibold " >Mis paginas web:</h2>
            <div className="grid  grid-cols-1 p-10 md:p-0 md:grid-cols-3 gap-8 my-10">
                {
                    pages.map(({title,urlDeploy,image,description,tag},index)=>(
                        <PageItem key={index}
                        title={title}
                        image={image}
                        description={description}
                        tag={tag}
                        urlDeploy={urlDeploy}
                        />
                    ))
                }

            </div>
        </section>
        </>
    )
}