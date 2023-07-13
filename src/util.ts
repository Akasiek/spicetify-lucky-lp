import { IAlbum, ISavedAlbums } from "./types/api";

export const isHomePage = () => {
  const pathname = Spicetify.Platform.History.location.pathname;
  return pathname === "/";
};

export const isAlbumPage = () => {
  const pathname = Spicetify.Platform.History.location.pathname;
  return pathname.startsWith("/album/");
};

const getRandomAlbumIndex = (total: number): number =>
  Math.floor(Math.random() * (total + 1));

const getRandomSavedAlbum = async (): Promise<false | IAlbum> => {
  try {
    const result: ISavedAlbums = await Spicetify.CosmosAsync.get(
      "https://api.spotify.com/v1/me/albums?limit=1"
    );

    if (result && result?.total) {
      const albumsCount = result.total;

      const randomIndex = getRandomAlbumIndex(albumsCount);

      const randomResult: ISavedAlbums = await Spicetify.CosmosAsync.get(
        `https://api.spotify.com/v1/me/albums?limit=1&offset=${randomIndex - 1}`
      );

      const randomAlbum = randomResult.items[0];
      Spicetify.Platform.History.push(`/album/${randomAlbum.album.id}`);
      return randomAlbum;
    }

    return false;
  } catch (e) {
    return false;
  }
};

export const handleClick = async () => {
  Spicetify.showNotification("Choosing random album...");
  const album = await getRandomSavedAlbum();

  if (album !== false) {
    const artistString = album.album.artists
      .map((artist) => artist.name)
      .join(",");

    Spicetify.showNotification(
      `Chosen album: <strong>${album.album.name}</strong> by <i>${artistString}</i>`
    );
  } else {
    Spicetify.showNotification("Random album cannot be chosen.", true);
  }
};
