import { DiscordMessage } from "@/models";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

export const fetchDiscordMemes = async () => {
  const API_KEY = process.env.NEXT_PUBLIC_DISCORD_KEY as string;
  const query = fetch(
    `https://discord.com/api/v9/channels/1191785265228939344/messages?limit=50&username=veeno8009`,
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  );
  const resp = await query;
  const result = resp.json();
  const apiResponseType = z.array(DiscordMessage);
  const typedResult = apiResponseType.parse(result);

  return typedResult;
};

export function useFetchDiscordMemes() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => fetchDiscordMemes(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["discord-memes"] });
    },
  });
}
