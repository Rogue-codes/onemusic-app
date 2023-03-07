import React from 'react'

export default function Nav() {
  return (
    <div className='w-[80%] h-[3.88rem] border-b border-[#242424] bg-black-main fixed top-0 left-[20%] z-20 flex justify-center items-center'>
        <div>
            <input className='w-[21.25rem] py-[7px] px-[26px] bg-[#1f1f1f] text-white-primary rounded-[50px] focus:outline-none' type="search" name="" id="" placeholder="Search" />
        </div>
    </div>
  )
}
