export const getRandom = (content: string[]) => {
  const randomIndex = Math.floor(Math.random() * content.length);
  return content[randomIndex];
};
