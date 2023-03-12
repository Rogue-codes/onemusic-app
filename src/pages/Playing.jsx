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
      className={`w-[85%] h-[85%] p-5 flex justify-center items-center relative`}
    >
      <img src={currentlyPlaying.img} className="absolute left-0 top w-full h-full object-cover -z-20" alt="" />
      <div className="absolute left-0 top w-full border-2  h-full -z-10 backdrop-blur-md"></div>
      <div className="w-full h-[80%] flex gap-5 items-center ">
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
              {isPlaying ? <BsPauseFill size={30} /> : <BsPlayFill size={30} />}
              <p className="text-lg font-medium">
                {isPlaying ? "Pause" : "Play"}
              </p>
            </div>

            <div
              className="parent2 flex items-center border border-blue-100 gap-4 cursor-pointer bg-[#ffffff17] text-white-secondary hover:bg-[#ffffff28] justify-between px-5 mt-7  h-[2.4rem] rounded"
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
                <p className="child2 text-lg font-medium">remove from favorites</p>
              ) : (
                <p className="child2 text-lg font-medium">Add to favorites</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
