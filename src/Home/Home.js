
import React from 'react'
import Navbar from '../Components/Navbar';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Education from '../Components/Education';
import Contact from '../Components/Contact';
import HomePage from '../Components/HomePage';
import Work from '../Components/Work';
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';



const Home = () => {
  return (
   
        <div className=' '>
           <Navbar/>
         <hr />
         <div className="div my-32 items-center flex-col" id='Home'>  
            <HomePage/>
         </div>
         <div className="div flex items-center flex-col" id='About'>  
            <About/>
         </div>
         <div className="div my-32 flex items-center flex-col" id='Experience'>  
            <Work/>
         </div>
         <hr />
         <div className="div my-32"  id='Skills' >
            <Skills/>
         </div>
         <div className="div my-32"  id='Projects' >
            <Projects/>
         </div>
        
         <div className="div my-32 md:my-2" id='Education'>
            <Education/>
         </div>
         <div className="div my-32" id='Contact'>
            <Contact/>
         </div>
         <div className="div">
            <Footer/>
         </div>
        </div>
      );
    }
    
 

export default Home