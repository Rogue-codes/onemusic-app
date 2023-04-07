import React from "react";
// import { data } from "../utils/data";
import { BsPlayFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/PlayerProvider";
import { reducerCases } from "../utils/contants";
export default function Explore() {
    const [{tracks},dispatch] = useAppContext()
    const navigate = useNavigate()

    const playTrack = (id) => {
      dispatch({type:reducerCases.ADD_TRACK,selectedTrack:id})
      navigate(`/playing/${id}`)
    }
    
  return (
    <div className="flex justify-between items-center flex-wrap px-5">
      {tracks.map((item, index) => (
        <div className="parent w-32 lg:w-44 h-44 mt-2 lg:mt-9 relative cursor-pointer" key={index}>
          <img src={item.img} alt="" className="rounded-lg" />
          <p className="text-white-secondary text-sm">{item.name}</p>
          <div className="child absolute opacity-0 w-full h-full top-0 left-0 flex justify-center items-center bg-[#2021239f]">
            <div className="w-16 h-16 rounded-full flex justify-center items-center bg-[#0000009f]">
              <BsPlayFill size={30} color="white" onClick={()=>playTrack(index)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
