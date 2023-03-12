import React from 'react'
import { afro, gospel, hippop, jazz } from '../assets'

export default function Genre() {
    const data =[
        {
            name:"Pop",
            img:hippop
        },
        {
            name:"Gospel",
            img:gospel
        },
        {
            name:"Jazz",
            img:jazz
        },
        {
            name:"Afro Pop",
            img:afro
        },
    ]
  return (
    <div className='bg-black-main overflow-y-scroll w-[80%] justify-between gap-6 items-center mb-5 h-[85%] py-16 flex flex-wrap px-12'>
        {
            data.map((item,index)=>(
                <div key={index} className="relative w-[12.75rem] h-[12.75rem]">
                    <img src={item.img} className="absolute left-0 top-0 w-full h-full object-cover" alt="" />
                    <p className='relative z-10 text-white-primary px-5 py-3 text-xl font-extrabold'>{item.name}</p>
                </div>
            ))
        }
    </div>
  )
}
