import { useParams } from "react-router-dom";
import { useAppContext } from "../context/PlayerProvider";
import { SlHeart } from "react-icons/sl";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { reducerCases } from "../utils/contants";
export default function Playing() {
  const { id } = useParams();
  const [{ tracks, isPlaying, selectedTrack, favorite }, dispatch] =
    useAppContext();

  const currentlyPlaying = tracks[selectedTrack];

  const handlePlay = () => {
    dispatch({ type: reducerCases.ADD_TRACK, selectedTrack: id });
    dispatch({ type: reducerCases.SET_PLAYING, isPlaying: !isPlaying });
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
    (song) => song.name === tracks[selectedTrack].name
  );

  return (
    <div
      className={`w-full lg:w-[85%] h-[85%] p-5 flex justify-center items-center relative`}
    >
      <img src={currentlyPlaying.img} className="absolute left-0 top w-full h-full object-cover -z-20" alt="" />
      <div className="absolute left-0 top w-full  h-full -z-10 backdrop-blur-md"></div>
      <div className="w-full mt-8 lg:mt-0 h-[80%] flex flex-col lg:flex-row gap-5 items-start lg:items-center ">
        <div className=" w-full h-44 lg:w-[200px] lg:h-[200px] rounded">
          <img src={currentlyPlaying.img} alt="" className="rounded w-full object-cover h-full" />
        </div>
        <div>
          <h2 className="text-lg lg:text-4xl text-white-primary font-bold">
            {currentlyPlaying.name}
          </h2>
          <p className="text-md mt-4 lg:mt-12 text-white-primary font-normal">
            Artist: {currentlyPlaying.artist}
          </p>
          <div className="w-full flex gap-5 items-center">
            <div
              className="flex items-center cursor-pointer bg-blue-100 justify-between px-5 mt-7 w-[7.62rem] h-[2.4rem] rounded"
              onClick={handlePlay}
            >
              {isPlaying ? <BsPauseFill size={30} /> : <BsPlayFill size={30} />}
              <p className="text-md lg:text-lg font-medium">
                {isPlaying ? "Pause" : "Play"}
              </p>
            </div>

            <div
              className="parent2 flex justify-start items-center border border-blue-100 gap-4 cursor-pointer bg-[#ffffff17] text-white-secondary hover:bg-[#ffffff28]  px-5 mt-7  h-[2.4rem] rounded"
              onClick={() => {
                isAlreadyInFavorites ?
                removeFromFavorites():
                addToFavorites()
              }}
            >
              {isAlreadyInFavorites ? (
                <AiFillHeart
                  size={30}
                  color="#00ffff"
                  // onClick={removeFromFavorites}
                />
              ) : (
                <SlHeart
                  className="child2"
                  size={20}
                  // onClick={}
                />
              )}
              {isAlreadyInFavorites ? (
                <p className="child2 text-md lg:text-lg font-medium">remove</p>
              ) : (
                <p className="child2 text-md lg:text-lg font-medium">Add</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
