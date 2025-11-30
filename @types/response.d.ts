// export const GITHUB_GIST_ENDPOINTS = {
//     MY_GISTS: `/users/codabytez/gists`,
//     GIST: `/gists/`,
//     CREATE_GIST: `/gists`,
//     PUBLIC_GISTS: `/gists/public`,
//     STARRED_GISTS: `/gists/starred`,
//     GET_GIST: (id: string) => `/gists/${id}`,
//     UPDATE_GIST: (id: string) => `/gists/${id}`,
//     DELETE_GIST: (id: string) => `/gists/${id}`,
//     STAR_GIST: (id: string) => `/gists/${id}/star`,
//     GISTS_BY_USER: (username: string) => `/users/${username}/gists`,
//   };

interface IApiResponse<T> {
  message: string;
  status: number;
  data: T;
}

interface IMyGistsResponse {
  url: string;
  forks_url: string;
  commits_url: string;
  id: string;
  node_id: string;
  git_pull_url: string;
  git_push_url: string;
  html_url: string;
  files: {
    [key: string]: {
      filename: string;
      type: string;
      language: string;
      raw_url: string;
      size: number;
    };
  };
  public: boolean;
  created_at: string;
  updated_at: string;
  description: string;
  comments: number;
  user: null;
  comments_url: string;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  truncated: boolean;
}

interface ISpotifyAccessTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

interface IArtist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface IAlbum {
  album_type: string;
  artists: IArtist[];
  available_markets: string[];
  external_urls: IExternalUrls;
  href: string;
  id: string;
  images: { height: number; url: string; width: number }[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

interface IItem {
  album: IAlbum;
  artists: IArtist[];
  available_markets: string[];
  disc_number: number;
  name: string;
}

interface ISpotifyNowPlayingResponse {
  timestamp: number;
  context: Context;
  progress_ms: number;
  item: IItem;
  currently_playing_type: string;
  actions: IActions;
  is_playing: boolean;
}

interface ISpotifyUserResponse {
  display_name: string;
  external_urls: IExternalUrls;
  href: string;
  id: string;
  images: Image[];
  type: string;
  uri: string;
  followers: Followers;
  country: string;
  product: string;
  explicit_content: IExplicitContent;
  email: string;
}

interface ISpotifyTopArtistsResponse {
  items: ITopArtistItem[];
  total: number;
  limit: number;
  offset: number;
  href: string;
  next: string;
  previous: null;
}

interface ISpotifyTopTracksResponse {
  items: ITopTracksItem[];
  total: number;
  limit: number;
  offset: number;
  href: string;
  next: string;
  previous: null;
}

interface IContentfulResponse {
  metadata: {
    tags: string[];
  };
  sys: {
    space: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
    revision: number;
    contentType: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    locale: string;
  };
  fields: {
    title: string;
    project_img: {
      fields: {
        title: string;
        file: {
          url: string;
          details: {
            size: number;
            image: {
              width: number;
              height: number;
            };
          };
        };
      };
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    description: string;
    tags: string[];
    link: string;
    github_repo: string;
  };
}

interface ILanyardResponse {
  data: ILanyardData;
  success: boolean;
}
