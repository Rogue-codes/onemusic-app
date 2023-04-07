import React, { useEffect } from "react";
import {
  TbPlayerSkipForwardFilled,
  TbPlayerSkipBackFilled,
} from "react-icons/tb";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { useAppContext } from "../context/PlayerProvider";
import { reducerCases } from "../utils/contants";

export default function Controls({ volume, audioRef }) {

  // destructing InitailState values from useAppContext
  const [
    { selectedTrack, tracks, isPlaying, isOnRepeat, isShuffle },
    dispatch,
  ] = useAppContext();

  const togglePlaying = () => {
    dispatch({ type: reducerCases.SET_PLAYING, isPlaying: !isPlaying });
  };

  const toggleAudio = () => {
    !isPlaying ? audioRef.current.pause() : audioRef.current.play();
  };

  useEffect(() => {
    toggleAudio();
  }, [isPlaying]);

  const rand = Math.floor(Math.random() * tracks.length);
  const track = isShuffle
    ? rand
    : selectedTrack === tracks.length - 1
    ? 0
    : selectedTrack + 1;
  const handleNext = () => {
    dispatch({
      type: reducerCases.NEXT_TRACK,
      selectedTrack: track,
      // selectedTrack === tracks.length - 1 ? 0 : selectedTrack + 1,
    });
    // location.pathname === "/playing" && navigate(`/playing/${selectedTrack + 1}`);
    toggleAudio();
  };

  const handlePrev = () => {
    dispatch({
      type: reducerCases.NEXT_TRACK,
      selectedTrack:
        selectedTrack === 0 ? tracks.length - 1 : selectedTrack - 1,
    });
    // navigate(`/playing/${selectedTrack - 1}`);
    toggleAudio();
  };

  const selected = tracks[selectedTrack];

  console.log(track)

  return (
    <div className="w-full ml-20 lg:w-[10rem] relative text-white-primary h-full flex justify-between items-center">
      <audio
        autoPlay
        src={selected?.song}
        ref={audioRef}
        volume={volume}
        onEnded={() => {
          if (isOnRepeat) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
          } else {
            handleNext();
          }
        }}
        preload="true"
      ></audio>
      <TbPlayerSkipBackFilled
        className="cursor-pointer text-md lg:text-2xl hover:text-blue-100 transition-all"
        // size={30}
        onClick={handlePrev}
      />
      <div
        className="w-6 h-6 lg:w-[2.62rem] cursor-pointer flex justify-center items-center lg:h-[2.62rem] bg-blue-100 rounded-full"
        onClick={() => {
          togglePlaying();
          toggleAudio();
        }}
      >
        {isPlaying ? <BsPauseFill className="text-md lg:text-2xl"  /> : <BsPlayFill className="text-md lg:text-2xl" />}
      </div>
      <TbPlayerSkipForwardFilled
        className="cursor-pointer text-md lg:text-2xl hover:text-blue-100 transition-all"
        // size={30}
        onClick={handleNext}
      />
    </div>
  );
}
