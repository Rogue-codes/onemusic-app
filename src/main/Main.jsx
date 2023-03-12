import React from 'react'
import Body from '../components/Body'
import Nav from '../components/Nav'

export default function Main() {
  return (
    <div className='w-[85%] h-[85%] flex justify-center items-center'>
        <div className="w-full h-full overflow-y-scroll relative bg-black-main">
            <div className='w-full h-full'>
                <Body/>
            </div>
        </div>
    </div>
  )
}