import React from 'react'
import { useAppContext } from '../context/PlayerProvider'

function Favourites() {
    const [{favorite}] = useAppContext()
  return (
    <div className='bg-black-main overflow-y-scroll w-[85%] mb-5 h-[85%] py-16 px-12'>
      {
        favorite.length === 0 ?(<p className='flex pt-7  text-2xl font-bold justify-center items-center text-white-primary'>No favorites added</p>):
        favorite.map((item,index)=>(
          <div key={index} className='w-full h-5 border-b mt-5 border-[#333] py-5 flex justify-between items-center p-2 text-white-primary'>
            <img src={item.img} alt="" width={30} />
            <p>{item.name}</p>
            <p>{item.artist}</p>
          </div>
        ))
      }          
    </div>
  )
}

export default Favourites