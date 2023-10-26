import React from 'react'
import SkillItem from '../Components/SkillItem'


const Skills = () => {

   
  const items=[{ id:1,
    img:"https://img.icons8.com/?size=1x&id=v8RpPQUwv0N8&format=png",
    title:"HTML 5"
  },
  { id:2,
    img:"https://img.icons8.com/?size=1x&id=108784&format=png",
    title:"Javascript"
  },
  { id:3,
    img:"https://img.icons8.com/?size=1x&id=7gdY5qNXaKC0&format=png",
    title:"CSS3"
  },
  { id:4,
    img:"https://img.icons8.com/?size=1x&id=bzf0DqjXFHIW&format=png",
    title:"React Js"
  },
  { id:5,
    img:"https://img.icons8.com/?size=1x&id=74402&format=png",
    title:"Mongo DB"
  },
  { id:6,
    img:"https://img.icons8.com/?size=1x&id=84710&format=png",
    title:"Bootstrap 5"
  },
  { id:7,
    img:"https://img.icons8.com/?size=1x&id=3tC9EQumUAuq&format=png",
    title:"Github"
  },
  { id:8,
    img:"https://img.icons8.com/?size=1x&id=4PiNHtUJVbLs&format=png",
    title:"Talwind Css"
  },
  { id:9,
    img:"https://img.icons8.com/?size=1x&id=54087&format=png",
    title:"Node Js"
  },
  { id:10,
    img:"https://img.icons8.com/?size=1x&id=iWw83PVcBpLw&format=png",
    title:"Canva"
  }]


  return (
    <div className='md:my-96'>
         <h1 className='text-6xl font-bold ml-36'>Skills</h1>
         <div className=" md:flex md:flex-wrap flex flex-wrap my-12 ml-36 md:ml-24 items-center " >
          {
            items.map((item)=>{
              return  <>
              
              <div className="" key={item.id}>
              <SkillItem  item={item} />
              </div>
              
              </>
          
            })
          }
        </div>
    </div>
  )
}

export default Skills