import { IAlbum, ISavedAlbums } from "./types/api";

export const getAlbumsCount = async (): Promise<number> => {
  const result: ISavedAlbums = await Spicetify.CosmosAsync.get(
    "https://api.spotify.com/v1/me/albums?limit=1",
  );

  return result.total;
};

export const getRandomAlbum = async (total: number): Promise<IAlbum> => {
  const randomIndex = Math.floor(Math.random() * (total + 1));

  const randomResult: ISavedAlbums = await Spicetify.CosmosAsync.get(
    `https://api.spotify.com/v1/me/albums?limit=1&offset=${randomIndex - 1}`,
  );

  return randomResult.items[0];
};
