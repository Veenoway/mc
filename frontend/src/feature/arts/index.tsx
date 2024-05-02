"use client";
import { fetchDiscordMemes } from "@/api/fetchDiscordMemes";
import { ExtraLargeFont, LargeFont } from "@/components/font";
import { useQuery } from "@tanstack/react-query";

export const Arts = () => {
  const { data: memes, isLoading } = useQuery({
    queryFn: async () => fetchDiscordMemes(),
    queryKey: ["discord-memes"],
  });
  return (
    <div
      className="py-[50px] h-auto min-h-screen"
      style={{
        backgroundImage:
          "radial-gradient(at right bottom, #0d0021, #200052 80%, #200052)",
      }}
    >
      <div className="w-full max-w-[1200px] flex flex-col mx-auto">
        <ExtraLargeFont className="mb-5">Community Arts & Meme</ExtraLargeFont>
        {isLoading ? (
          <div className="flex flex-col mx-auto my-[100px]">
            <img src="/pepe.gif" height="400" width="400" alt="pepe dancing" />
            <LargeFont className="text-center mt-5">Loading...</LargeFont>
          </div>
        ) : (
          <div className="flex justify-between flex-wrap w-full">
            {memes?.map((meme) => {
              const author = meme?.author;
              const username =
                author?.global_name || author?.username || "Unknown";
              return (
                <div className="bg-background-purple p-5 rounded-2xl border-2 border-base-border shadow-xl w-[32%] mb-5">
                  <h3 className="text-white text-xl uppercase mb-5">
                    {username}
                  </h3>
                  {/* <p className="text-60 text-base">{meme?.content}</p> */}
                  {meme?.attachments?.map((attachment) => (
                    <img
                      className="h-[300px] rounded-xl object-cover mt-5"
                      width="400"
                      height="400"
                      src={attachment?.url}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
