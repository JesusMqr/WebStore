


export const BtnPage=({urlDeploy})=>{
    return(
        <>
        
        <a className="bg-white rounded-lg  shadow-md 
         inline-flex text-blue-950 p-3"
            href={urlDeploy}>
                
            <p className="text-sky-blue-600 font-semibold" >Ver pagina</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="text-sky-blue-600 icon icon-tabler 
            icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5"
             stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path
              stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" 
              /><path d="M15 8l4 4" /></svg>
        </a>
        </>
        
    )

}