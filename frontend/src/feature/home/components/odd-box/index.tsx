import { ExtraLargeFont, MediumFont, SmallFont } from "@/components/font";
import { useState } from "react";
import { InfosProps } from "../../models";

type OddBoxType = {
  content: InfosProps;
};

export const OddBox = ({ content }: OddBoxType) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="w-screen flex items-center justify-center h-screen">
      <div className="w-full max-w-6xl flex items-center my-[100px]">
        <div className="w-2/4 flex">
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
            <div className="w-full h-full relative">
              <img
                src="/test/pipeline.jpg"
                alt="pipeline image"
                className="h-[30px] w-[30px] absolute top-3.5 right-3.5 rounded-full"
              />
              <img
                src={content.image}
                alt={content.title_1 + " image"}
                height="350px"
                width="350px"
                className="object-cover h-[350px] rounded-lg"
              />
            </div>
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
      </div>{" "}
    </div>
  );
};
