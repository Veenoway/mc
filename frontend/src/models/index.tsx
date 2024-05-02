import { z } from "zod";

export const DiscordMessage = z.object({
  id: z.string(),
  type: z.number(),
  content: z.string(),
  channel_id: z.string(),
  author: z.object({
    id: z.string(),
    username: z.string(),
    avatar: z.string(),
    discriminator: z.string(),
    public_flags: z.number(),
    flags: z.number(),
    banner: z.string().optional(),
    accent_color: z.string().optional(),
    global_name: z.string(),
    avatar_decoration_data: z.string().optional(),
    banner_color: z.string().optional(),
    clan: z.string().optional(),
  }),
  attachments: z.array(
    z.object({
      url: z.string().url(),
    })
  ),
  embeds: z.array(z.string()),
  mentions: z.array(z.string()),
  mention_roles: z.array(z.string()),
  pinned: z.boolean(),
  mention_everyone: z.boolean(),
  tts: z.boolean(),
  timestamp: z.string(),
  edited_timestamp: z.string().optional(),
  flags: z.number(),
  components: z.array(z.string()),
  reactions: z.array(z.string()),
});

export type DiscordMessageType = z.infer<typeof DiscordMessage>;
