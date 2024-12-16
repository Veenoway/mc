import { Home } from "@/feature/home";
import { DiscordMessage } from "@/feature/home/models";
import { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Monad Lore",
  description:
    "Monad Lore allow users to discover the lore of Monad. It will allow users to fight for his house by playing games.",
};

export const fetchData = async (): Promise<{ memes: DiscordMessage[] }> => {
  const API_KEY = process.env.NEXT_PUBLIC_DISCORD_KEY;
  const query = await fetch(
    `https://discord.com/api/v9/channels/1191785265228939344/messages?limit=50`,
    {
      headers: {
        Authorization: API_KEY as string,
      },
    }
  );

  const memes: DiscordMessage[] = await query.json().then((resp) => {
    if (resp?.length > 0) {
      return (
        resp
          ?.filter((_: unknown, i: number) => i < 20)
          ?.map((meme: DiscordMessage) => {
            return {
              title: meme.author?.global_name || meme.author?.username,
              url: "/",
              image: meme.attachments?.[0]?.url,
            };
          }) || resp
      );
    }
    return [];
  });

  return { memes };
};

const HomePage = async () => {
  const { memes } = await fetchData();
  return (
    <>
      <Home memes={memes} />
    </>
  );
};

export default HomePage;
