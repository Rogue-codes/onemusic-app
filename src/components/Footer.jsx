import React, { useState } from "react";
import { useAppContext } from "../context/PlayerProvider";
import Controls from "./Controls";
import { BsRepeat, BsFillVolumeUpFill } from "react-icons/bs";
import { SlHeart, SlShuffle } from "react-icons/sl";
import { AiFillHeart } from "react-icons/ai";
import { reducerCases } from "../utils/contants";

export default function Footer() {
  const [{ tracks, selectedTrack, favorite }, dispatch] = useAppContext();
  const [showVol, setShowVol] = useState(false);

  const handleShowVol = () => {
    setShowVol(!showVol);
  };

  const addToFavorites = () => {
    dispatch({ type: reducerCases.ADD_FAVORITES, favorite: currentlyPlaying });
  };

  const removeFromFavorites = () => {
    dispatch({
      type: reducerCases.REMOVE_FAVORITE,
      favorite: currentlyPlaying,
    });
  };

  const isAlreadyInFavorites = favorite.find(
    (song) => song?.name === tracks[selectedTrack]?.name
  );

  const currentlyPlaying = tracks[selectedTrack];
  return (
    <div className="w-[80%] p-5 h-[15.5%] border-t border-blue-100 bg-[#000] fixed bottom-0 left-[20%] flex justify-between items-center">
      <div className="flex items-center gap-5">
        <img src={currentlyPlaying?.img} width={50} alt="" />
        <div>
          <p className="text-white-primary">{currentlyPlaying?.name}</p>
          <p className="text-white-secondary text-sm">
            {currentlyPlaying?.artist}
          </p>
        </div>
      </div>

      <Controls />

      <div className="w-[10rem] text-white-primary h-full flex justify-center gap-4 items-center">
        <BsRepeat
          className="cursor-pointer hover:text-blue-100 transition-all"
          size={20}
        />
        {isAlreadyInFavorites ? (
          <AiFillHeart
            size={30}
            color="#00ffff"
            onClick={removeFromFavorites}
          />
        ) : (
          <SlHeart
            className="cursor-pointer hover:text-blue-100 transition-all"
            size={20}
            onClick={addToFavorites}
          />
        )}

        <SlShuffle
          className="cursor-pointer hover:text-blue-100 transition-all"
          size={20}
        />

        <BsFillVolumeUpFill
          className="cursor-pointer hover:text-blue-100 transition-all"
          size={20}
          onClick={handleShowVol}
        />
      </div>

      <div
        className={`${
          !showVol ? "top-44 opacity-[0.5]" : "-top-10 opacity-[1]"
        } w-[300px] flex justify-center items-center h-16 right-4 transition-all border border-blue-100 absolute backdrop-blur-sm rounded-md`}
      >
        <input
          // onChange={handleProgress}
          // value={dur ? (currentTime * 100) / dur : 0}
          type="range"
          name="progresBar"
          id="prgbar"
          className="h-[2px] w-[80%]"
        />
      </div>
    </div>
  );
}
