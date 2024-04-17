import { cn } from "@/utils/cn";
import { getRandom } from "@/utils/random";
import Image from "next/image";
import { useState } from "react";

type BoxCharacterProps = {
  content: {
    title: string;
    url: string;
    image: string;
  };
  className?: string;
};

export const BoxCharacter = ({ content, className }: BoxCharacterProps) => {
  const [hasError, setHasError] = useState(false);
  const images = ["/chog.png", "/moyaki.png", "/molandak.png"];
  const errorImage = getRandom(images);
  return (
    <div
      className={cn(
        "flex flex-col backdrop-filter backdrop-blur-lg w-[250px] bg-background-glass-purple shadow-2xl rounded-xl border-2 border-base-border p-5",
        className
      )}
    >
      <Image
        width="200"
        height="200"
        className="mx-auto object-cover rounded-lg w-full h-[300px]"
        src={hasError ? errorImage : content.image}
        alt={`${content.title} image`}
        onError={() => setHasError(true)}
      />
      <h3 className="text-white text-2xl text-center mt-8 uppercase mb-7 font-gramatika">
        {content.title}
      </h3>
      {/* <p className="text-60 text-xl text-center">
        {content.description?.length > 100
          ? content.description?.slice(0, 100) + "..."
          : content.description}
      </p> */}
      {/* <Button
        className="mx-auto mb-5 hover:scale-105 transition-all duration-300"
        url={content.url}
      >
        Discover more
      </Button> */}
    </div>
  );
};
