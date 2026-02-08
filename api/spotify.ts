import { accessTokenInstance } from "./axiosInstance";
import axios from "axios";
import { SPOTIFY_BASE_URL, SPOTIFY_ENDPOINTS } from "@/constants";

export const getAccessToken = async () => {
  const refreshToken = String(process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN);
  return (
    await accessTokenInstance.post(
      "",
      `grant_type=refresh_token&refresh_token=${refreshToken}`,
    )
  ).data;
};

export const getNowPlaying = async (accessToken: string) => {
  const res = await axios.get(
    SPOTIFY_BASE_URL + SPOTIFY_ENDPOINTS.NOW_PLAYING,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  return res.data;
};

export const getUserProfile = async (accessToken: string) => {
  const res = await axios.get(
    SPOTIFY_BASE_URL + SPOTIFY_ENDPOINTS.USER_PROFILE,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  return res.data;
};

export const getTopArtists = async (accessToken: string) => {
  const res = await axios.get(
    SPOTIFY_BASE_URL + SPOTIFY_ENDPOINTS.TOP_ARTISTS,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  return res.data;
};

export const getTopTracks = async (accessToken: string) => {
  const res = await axios.get(SPOTIFY_BASE_URL + SPOTIFY_ENDPOINTS.TOP_TRACKS, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data;
};
