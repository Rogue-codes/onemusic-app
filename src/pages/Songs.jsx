import React from "react";
import { useAppContext } from "../context/PlayerProvider";
import { SlHeart } from "react-icons/sl";

export default function Songs() {
  const [{ tracks }] = useAppContext();
  return (
    <div className="bg-black-main w-[80%] pt-16 h-[85%] p-5 px-24 overflow-y-scroll">
      <table className="w-full relative">
        <thead className=" backdrop-blur-sm sticky top-0 left-0 text-white-primary w-full">
          <tr>
            <th>#</th>
            <th className="text-center flex justify-start mt-4 items-center gap-2">Title</th>
            <th className="py-4">Artist</th>
            <th className="py-4">Actions</th>
          </tr>
        </thead>
          {tracks.map((item, index) => (
            <tr className=" w-full text-white-primary"  key={index}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center flex justify-start mt-4 items-center gap-2"><img src={item.img} width={30} className="" alt="" /><p>{item.name}</p></td>
              <td className="text-center py-4">{item.artist}</td>
              <td className="flex justify-center py-4"><p><SlHeart className="child2" size={20} /></p></td>
            </tr>
          ))}
      </table>
    </div>
  );
}
