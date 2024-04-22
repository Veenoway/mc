import { ExtraLargeFont, MediumFont, SmallFont } from "@/components/font";
import { useState } from "react";

export const OddBox = ({ content, odd }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`w-full flex ${
        odd ? "flex-row" : "flex-row-reverse"
      } items-center my-[200px]`}
    >
      <div className={`w-2/4 flex ${odd ? "justify-start" : "justify-end"}`}>
        <div
          className="flex overflow-hidden justify-center w-fit h-fit relative rounded-lg shadow-2xl border-2 border-60"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div
            className={`absolute ${
              isHover ? "oapacity-100" : "opacity-0"
            } w-full h-full bg-[rgba(0,0,0,0.4)] transition-all duration-300`}
          />
          <a
            href="https://twitter.com/L_Sassol_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`absolute z-10 flex items-center bg-[rgba(0,0,0,0.7)] h-[50px] w-full ${
                isHover ? "bottom-0" : "-bottom-full"
              } transition-all duration-300 border-t border-base-border`}
            >
              <SmallFont className="ml-5">Made by @Lorenzo</SmallFont>
            </div>{" "}
          </a>
          <img
            src={content.image}
            height="350px"
            width="350px"
            className="object-cover h-[350px] rounded-lg"
          />
        </div>
      </div>
      <div className="flex w-3/5 flex-col">
        <ExtraLargeFont className="font-gramatika text-[52px] uppercase font-bold text-black dark:text-white max-w-2/4 leading-[55px] slide-title">
          {content.title_1}
        </ExtraLargeFont>
        <ExtraLargeFont className="font-gramatika text-[52px] uppercase font-bold text-black dark:text-white max-w-2/4 leading-[55px] slide-title">
          {content.title_2}
        </ExtraLargeFont>
        <MediumFont className="max-w-[90%] text-80 mt-5">
          {content.description}
        </MediumFont>
      </div>
    </div>
  );
};
