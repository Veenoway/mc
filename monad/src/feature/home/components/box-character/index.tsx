import { Button } from "@/components/button";
import { CharacterProps } from "../../models";

type BoxCharacterProps = {
  content: CharacterProps;
};

export const BoxCharacter = ({ content }: BoxCharacterProps) => {
  return (
    <div className="flex flex-col backdrop-filter backdrop-blur-lg w-[32%] bg-background-glass-purple shadow-2xl rounded-xl border-2 border-base-border p-5 relative">
      <img
        width="200"
        height="200"
        className="mx-auto"
        src={content.image}
        alt={`${content.title} image`}
      />
      <h3 className="text-white text-2xl text-center mb-5 uppercase mt-5">
        {content.title}
      </h3>
      <p className="text-60 text-xl text-center">
        {content.description?.length > 100
          ? content.description?.slice(0, 100) + "..."
          : content.description}
      </p>
      <Button
        className="mx-auto mt-8 mb-5 hover:scale-105 transition-all duration-300"
        url={content.url}
      >
        Learn more
      </Button>
    </div>
  );
};
