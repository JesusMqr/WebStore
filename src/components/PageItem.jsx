import { BtnPage } from "./BtnPage"
import { TagItem } from "./TagItem"


export const PageItem=({title,urlDeploy,image,description,tag})=>{
    return(
        <>
            <article className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 w-full rounded-lg  bg-sky-blue-700 text-white shadow-sky-600 shadow-md">
                
                <img src={image} alt="" />
                <div className="p-5">
                    <h3 className="font-bold">{title}</h3>
                    <p >{description}</p>
                    <div className="grid grid-cols-3 gap-4 py-3">
                        {
                            tag.map(({name},index)=>(
                                <TagItem key={index}
                                tagName={name}
                                 />
                            ))
                        }

                        
                    </div>
                    <div className="text-end py-5">
                        <BtnPage urlDeploy={urlDeploy} />
                        
                    </div>
                </div>
                
                

            </article>
        </>
    )
}