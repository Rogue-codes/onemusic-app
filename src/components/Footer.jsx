import React, { useRef, useState } from "react";
import { useAppContext } from "../context/PlayerProvider";
import Controls from "./Controls";
import {
  BsRepeat,
  BsThreeDots,
  BsFillVolumeUpFill,
  BsRepeat1,
} from "react-icons/bs";
import { SlHeart, SlShuffle } from "react-icons/sl";
import { AiFillHeart } from "react-icons/ai";
import { reducerCases } from "../utils/contants";
import { toast } from "react-toastify";

export default function Footer() {
  const [{ tracks, selectedTrack, favorite, isOnRepeat, isShuffle }, dispatch] =
    useAppContext();
  const [showVol, setShowVol] = useState(false);

  const [volume, setVolume] = useState(0.5);

  const [showMenu,setShowMenu] = useState(false);

  const audioRef = useRef();

  const handleShowVol = () => {
    setShowVol(!showVol);
  };

  const handleVolumeChange = (event) => {
    const volume = parseFloat(event.target.value);
    setVolume(volume);
    audioRef.current.volume = volume;
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

  const handleRepeat = () => {
    dispatch({
      type: reducerCases.TOGGLE_REPEAT,
      isOnRepeat: !isOnRepeat,
    });
  };

  const handleShuffle = () => {
    dispatch({
      type: reducerCases.TOGGLE_SHUFFLE,
      isShuffle: !isShuffle,
    });
  };

  const isAlreadyInFavorites = favorite.find(
    (song) => song?.name === tracks[selectedTrack]?.name
  );

  const currentlyPlaying = tracks[selectedTrack];

  console.log(isShuffle);
  return (
    <div className="w-full lg:w-[85%] p-5 h-[15.5%] border-t border-blue-100 bg-[#000] fixed bottom-0 left-0 lg:left-[15%] flex justify-between items-center">
      <div className="flex items-center gap-5">
        <img src={currentlyPlaying?.img} width={50} alt="" />
        <div>
          <p className="text-white-primary text-xs lg:text-sm">
            {currentlyPlaying?.name}
          </p>
          <p className="text-white-secondary text-xs lg:text-sm">
            {currentlyPlaying?.artist}
          </p>
        </div>
      </div>

      <Controls audioRef={audioRef} volume={volume} />

      <div className="w-[10rem] text-white-primary h-full flex justify-center gap-4 items-center">
        {!isOnRepeat ? (
          <BsRepeat
            className="cursor-pointer hidden lg:block hover:text-blue-100 transition-all"
            size={20}
            onClick={handleRepeat}
          />
        ) : (
          <BsRepeat1
            className="cursor-pointer hidden lg:block text-blue-100 hover:text-blue-100 transition-all"
            size={20}
            onClick={handleRepeat}
          />
        )}
        {isAlreadyInFavorites ? (
          <AiFillHeart
            className="hidden lg:block"
            size={20}
            color="#00ffff"
            onClick={removeFromFavorites}
          />
        ) : (
          <SlHeart
            className="cursor-pointer hidden lg:block hover:text-blue-100 transition-all"
            size={20}
            onClick={addToFavorites}
          />
        )}

        <SlShuffle
          className={`${
            isShuffle ? "text-blue-100" : "text-white"
          } cursor-pointer hidden lg:block hover:text-blue-100 transition-all`}
          size={20}
          onClick={handleShuffle}
        />

        <BsFillVolumeUpFill
          className="cursor-pointer hidden lg:block hover:text-blue-100 transition-all"
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
          min="0"
          max="1"
          step="0.1"
          type="range"
          name="progresBar"
          id="prgbar"
          value={volume}
          onChange={handleVolumeChange}
          className="h-[2px] w-[80%]"
        />
      </div>

      <BsThreeDots className="cursor-pointer text-5xl lg:hidden text-blue-100 hover:text-blue-100 transition-all" onClick={() => setShowMenu(!showMenu)} />

      <div className={`${showMenu ? "bottom-16" : "-bottom-36"} transition-transform w-10 h-32 bg-[#000] flex flex-col justify-around items-center absolute right-2 bottom-16`}>
        {!isOnRepeat ? (
          <BsRepeat
            className="cursor-pointer text-[#fff] hover:text-blue-100 transition-all"
            size={20}
            onClick={()=>{
              handleRepeat
              setShowMenu(!showMenu)
              toast.success("Repeat: On")
            }
            }
          />
        ) : (
          <BsRepeat1
            className="cursor-pointer lg:block text-[#fff] hover:text-blue-100 transition-all"
            size={20}
            onClick={()=>{
              handleRepeat
              setShowMenu(!showMenu)
              toast.warn("Repeat off")
            }
          }
          />
        )}

        {isAlreadyInFavorites ? (
          <AiFillHeart
            className=""
            size={20}
            color="#00ffff"
            onClick={removeFromFavorites}
          />
        ) : (
          <SlHeart
            className="cursor-pointer text-[#fff] hover:text-blue-100 transition-all"
            size={20}
            onClick={addToFavorites}
          />
        )}

        <SlShuffle
          className={`${
            isShuffle ? "text-blue-100" : "text-[#fff]"
          } cursor-pointer hover:text-blue-100 transition-all`}
          size={20}
          onClick={()=>{
            handleShuffle
            setShowMenu(!showMenu)
            toast.warn("Shuffle")
          }
        }
        />
      </div>
    </div>
  );
}
