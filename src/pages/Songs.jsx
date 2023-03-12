import { useAppContext } from "../context/PlayerProvider";
import { SlHeart } from "react-icons/sl";
import { BsPlayFill } from "react-icons/bs";
import { reducerCases } from "../utils/contants";
import { AiFillHeart } from "react-icons/ai";
import { sound } from "../assets";

export default function Songs() {
  const [{ tracks, selectedTrack, isPlaying, favorite }, dispatch] =
    useAppContext();

  const playTrack = (id) => {
    dispatch({ type: reducerCases.ADD_TRACK, selectedTrack: id });
    dispatch({ type: reducerCases.SET_PLAYING, isPlaying: true });
  };

  const curr = tracks[selectedTrack];

  const isAlreadyInFavorites = favorite.find(
    (song) => song.name === curr?.name
  );

  console.log(isAlreadyInFavorites);

  return (
    <div className="bg-black-main w-[85%] pt-16 h-[85%] p-5 px-24 overflow-y-scroll">
      <table className="w-full relative">
        <thead className=" backdrop-blur-sm sticky z-50 top-0 left-0 text-white-primary w-full">
          <tr>
            <th>#</th>
            <th className="text-center flex justify-start mt-4 items-center gap-2">
              Title
            </th>
            <th className="py-4">Artist</th>
            <th className="py-4">Duration</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((item, index) => (
            <tr
              className={`${
                selectedTrack === index && "bg-[#000] hover:bg-[#000]"
              } w-full hover:bg-[#d8d8d81f] text-white-primary`}
              key={index}
            >
              <td className="text-center">{index + 1}</td>
              <td className="parentTd text-center flex justify-start mt-4 items-center gap-2  relative">
                <div className="iconContainer flex justify-center w-8 h-8 bg-[#000] opacity-80 transition-all items-center cursor-pointer invisible absolute left-0 top-0">
                  <BsPlayFill
                    width={30}
                    className="icon"
                    onClick={() => playTrack(index)}
                  />
                </div>
                <img src={item.img} width={30} className="" alt="" />
                <p>{item.name}</p>
                {selectedTrack === index && isPlaying && (
                  <img src={sound} width={50} alt="" />
                )}
              </td>
              <td className="text-center py-4">{item.artist}</td>
              <td className="flex justify-center py-4">
                {item.duration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
