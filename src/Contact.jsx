import { ContactList } from "./components/ContactList"
import { FormContact } from "./components/FormContact"

export const Contact=()=>{
    return(
        <>
            <section id="contact" className=" max-w-full px-5
            w-full bg-gradient-to-b
             from-sky-500 to-slate-900
              text-white">
                <div className="max-w-screen-lg mx-auto py-20 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-2
                    gap-10 ">
                        
                        <div>
                            <ContactList/>
                        </div>
                        <div >
                            <FormContact/>

                        </div>
                    </div>
                </div>

            </section>
        </>

    )
}