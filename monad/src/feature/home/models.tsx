export type CharacterProps = {
  image: string;
  title: string;
  description: string;
  url: string;
  logo: string;
  background: string;
  rank_title: string;
  rank: number;
  spell: string;
};

export type InfoProps = {
  title_1: string;
  title_2: string;
  description: string;
  image: string;
};

export type Arcs = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type ParralaxContentProps = {
  title: string;
  url: string;
  image: string;
};

export interface DiscordMessage {
  id: string;
  type: number;
  content: string;
  channel_id: string;
  author: {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    public_flags: number;
    flags: number;
    banner: string | null;
    accent_color: string | null;
    global_name: string;
    avatar_decoration_data: string | null;
    banner_color: string | null;
    clan: string | null;
  };
  attachments: { url: string }[];
  embeds: string[];
  mentions: string[];
  mention_roles: string[];
  pinned: boolean;
  mention_everyone: boolean;
  tts: boolean;
  timestamp: string;
  edited_timestamp: string | null;
  flags: number;
  components: string[];
  reactions: string[];
}
