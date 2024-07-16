

import { NavBar } from './components/NavBar'
import { Home } from './Home'
import { Services } from './Services';
import { Products } from './Products';

import { Footer } from './Footer';
import { Contact } from './Contact';





export const App=()=>{
  return (
    <>
      <NavBar/>
      <main className=' text-white ' >
        <Home/>
        <Services/>
        
        <Products/>
        <Contact/>
      </main>
      <footer>
        <Footer/>
      </footer>
      
    </>
  )
}