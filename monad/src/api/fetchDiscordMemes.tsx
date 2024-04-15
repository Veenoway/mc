import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

export const fetchDiscordMemes = async () => {
  const API_KEY = process.env.NEXT_PUBLIC_DISCORD_KEY;
  const query = fetch(
    `https://discord.com/api/v9/channels/1191785265228939344/messages?limit=50&username=veeno8009`,
    {
      headers: {
        Authorization: API_KEY as string,
      },
    }
  );
  const resp = await query;

  console.log("resp", resp);

  return resp.json();
};

export function useFetchDiscordMemes(
  options?: Omit<UseMutationOptions<Event, Error>, "mutationFn">
) {
  const queryClient = useQueryClient();
  return useMutation({
    ...options,
    mutationFn: async () => fetchDiscordMemes(),
    onSuccess: () => {
      queryClient.invalidateQueries(["discord-memes"]);
    },
  });
}
