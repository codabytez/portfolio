import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  getAccessToken,
  getNowPlaying,
  getTopArtists,
  getTopTracks,
  getUserProfile,
} from "@/api/spotify";

export const useSpotifyAccessToken = () =>
  useQuery<ISpotifyAccessTokenResponse>({
    queryKey: ["spotify", "access-token"],
    queryFn: () => getAccessToken(),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

export const useNowPlaying = (accessToken: string) => {
  return useQuery<ISpotifyNowPlayingResponse>({
    queryKey: ["spotify", "now-playing"],
    queryFn: () => getNowPlaying(accessToken),
    enabled: !!accessToken,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: true,
    refetchInterval: 10000,
  });
};

export const useUserProfile = (accessToken: string) => {
  return useQuery<ISpotifyUserResponse>({
    queryKey: ["spotify", "user-profile"],
    queryFn: () => getUserProfile(accessToken),
    enabled: !!accessToken,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export const useTopArtists = (accessToken: string) => {
  return useQuery<ISpotifyTopArtistsResponse>({
    queryKey: ["spotify", "top-artists"],
    queryFn: () => getTopArtists(accessToken),
    enabled: !!accessToken,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export const useTopTracks = (accessToken: string) => {
  return useQuery<ISpotifyTopTracksResponse>({
    queryKey: ["spotify", "top-tracks"],
    queryFn: () => getTopTracks(accessToken),
    enabled: !!accessToken,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};
