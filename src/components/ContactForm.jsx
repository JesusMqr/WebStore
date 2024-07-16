import { Label } from './Label';
import { Input } from './Input';
import { TextArea } from './TextArea';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import key from '../Data/key';
export const ContactForm = () => {



    const [mail, setMail] = useState({ user_name: '', message: '', user_email: '' });
    const [alert, setAlert] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMail((prevMail) => ({
            ...prevMail,
            [name]: value
        }));
    };

    const handleAlert =()=>{
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 9000);
    }
    const handleSuccess =()=>{
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 9000);
    }
    const send = async () => {
        try {
            await emailjs.send("service_v2lsqm8", "template_27zhxff", {
                user_name: mail.user_name,
                message: mail.message,
                user_email: mail.user_email,
            }, key);
            handleSuccess();
            setMail({ user_name: '', message: '', user_email: '' });
        } catch (err) {
            handleAlert();

        };
    }

    const sendMail = (e) => {
        e.preventDefault();
        send();
    };

    return (
        <>

            <form onSubmit={sendMail} className='flex flex-col gap-5'>
                <h2 className='uppercase font-bold text-2xl'>Contactame</h2>
                <p className='text-sm text-slate-300'>Llena el formulario a continuación y me pondre en contacto contigo a la brevedad.</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div className='grid grid-row-2 text-start'>
                        <Label text={'Nombre'} />
                        <Input
                            name='user_name'
                            placeholder={'Ingresa tú nombre'}
                            onChange={handleChange}
                            value={mail.user_name}
                        />
                    </div>
                    <div className='grid grid-row-2 text-start'>
                        <Label text={'Correo Electrónico'} />
                        <Input
                            type='email'
                            name='user_email'
                            placeholder={'ejemplo@dominio.com'}
                            onChange={handleChange}
                            value={mail.user_email}
                        />
                    </div>
                </div>
                <div className='col-span-2 grid grid-row-2 text-start'>
                    <Label text={'Mensaje'} />
                    <TextArea
                        name='message'
                        placeholder={'Escribe tu mensaje aquí...'}
                        onChange={handleChange}
                        value={mail.message}
                    />
                </div>
                <div className='text-end'>
                    <button type='submit' className='scale-95 hover:-translate-x-2 hover:scale-105 font-semibold hover:text-emerald-400 transition hover:bg-transparent hover:border-emerald-400 hover:border bg-emerald-400 text-slate-800 px-3 py-2'>Enviar</button>
                </div>
            </form>
            
            <aside className={`z-50 bottom-8 translate-x-2 transition right-5 ${alert ? 'fixed' : 'hidden' }  `   }>
            <div id="alert-2" class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span class="sr-only">Info</span>
                <div class="ms-3 text-sm font-medium">
                    Error al enviar el correo, intente denuevo.
                </div>
                <button type="button" onClick={()=>setAlert(false)} class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-2" aria-label="Close">
                    <span class="sr-only">Close</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
                
            </div>
            </aside>
            <aside className={`z-50 bottom-8 translate-x-2 transition right-5 ${success ? 'fixed' : 'hidden' }  `   }>
            <div id="alert-3" class="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span class="sr-only">Info</span>
                <div class="ms-3 text-sm font-medium">
                    El correo ha sido enviado correctamente.
                </div>
                <button type="button" onClick={()=>setSuccess(false)} class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-3" aria-label="Close">
                    <span class="sr-only">Close</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
                </div>
            </aside>
        </>
    );
};
