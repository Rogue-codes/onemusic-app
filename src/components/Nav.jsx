import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [active,setActive] = useState(0)

  const selectActive = (index) =>{
      setActive(index)
      setShowMenu(false)
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const music = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/songs",
      label: "Songs",
    },
    {
      link: "/artist",
      label: "Artist",
    },
    {
      link: "/genre",
      label: "Genre",
    },
    {
      link: "/favorites",
      label: "Favorites",
    },
  ];
  return (
    <div className="w-full lg:w-[85%] h-[3.88rem] border-b border-[#242424] bg-black-main fixed top-0 left-0 lg:left-[15%] z-20 flex justify-between px-5 lg:px-0 lg:justify-center items-center">
      {showMenu ? (
        <FaTimes
          className="text-blue-100 text-2xl z-50 lg:hidden"
          onClick={toggleMenu}
        />
      ) : (
        <AiOutlineMenu
          className="text-blue-100 text-2xl z-50 lg:hidden"
          onClick={toggleMenu}
        />
      )}
      <div>
        <input
          className="lg:w-[21.25rem] py-[7px] px-[26px] bg-[#1f1f1f] text-white-primary rounded-[50px] focus:outline-none"
          type="search"
          name=""
          id=""
          placeholder="Search"
        />
      </div>

      <div
        className={`${
          showMenu ? "translate-x-[0%]" : "-translate-x-[100%]"
        } w-[80%] fixed top-0 left-0 transition-transform border z-40 h-full bg-black-side`}
      >
        <ul className="mt-24 pl-4">
          {music.map((item, index) => (
            <li
              key={index}
              className={`${
                index === active ? "text-blue-100" : "text-white-secondary"
              } mb-8 text-xl cursor-pointer hover:text-blue-100 transition-all`}
              onClick={() => selectActive(index)}
            >
              <Link to={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
