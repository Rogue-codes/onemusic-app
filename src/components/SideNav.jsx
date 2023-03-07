import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SideNav() {
    const [active,setActive] = useState(0)

    const selectActive = (index) =>{
        setActive(index)
    }
    const music = [
        {
            link:"/",
            label:"Home"
        },
        {
            link:"/songs",
            label:"Songs"
        },
        {
            link:"/artist",
            label:"Artist"
        },
        {
            link:"/genre",
            label:"Genre"
        },
        {
            link:"/favorites",
            label:"Favorites"
        }
    ]
  return (
    <div className="w-[20%] px-5 h-full bg-black-side">
        <h2 className='font-black text-3xl text-blue-100 mb-10'>One-Music</h2>
            <ul>
                {
                    music.map((item,index)=>(
                        <li key={index} className={`${index === active ? "text-blue-100" : "text-white-secondary"} mb-5 text-lg cursor-pointer hover:text-blue-100 transition-all`} onClick={()=>selectActive(index)}>
                            <Link to={item.link}>{item.label}</Link>
                        </li>
                    ))
                }
            </ul>
    </div>
  )
}
