interface IGithubGistDataTypes {
  description: string;
  files: Record<string, { content: string }>;
  public?: boolean;
  id?: string;
}

// spotify types

interface IExternalUrls {
  spotify: string;
}

interface IContext {
  external_urls: IExternalUrls;
  href: string;
  type: string;
  uri: string;
}

interface IArtist {
  external_urls: IExternalUrls;
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
  duration_ms: number;
  explicit: boolean;
  external_ids: { isrc: string };
  external_urls: IExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

interface IDisallows {
  resuming: boolean;
  toggling_repeat_context: boolean;
  toggling_repeat_track: boolean;
  toggling_shuffle: boolean;
}

interface IActions {
  disallows: IDisallows;
}

interface IImage {
  url: string;
  height: number;
  width: number;
}

interface IFollowers {
  href: null;
  total: number;
}

interface IExplicitContent {
  filter_enabled: boolean;
  filter_locked: boolean;
}

interface ITopArtistItem {
  external_urls: IExternalUrls;
  followers: IFollowers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

interface IExternalIds {
  isrc: string;
}

interface ITopTracksItem {
  album: IAlbum;
  artists: IArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: IExternalIds;
  external_urls: IExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

interface ILanyardData {
  kv: Record<string, unknown>;
  spotify: ISpotify | null;
  discord_user: IDiscordUser;
  activities: IActivity[];
  discord_status: string;
  active_on_discord_web: boolean;
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
  listening_to_spotify: boolean;
}

interface ISpotify {
  track_id: string;
  timestamps: ITimestamps;
  album: string;
  album_art_url: string;
  artist: string;
  song: string;
}

interface IDiscordUser {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  bot: boolean;
  clan: null;
  global_name: string;
  avatar_decoration_data: null;
  display_name: string;
  public_flags: number;
}

interface IActivity {
  id: string;
  name: string;
  type: number;
  timestamps: ITimestamps;
  emoji?: IEmoji;
  created_at: number;
  state?: string;
  session_id?: string;
  details?: string;
  assets?: IAssets;
  sync_id?: string;
  party?: IParty;
  flags?: number;
  application_id?: string;
}

interface IEmoji {
  name: string;
}

interface ITimestamps {
  start: number;
  end?: number;
}

interface IAssets {
  large_image: string;
  large_text: string;
  small_image?: string;
  small_text?: string;
}

interface IParty {
  id: string;
}

interface ICodeStringProps {
  form: {
    name: string;
    email: string;
    message: string;
  };
}

interface IContactFormProps {
  isLoading: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  form: { name: string; email: string; message: string };
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

interface IProjectCardProps extends IContentfulResponse {
  index: number;
  isLoading: boolean;
}

interface ISnakeGameOptions {
  snakeSize?: number;
  foodSize?: number;
  snakeSpeed?: number;
  winScore?: number;
  gameMode?: "standard" | "endless";
}

interface ISnake {
  x: number;
  y: number;
}

interface ICodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  backgroundColor?: string;
  borderRadius?: string;
  padding?: string;
  style?:
    | {
        [key: string]: React.CSSProperties;
      }
    | undefined;
}

interface IAboutSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setContentTab: (tab: string, category: string) => void;
}

interface ITab {
  id: string;
  label: string;
  content: string;
  category: string;
}

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

interface ITextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  height?: string;
}

interface ICustomCheckboxProps {
  onChange: () => void;
}
interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "ghost";
  className?: string;
  href?: string;
  target?: string;
}
