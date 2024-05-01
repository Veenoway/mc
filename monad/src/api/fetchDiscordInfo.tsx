import { DiscordMessage } from "@/models";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

export const fetchDiscordInfos = async () => {
  const API_KEY = process.env.NEXT_PUBLIC_DISCORD_INFO_KEY as string;
  const query = fetch(
    `https://discord.com/api/v9/channels/1037010712419127367/messages?limit=50`,
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

export function useFetchDiscordInfos() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => fetchDiscordInfos(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["discord-infos"] });
    },
  });
}
