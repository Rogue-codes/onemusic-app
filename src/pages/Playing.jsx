import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/PlayerProvider";
import { SlHeart } from "react-icons/sl";
import {BsPauseFill, BsPlayFill} from 'react-icons/bs'
import { reducerCases } from "../utils/contants";
export default function Playing() {
  const { id } = useParams();
  const [{ tracks, isPlaying }, dispatch] = useAppContext();

  const currentlyPlaying = tracks[id];

  const handlePlay = () => {
    dispatch({ type: reducerCases.SET_PLAYING, isPlaying: !isPlaying });
  };

  console.log(currentlyPlaying);
  return (
    <div
      className={`w-[80%] h-[85%] p-5 flex justify-center items-center bg-gradient-to-b from-transparent to-[rgba(0,0,0,1)] bg-[#c99bf5]`}
    >
      <div className="w-full h-[80%] flex gap-5 items-center">
        <div className="w-[200px] h-[200px] rounded">
          <img src={currentlyPlaying.img} alt="" className="rounded" />
        </div>
        <div>
          <h2 className="text-4xl text-white-primary font-bold">
            {currentlyPlaying.name}
          </h2>
          <p className="text-md mt-12 text-white-primary font-normal">
            Artist: {currentlyPlaying.artist}
          </p>
          <div className="w-full flex gap-5 items-center">
            <div
              className="flex items-center cursor-pointer bg-blue-100 justify-between px-5 mt-7 w-[7.62rem] h-[2.4rem] rounded"
              onClick={handlePlay}
            >
              {isPlaying ? (
                <BsPauseFill size={30} />
              ) : (
                <BsPlayFill size={30} />
              )}
              <p className="text-lg font-medium">
                {isPlaying ? "Pause" : "Play"}
              </p>
            </div>

            <div className="parent2 flex items-center cursor-pointer bg-[#ffffff17] text-white-secondary hover:bg-[#ffffff28] justify-between px-5 mt-7 w-[7.62rem] h-[2.4rem] rounded">
              <SlHeart className="child2" size={20} />
              <p className="child2 text-lg font-medium">Like</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
