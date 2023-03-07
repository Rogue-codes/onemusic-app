import React, { useEffect, useRef, useState } from "react";
import {
  TbPlayerSkipForwardFilled,
  TbPlayerSkipBackFilled,
} from "react-icons/tb";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { useAppContext } from "../context/PlayerProvider";
import { reducerCases } from "../utils/contants";
import { useNavigate } from "react-router-dom";
export default function Controls() {
  const audioRef = useRef();

  console.log(audioRef)

  const navigate = useNavigate();

  const [{ selectedTrack, tracks, isPlaying }, dispatch] = useAppContext();

  const togglePlaying = () => {
    dispatch({ type: reducerCases.SET_PLAYING, isPlaying: !isPlaying });
  };

  const toggleAudio = () => {
    !isPlaying ? audioRef.current.pause() : audioRef.current.play()
  }

  useEffect(() => {
    toggleAudio()
  },[isPlaying])

  const handleNext = () => {
    dispatch({
      type: reducerCases.NEXT_TRACK,
      selectedTrack: selectedTrack === tracks.length - 1 ? 0 : selectedTrack + 1
    });
    navigate(`/playing/${selectedTrack + 1}`);
    toggleAudio()
  }

  const handlePrev = () => {
    dispatch({
      type: reducerCases.NEXT_TRACK,
      selectedTrack:  selectedTrack === 0 ? tracks.length - 1 : selectedTrack - 1
    });
    navigate(`/playing/${selectedTrack - 1}`);
    toggleAudio()
  }


  const selected = tracks[selectedTrack];
  console.log(isPlaying)
  return (
    <div className="w-[10rem] relative text-white-primary h-full flex justify-between items-center">
      <audio
        autoPlay
        src={selected?.song}
        ref={audioRef}
        onEnded={() => {
          navigate(`/playing/${selectedTrack + 1}`);
          handleNext()
        }}
        preload = "true"
      ></audio>
      <TbPlayerSkipBackFilled
        className="cursor-pointer hover:text-blue-100 transition-all"
        size={30}
        onClick={handlePrev}
      />
      <div className="w-[2.62rem] cursor-pointer flex justify-center items-center h-[2.62rem] bg-blue-100 rounded-full" onClick={()=>{
        togglePlaying()
        toggleAudio()
      }}>
        {isPlaying ? (
          <BsPauseFill size={30} />
        ) : (
          <BsPlayFill size={30} />
        )}
      </div>
      <TbPlayerSkipForwardFilled
        className="cursor-pointer hover:text-blue-100 transition-all"
        size={30}
        onClick={handleNext}
      />
    </div>
  );
}
