import p1 from './p1.png'
import p2 from './p1.png'
import p3 from './p1.png'
import React from 'react'

const Work = () => {
  return (
    <div>
        <h1 className='text-6xl font-bold ml-24 md:ml-32 text-center'>Experience</h1>
        <div className="div my-32 md:flex flex ml-32 md:ml-0 flex-col md:flex-row items-center">
           <div className=" mb-8 md:mb-0 mr-8 shadow-lg w-96 h-96 md:w-72 md:h-96 p-8 transition duration-300 hover:scale-110  rounded-lg md:" style={{backgroundColor:"#00000008"}}>
            <h1 className='text-3xl font-bold'>Task 1</h1>
            <div className="div">
            <img src={p1} alt="" />
          </div>
           </div>
           <div className="bg-blue-200 mr-8 mb-8 md:mb-0 transition duration-300 hover:scale-110 shadow-lg w-96 h-96 md:w-72 md:h-96 p-8 rounded-lg" style={{backgroundColor:"#00000008"}}>
           <h1 className='text-3xl font-bold' >Task 2</h1>
          <div className="div">
            <img src={p2} alt="" />
          </div>
          </div>
         <div className="bg-blue-200 mr-6 transition duration-300 hover:scale-110 shadow-lg w-96 h-96 md:w-72 md:h-96 p-8 rounded-lg" style={{backgroundColor:"#00000008"}}>
 <h1 className='text-3xl font-bold'>Task 3</h1>
 <div className="div">
            <img src={p3} alt="" />
          </div>
         </div>
        </div>
    </div>
  )
}

export default Work