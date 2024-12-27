"use client";

import { useSpecificAuthor } from "@/api/fakeFetch";
import { formatTimestamp } from "@/utils/date";
import { FaRegStar } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export const Recipe = ({ data }) => {
  const { data: author } = useSpecificAuthor(data?.authorID);

  return (
    <div className="max-w-7xl mx-auto w-[90%]">
      <div className="pt-[60px]">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-5">
              <img
                src="/flags/france.png"
                height={50}
                width={50}
                alt="france flag"
                className="max-w-[50px] "
              />

              <h1 className="text-white font-bold text-4xl">{data?.name}</h1>
            </div>
            <p className="text-slate-300 font-normal text-xl mt-5 max-w-[65%]">
              {data?.description}
            </p>

            <div className="flex items-center gap-2.5 mt-5">
              {data?.categories?.map((entry) => (
                <div
                  key={entry}
                  className="bg-slate-500 text-xs text-white w-fit rounded-full h-[30px] px-3 flex items-center justify-center"
                >
                  {entry}
                </div>
              ))}{" "}
            </div>
          </div>
          <p className="text-white font-bold text-2xl w-fit whitespace-nowrap">
            Rating: {data?.rating?.average} ({data?.rating?.total_reviews}{" "}
            reviews)
          </p>
        </div>
        <div className="mt-10 flex">
          <div className="w-[65%] ">
            <img
              src="/recipes/coq-au-vin.jpg"
              className="w-[700px] rounded-md border border-base-border "
            />{" "}
            <div className="flex items-center gap-2.5 max-w-[660px]">
              <img
                src="/recipes/coq-au-vin.jpg"
                className="w-[20%] mt-5 rounded-md border border-base-border "
              />{" "}
              <img
                src="/recipes/coq-au-vin.jpg"
                className="w-[20%] mt-5 rounded-md border border-base-border "
              />{" "}
              <img
                src="/recipes/coq-au-vin.jpg"
                className="w-[20%] mt-5 rounded-md border border-base-border "
              />{" "}
              <img
                src="/recipes/coq-au-vin.jpg"
                className="w-[20%] mt-5 rounded-md border border-base-border "
              />{" "}
              <img
                src="/recipes/coq-au-vin.jpg"
                className="w-[20%] mt-5 rounded-md border border-base-border "
              />{" "}
            </div>
            <div className="flex items-center mt-10">
              <p className="text-white font-normal text-xl">Difficulty:</p>{" "}
              <p className="text-slate-300 font-normal text-xl  ml-2.5">
                {data?.difficulty}
              </p>{" "}
            </div>
            <div className="flex items-center mt-2">
              <p className="text-white font-normal text-xl">Duration:</p>{" "}
              <p className="text-slate-300 font-normal text-xl  ml-2.5">
                {data?.duration}
              </p>{" "}
            </div>
            <p className="text-white font-normal text-2xl mt-10">
              Recipe description:
            </p>
            <p className="text-slate-300 font-normal text-base mt-5 whitespace-pre-line">
              {data?.recipe}
            </p>
          </div>
          <div className="w-[35%]">
            <div className="flex items-center">
              <img
                className="w-[60px] h-[60px] object-cover rounded-full"
                src="/creator/novee.jpg"
              />
              <div className="ml-5">
                <p className="text-white font-bold text-2xl mb-1">
                  {author?.username}
                </p>{" "}
                <p className="text-slate-300 font-bold text-base">
                  {formatTimestamp(data?.created_at)}
                </p>{" "}
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.07)] mt-10 rounded-2xl p-7 min-h-[500px]">
              <div className="flex items-center text-white border-b border-[rgba(255,255,255,0.2)]">
                <p className="text-xl mb-5">Ratings & comments</p>
              </div>
              {data?.rating?.reviews?.map((review, i) => (
                <div
                  key={i}
                  className="py-5 border-b border-[rgba(255,255,255,0.2)]"
                >
                  <div className="flex items-center">
                    <img
                      className="w-[40px] h-[40px] object-cover rounded-full"
                      src="/creator/novee.jpg"
                    />
                    <div className="ml-3">
                      <p className="text-white font-bold text-base mb-1">
                        {author?.username}
                      </p>{" "}
                      <p className="text-slate-300 text-sm">{review?.rating}</p>{" "}
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm mt-2.5">
                    {review?.comment}
                  </p>{" "}
                </div>
              ))}
              <div className="h-fit p-5 rounded-md bg-[rgba(255,255,255,0.1)] w-full mt-5">
                <div className="flex items-center justify-between">
                  <input className=" w-full" placeholder="Review this recipe" />
                  <div className="flex gap-1 text-white text-xl">
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                </div>
                <button className="flex items-center text-white gap-2 mt-5">
                  Send a review <FiSend className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
