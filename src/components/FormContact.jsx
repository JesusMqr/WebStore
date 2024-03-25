
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const FormContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_v2lsqm8', 'template_27zhxff', form.current, {
        publicKey: 'gx0_UEZb--GDXyt8m',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form  className=" border-l-2 px-5
     w-full md:max-w-md grid gap-2 text-start mt-10"
     href={form} onSubmit={sendEmail}>
      <div  className="grid gap-2">
        <label  className="text-lg  font-semibold">Nombre</label>
        <input className="bg-black/20  p-2 rounded-lg " type="text" name="user_name" />
      </div>
      <div  className="grid gap-2">
        <label  className="text-lg  font-semibold">Email</label>
        <input className="bg-black/20  p-2 rounded-lg " type="email" name="user_email" />
        </div>
      <div  className="grid gap-2">
        <label  className="text-lg  font-semibold">Message</label>
        <textarea rows={5} className="bg-black/20  p-2 resize-none rounded-lg "name="message" />
      </div>

      <div className="py-4 text-end">
          <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 border-white border-2
          bg-transparent text-white py-2 px-4 rounded-lg
         hover:text-sky-blue-800 hover:bg-white font-semibold "
          type="submit"
          >Enviar
          </button>
        </div>
      
      
      
      
    </form>
  );
};



// export const  FormContact=()=>{

//     return(
//         <>
        
//         <div>
//             <form action="" className="max-w-md grid gap-2 text-start mt-10">
//                 <div className="grid gap-2">
//                     <label className="text-lg  font-semibold" >Correo Electronico:</label>
//                     <input className="bg-black/20  p-2 rounded-lg " type="text" />
//                 </div>
//                 <div  className="grid gap-2">
//                     <label className="text-lg  font-semibold">Nombre:</label>
//                     <input className="bg-black/20 text-white  p-2 rounded-lg " type="text" />
                
//                 </div>
//                 <div className="grid gap-2">
//                     <label className="text-lg font-semibold">Mensaje:</label>
//                     <textarea  className="bg-black/20 p-2 resize-none rounded-lg "
//                     name="" id="" cols="30" rows="10"></textarea>
//                 </div>
//                 <div className="py-4 text-end">
//                     <button className=" border-white border-2
//                      bg-transparent text-white py-2 px-4 rounded-lg
//                      hover:text-sky-blue-800 hover:bg-white font-semibold "
//                     type="submit"
//                     >Enviar</button>
//                 </div>
//             </form>
//         </div>
//         </>

        
//     )
// }