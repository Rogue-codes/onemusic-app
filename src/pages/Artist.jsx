import React from 'react'
import { useAppContext } from '../context/PlayerProvider'

export default function Artist() {
  const [{artist}] = useAppContext()
  return (
    <div className='bg-black-main overflow-y-scroll w-full lg:w-[85%] justify-between gap-6 items-center mb-5 h-[85%] py-16 flex flex-wrap px-12'>
        {
          artist.map((item, index) =>(
            <div key={index} className='w-16 h-16 lg:w-[14.75rem] lg:h-[14.75rem] mt-6 rounded-full'>
              <img src={item.img} alt="" className='w-full h-full rounded-full object-cover' />
              <p className='text-white-primary text-center py-2'>{item.text}</p>
            </div>
          ))
        }
    </div>
  )
}
