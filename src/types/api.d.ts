export interface ISavedAlbums {
  total: number;
  href: string;
  items: IAlbum[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
}

interface IAlbum {
  added_at: string;
  album: {
    artists: { name: string }[];
    id: string;
    uri: string;
    name: string;
  };
}
