import {ContactItem} from './ContactItem.jsx';
import WhatsappIcon from '../assets/whatsapp.svg';
import MailIcon from '../assets/mail.svg';
import FacebookIcon from '../assets/facebook.svg';


const contact = [
    {
        url:"https://wa.me/51966021962",
        title:"Whatsapp",
        icon:WhatsappIcon,
        text:"+51 966021962"
    },
    {
        url:"https://mail.google.com/mail/?view=cm&to=jesusmaquera10@gmail.com",
        title:"Correo electronico",
        icon:MailIcon,
        text:"jesusmaquera10@gmail.com"
    },
    {
        url:"https://www.facebook.com/profile.php?id=61557296086820&locale=es_LA",
        title:"Facebook",
        icon:FacebookIcon,
        text:"JMCode"
    }
]

export const ContactList =()=>{
    return(
        <>
            <h2 className="text-start text-3xl mb-3 font-bold text-white " >Contacto</h2>
                    
            <div className="grid grid-cols-1 gap-4">
                {contact.map(({url,title,icon,text},index)=>(
                    <ContactItem key={index}
                    url={url}
                    title={title}
                    icon={icon}
                    text={text}
                    />
                ))}
            </div>
        </>
    )
}