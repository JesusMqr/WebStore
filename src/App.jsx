import { Contact } from './Contact';
import { Home } from './Home'
import { NavBar } from './components/NavBar'
import { Projects } from './Projects';
import './index.css'

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

export const App=()=>{
  return (
    <>
      <header>
      <NavBar/>
      </header>
      <main className=' bg-slate-300' >
      
      <Home/>
      <Projects/>
      <Contact/>
      </main>
      
    </>
  )
}