import React from "react";
import { useAppContext } from "../context/PlayerProvider";
// import { AiFillClockCircle } from "react-icons/ai";

export default function Songs() {
  const [{ tracks }] = useAppContext();
  return (
    <div className="bg-black-main w-[80%] h-[85%] p-5">
      <div className="flex justify-between px-24 items-center gap-4 border mt-16 bg-[#000000dc]">
        <div className="col-span-1 sm:col-span-4 lg:col-span-1/3  text-white-primary">
          <span>#</span>
        </div>
        <div className="col-span-1 sm:col-span-4 lg:col-span-1/3  text-white-primary">
          <span>TITLE</span>
        </div>
        <div className="col-span-1 sm:col-span-4 lg:col-span-1/3  text-white-primary">
          <span>ALBUM</span>
        </div>
      </div>

      <div>
        {tracks.map((item, index) => (
          <div key={index} className="flex justify-between px-24 items-center gap-4">
            <div className="  text-white-primary">
              <span>{index+1}</span>
            </div>
            <div className=" text-left text-white-primary">
              <span>{item.name}</span>
            </div>
            <div className=" text-left text-white-primary">
              <span>{item.artist}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
