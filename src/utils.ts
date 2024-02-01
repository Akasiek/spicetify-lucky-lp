import { IAlbum, ISavedAlbums } from "./types/api";
import { getAlbumsCount, getRandomAlbum } from "./services";

export const isHomePage = (pathname: string) => {
  return pathname === "/";
};

export const isAlbumPage = (pathname: string) => {
  return pathname.startsWith("/album/");
};

const getRandomSavedAlbum = async (): Promise<false | IAlbum> => {
  try {
    const albumsCount = await getAlbumsCount();

    if (albumsCount) {
      const randomAlbum = await getRandomAlbum(albumsCount);

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
      `Chosen album: ${album.album.name} by ${artistString}`,
    );
  } else {
    Spicetify.showNotification("Random album cannot be chosen.", true);
  }
};
