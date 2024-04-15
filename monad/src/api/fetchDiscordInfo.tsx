import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

export const fetchDiscordInfos = async () => {
  const API_KEY = process.env.NEXT_PUBLIC_DISCORD_INFO_KEY;
  const query = fetch(
    `https://discord.com/api/v9/channels/1037010712419127367/messages?limit=50`,
    {
      headers: {
        Authorization: API_KEY as string,
      },
    }
  );
  const resp = await query;

  console.log(resp);

  return resp.json();
};

export function useFetchDiscordInfos(
  options?: Omit<UseMutationOptions<Event, Error>, "mutationFn">
) {
  const queryClient = useQueryClient();
  return useMutation({
    ...options,
    mutationFn: async () => fetchDiscordInfos(),
    onSuccess: () => {
      queryClient.invalidateQueries(["discord-infos"]);
    },
  });
}
