import React, { useEffect, useState } from "react";
import { aryabanner, bianca, joe, marvin, omahbanner, portable, remabanner, tems } from "../assets";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const image = [remabanner, aryabanner, marvin, bianca, omahbanner,joe,portable,tems];
  const [autoPlay, setAutoPlay] = useState(true);
  const slide = (direction) => {
    direction === "left"
      ? setActiveSlide(activeSlide === 0 ? image.length - 1 : activeSlide - 1)
      : setActiveSlide(activeSlide === image.length - 1 ? 0 : activeSlide + 1);
  };

  useEffect(() => {
    let intervalId
    if (autoPlay) {
      intervalId = setInterval(() => {
        slide("right");
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [activeSlide, image.length, autoPlay]);

  return (
    <div
      className="relative py-5"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <div
        className="w-10 h-20 cursor-pointer absolute flex justify-center items-center left-0 top-[40%] bg-[#00000080]"
        onClick={() => slide("left")}
      >
        <AiOutlineLeft color="white" size={30} />
      </div>
      <div
        className="w-10 h-20 cursor-pointer absolute flex justify-center items-center right-0 top-[40%] bg-[#00000080]"
        onClick={() => slide("right")}
      >
        <AiOutlineRight color="white" size={30} />
      </div>
      {image.map((item, index) => (
        <div
          key={index}
          className={`${
            activeSlide === index ? "block animate-fade" : "hidden"
          } w-[90%] h-[20.8rem] mx-auto rounded-lg`}
        >
          <img src={item} className="w-full h-full object-cover rounded-lg" alt="" />

          <div className="w-[30%] h-5 mx-auto absolute left-[35%] bottom-9 flex justify-center items-center gap-5 rounded-full">
            {image.map((item, index) => (
              <div
                key={index}
                className={`${
                  index === activeSlide
                    ? "bg-white-primary"
                    : "bg-white-secondary"
                } w-2 h-2 rounded-full`}
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
