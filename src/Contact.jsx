import { ContactForm } from "./components/ContactForm"
import ContactImage from './images/contact.jpeg';
export const Contact = () => {
    return (
        <>
            <section id="contact" className=" max-w-full px-5
            w-full bg-gradient-to-b
             bg-slate-900">
                <div className="max-w-screen-lg mx-auto py-20 ">
                    <div className="grid grid-cols-1 md:grid-cols-2
                    gap-7 ">
                        <aside >
                            <ContactForm />
                            <div className="text-start mt-10">
                                <h3 className="text-lg font-semibold">Otras formas de contacto:</h3>
                                <ul className="flex flex-wrap gap-5">
                                    <li>
                                        <a href="https://github.com/JesusMqr" className="inline-flex hover:bg-slate-800 px-2 py-1 rounded-full hover:scale-100 scale-95 transition cursor-pointer">
                                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                                        Github
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/jesusmaqueradev/" className="inline-flex hover:bg-slate-800 px-2 py-1 rounded-full hover:scale-100 scale-95 transition cursor-pointer">
                                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" />
                                        <path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>
                                        Linkedin
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://mail.google.com/mail/?view=cm&to=jesusmaquera10@gmail.com" className="inline-flex hover:bg-slate-800 px-2 py-1 rounded-full hover:scale-100 scale-95 transition cursor-pointer">
                                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                                    JesusMaquera10@gmail.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                        <img src={ContactImage} className="rounded hidden h-full md:block " alt="" />
                    </div>
                </div>

            </section>
        </>

    )
}