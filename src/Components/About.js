
import React from 'react'
import man from './man (1).png'

const About = () => {
  return (
    <div className='md:my-20 ml-32'>
        <h1 className='text-center md:ml-32  md:my-0  text-6xl font-bold'>About</h1>
        <div className="md:flex flex items-center md:flex-row md:mr-32 flex-col   md:ml-0 my-24 md:items-center">
          <div className="w-72 mb-24">
  <img src={man} alt="" className='w-100 mr-0'/>
          </div>
          <div className="div text-xl md:text-sm">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis molestias a harum facilis necessitatibus?<br/>lorem15<br/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate provident accusamus, porro et facere nemo?<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus ex recusandae ducimus, voluptatum corporis!<br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem perferendis accusantium aut soluta aperiam animi!<br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta eaque molestias, facilis nihil ex dignissimos.<br/></p>
          </div>
        </div>

    </div>
  )
}

export default About