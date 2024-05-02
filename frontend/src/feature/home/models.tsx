import { z } from "zod";

export type CharacterProps = z.infer<typeof CharactersType>;
export type InfosProps = z.infer<typeof InfosType>;
export type ArcsProps = z.infer<typeof ArcsType>;
export type ParralaxContentProps = z.infer<typeof ParralaxContentType>;

const baseProps = z.object({
  image: z.string(),
  description: z.string(),
});

const CharactersType = baseProps.extend({
  title: z.string(),
  url: z.string(),
  logo: z.string(),
  background: z.string(),
  rank_title: z.string(),
  rank: z.number(),
  spell: z.string(),
});

const InfosType = baseProps.extend({
  title_1: z.string(),
  title_2: z.string(),
});

const ArcsType = z.object({
  order: z.number(),
  startLat: z.number(),
  startLng: z.number(),
  endLat: z.number(),
  endLng: z.number(),
  arcAlt: z.number(),
  color: z.string(),
});

const ParralaxContentType = z.object({
  title: z.string(),
  url: z.string().url(),
  image: z.string().url(),
});
