// import { Link } from 'react-scroll';
// import React, { useState } from 'react'
// import hacker1 from './hacker1.png'


// const Navbar = () => {


// const[open,setOpen]=useState(false)








//   return (
//     <div classNname=''>
//            <nav className='fixed  py-6 md:pl-32 z-50 shadow-md md:p-4  w-full top-0 left-0' style={{backgroundColor:"#FBFBFB"}}>
//             <div className="md:flex font-abc md:justify-between md:items-center pl-9 md:pl-0 ">
//               <div className="ml-0">
//               <img src={hacker1} alt="Logo" className='w-12 md:mr-96 '/>
//               </div>
//                <div className="md:hidden text-3xl absolute right-8 top-6" onClick={()=>{setOpen(!open)}}>
//                <ion-icon name={`${open ? "close-circle-sharp" :"menu-outline"}`}></ion-icon>
//                </div>

//                 <ul className={`md:flex  md:items-center md:text-right text-2xl md:text-lg md:mr-64 text-black  md:static  absolute transition-all duration-500 pl-9 pb-4 my-32px md:pb-0 md:pl-0  w-72 z-[-1] left-0 h-full  top-0 ${open ? " opacity-100" : "left-[-650px] flex-100"}`}>
//               <li className='mr-8 my-2 py-4 md:py-0 md:my-0 hover:cursor-pointer transform hover:text-purple-400 transition duration-300 md:hover:scale-110 '><Link to="Home" smooth={true} offset={-100} duration={500}>Home</Link></li>
//               <li className='md:mr-12 transform hover:text-purple-400 transition duration-300 md:hover:scale-110 hover:cursor-pointer  '><Link to="About" smooth={true} offset={-100} duration={500}>About</Link></li>
//               <li className='mr-8  my-2  py-4 md:py-0  md:my-0 hover:cursor-pointer transform md:hover:text-purple-400 transition duration-300 md:hover:scale-110 '><Link to="Experience" smooth={true} offset={-100} duration={500}>Experience</Link></li>

//               <li className='mr-8 my-2  py-4 md:py-0 md:my-0 hover:cursor-pointer transform md:hover:text-purple-400 md:transition duration-300 md:hover:scale-110'><Link to="Skills" smooth={true} offset={-100} duration={500}>Skills</Link></li>
//               <li className='mr-8 my-2  py-4 md:py-0 md:my-0 hover:cursor-pointer transform md:hover:text-purple-400 md:transition duration-300 md:hover:scale-110'><Link to="Projects" smooth={true} offset={-100} duration={500}>Projects</Link></li>

//               <li className='mr-8 my-2  py-4 md:py-0 md:my-0 hover:cursor-pointer  transform md:hover:text-purple-400 transition duration-300 md:hover:scale-110 '><Link to="Education" smooth={true} offset={-100} duration={500}>Education</Link></li>
//               {/* <li className='mr-4 hover:cursor-pointer hover:text-gray-900'></li> */}
//               <button className='transform bg-gradient-to-r from-purple-400 to-blue-500 md:hover:bg-purple-400  bg-black text-white md:px-5 text-2xl px-4  py-1 rounded'><Link to="Contact" smooth={true} offset={-100} duration={500}>Contact</Link></button>

//             </ul>
//             </div>
           
//           </nav>
      
