import { Button } from "@/components/button";
import { CharacterProps } from "../../models";

type BoxCharacterProps = {
  content: CharacterProps;
};

export const BoxCharacter = ({ content }: BoxCharacterProps) => {
  return (
    <div className="flex flex-col w-[32%] bg-background-purple rounded-xl border-base-border p-5 shadow-2xl">
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
      <p className="text-60 text-xl text-center">{content.description}</p>
      <Button
        className="mx-auto mt-8 mb-5 hover:scale-105 transition-all duration-300"
        url={content.url}
      >
        Learn more
      </Button>
    </div>
  );
};