//     </div>
//   )}


 

  // export default Navbar


  import React, { useState,useEffect } from 'react'
  // import hacker1 from './hacker1.png'
  import logo from './logo2 (1).png'
  import {Link} from 'react-scroll'
  import { useNavigate } from 'react-router-dom';
  
  
  const Navbar = () => {
  
  
  const[open,setOpen]=useState(false)
  const [isMdScreen, setIsMdScreen] = useState(false);
    const navigate = useNavigate(); 
  
    
    useEffect(() => {
      const handleResize = () => {
        setIsMdScreen(window.innerWidth >= 768); // Adjust the threshold as needed
      };
  
      handleResize(); 
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    
    const handleNavigation = (to) => {
      if (isMdScreen) {
        navigate(to);
      } else {
        window.location.href = `#${to}`;
      }
      setOpen(false);
    };
  
  
    return (
      <div classNname=''>
             <nav className='fixed text-white py-6 md:pl-32 z-50 shadow-md md:shadow-none md:p-4  w-full top-0 left-0' >
              <div className="md:flex font-abc md:justify-between md:items-center pl-9 md:pl-0 ">
                <div className="ml-0 md:ml-32">
                <img src={logo} alt="Logo" className={`w-24 md:mr-96 f ${open ? "hidden" :"block"}`}/>
                </div>
                 <div className={`md:hidden text-3xl  absolute right-8 top-6 ${open ? "text-white" :"text-black"}`} onClick={()=>{setOpen(!open)}}>
                 <ion-icon name={`${open ? "close-circle-sharp" :"menu-outline"}`}></ion-icon>
                 </div>
  
             <ul className={`  md:flex md:items-center  text-xl md:text-lg  md:text-white font-semibold md:bg-white md:static md:mr-72 absolute transition-all duration-500 pl-9  my-32px md:pb-0 md:pl-0 top-0 left-0 py-6 md:py-0 w-full h-screen md:w-96 md:h-0 bg-black z-[-1] md:z-[0] text-white  ${open ? " opacity-100" : "left-[-650px] flex-100"}`}>
             <div className="md:w-100 my-8 md:mr-4 flex items-center transform md:transform-none md:transition-none  md:hover:bg-transparent hover:bg-purple-400 hover:border-none transition duration-500  hover:cursor-pointer border-2 rounded-xl md:border-0 md:rounded-none py-1 pr-4 pl-4 pb-1 md:py-0 md:pr-0 md:pl-0 md:pb-0 w-36"><p className='md:hidden mr-2'><ion-icon name="home-outline"></ion-icon></p> <li className='mr-8 my-2 md:mr-1 md:py-0 md:my-0 hover:cursor-pointer transform md:hover:text-purple-400 transition duration-300 md:hover:scale-110 '><Link to="Home"  smooth={isMdScreen} offset={-100} duration={500}  onClick={() => handleNavigation('home')}>Home</Link></li></div>
                <div className=" md:w-100 my-8 md:mr-4  flex items-center transform md:transform-none md:transition-none  md:hover:bg-transparent hover:bg-purple-400 hover:border-none transition duration-500 hover:cursor-pointer border-2 rounded-xl md:border-0 md:rounded-none py-1 pr-4 pl-4 pb-1 md:py-0 md:pr-0 md:pl-0 md:pb-0  w-36  "><p className='md:hidden mr-2 md:mr-0'><ion-icon name="person-outline"></ion-icon></p><li className={`md:mr-1 mr-8 my-2 transform md:hover:text-purple transition md:hover:text-purple-400 duration-300 md:hover:scale-110 hover:cursor-pointer `}><Link to="About"  smooth={isMdScreen} offset={-100} duration={500}  onClick={() => handleNavigation('About')}>About</Link></li></div>
             <div className=" md:w-100 my-8 md:mr-4  flex items-center transform md:transform-none md:transition-none  md:hover:bg-transparent hover:bg-purple-400 hover:border-none transition duration-500  hover:cursor-pointer border-2 rounded-xl md:border-0 md:rounded-none py-1 pr-4 pl-4 pb-1 md:py-0 md:pr-0 md:pl-0 md:pb-0   w-36 "><p className='md:hidden mr-2 md:mr-0'><ion-icon name="bulb-outline"></ion-icon></p><li className="mr-8 my-2 md:mr-1  md:py-0 md:my-0 hover:cursor-pointer transform md:hover:text-purple-400 md:transition duration-300 md:hover:scale-110"><Link to="Skills" smooth={isMdScreen} offset={-100} duration={500}  onClick={() => handleNavigation('Skills')}>Skills</Link></li></div>
                <div className="my-8 md:w-100 md:mr-4  flex items-center transform md:transform-none md:transition-none  md:hover:bg-transparent hover:bg-purple-400 hover:border-none transition duration-500  hover:cursor-pointer border-2 rounded-xl md:border-0 md:rounded-none py-1 pr-4 pl-4 pb-1 md:py-0 md:pr-0 md:pl-0 md:pb-0   w-36 "><p className='md:hidden mr-2'><ion-icon name="documents-outline"></ion-icon></p><li className='mr-8 my-2 md:mr-1 md:py-0 md:my-0 hover:cursor-pointer transform md:hover:text-purple-400 md:transition duration-300 md:hover:scale-110'><Link to="Projects" smooth={isMdScreen} offset={-100} duration={500} onClick={() => handleNavigation('Projects')}>Projects</Link></li></div>
                 <div className="my-8 md:w-100 md:mr-4  flex items-center transform md:transform-none md:transition-none  md:hover:bg-transparent hover:bg-purple-400 hover:border-none transition duration-500  hover:cursor-pointer border-2 rounded-xl md:border-0 md:rounded-none py-1 pr-4 pl-4 pb-1 md:py-0  w-36"><p className='md:hidden mr-2'><ion-icon name="bag-handle-outline"></ion-icon></p><li className='mr-8 my-2 md:mr-1 md:py-0 md:my-0 hover:cursor-pointer  transform md:hover:text-purple-400 transition duration-300 md:hover:scale-110 '><Link to="Education" smooth={isMdScreen} offset={-100} duration={500}  onClick={() => handleNavigation('Education')}>Education</Link></li></div>
                <button className='transform bg-gradient-to-r from-purple-400 to-blue-500 md:hover:bg-purple-400  bg-black text-white md:px-5 text-sm md:hover:scale-130 transition duration-500 cursor-pointer  py-2 pr-4 pl-4 pb-2 w-36 rounded'><Link to="Contact" smooth={true} offset={-100} duration={500}>Contact</Link></button>
  
              </ul>
              </div>
             
            </nav>
        
      </div>
    )}

    export default Navbar




    // my-8 flex items-center transform md:transform-none md:hover:bg-none md:transition-none md:hover-bg-none hover:bg-purple-400 hover:border-none transition duration-500 md:hover;scale-none hover:scale-110 hover:cursor-pointer border-2 rounded-xl md:border-0 md:rounded-none py-1 pr-4 pl-4 pb-1 md:w- w-36






//     import React, { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';
// import { useNavigate } from 'react-router-dom'; // Import useHistory from React Router

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [isMdScreen, setIsMdScreen] = useState(false);
//   const navigate = useNavigate(); // Initialize history from React Router

//   // Detect screen size and set isMdScreen accordingly
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMdScreen(window.innerWidth >= 768); // Adjust the threshold as needed
//     };

//     handleResize(); // Initial check
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   // Function to handle navigation based on screen size
//   const handleNavigation = (to) => {
//     if (isMdScreen) {
//       // For medium-sized screens, use smooth scroll
//       navigate(to);
//     } else {
//       // For small screens, use React Router navigation
//       window.location.href = `#${to}`;
//     }
//     setOpen(false); // Close the navigation menu if it's open
//   };

//   return (
//     <div className="">
//       <nav className="fixed py-6 md:pl-32 z-50 shadow-md md:p-4 w-full top-0 left-0" style={{ backgroundColor: "#FBFBFB" }}>
//         {/* ... Your navigation content ... */}
//         <div className="my-8 flex items-center transform md:transform-none md:transition-none md:hover:bg-transparent hover:bg-purple-400 hover:border-none transition duration-500 md:hover scale-none hover:scale-110 hover:cursor-pointer border-2 rounded-xl md:border-0 md:rounded-none py-1 pr-4 pl-4 pb-1 md:py-0 md:pr-0 md:pl-0 md:pb-0 w-36">
//           <p className="md:hidden mr-2">
//             <ion-icon name="home-outline"></ion-icon>
//           </p>
//           <li className="mr-8 my-2 md:mr-1 md:py-0 md:my-0 hover:cursor-pointer transform md:hover:text-purple-400 transition duration-300 md:hover scale-110">
//             <Link
//               to="Home"
//               smooth={isMdScreen} // Set the smooth attribute based on screen size
//               offset={-100}
//               duration={500}
//               onClick={() => handleNavigation('home')} // Handle navigation based on screen size
//             >
//               Home
//             </Link>
//           </li>
//           <li className="mr-8 my-2 md:mr-1 md:py-0 md:my-0 hover:cursor-pointer transform md:hover:text-purple-400 transition duration-300 md:hover scale-110">
//             <Link
//               to="About"
//               smooth={isMdScreen} // Set the smooth attribute based on screen size
//               offset={-100}
//               duration={500}
//               onClick={() => handleNavigation('about')} // Handle navigation based on screen size
//             >
//               About
//             </Link>
//           </li>
//         </div>
//         {/* ... Repeat the above pattern for other links ... */}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
