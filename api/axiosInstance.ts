import { GITHUB_API_BASE_URL, SPOTIFY_ENDPOINTS } from "@/constants";
import axios from "axios";
const ACCESS_TOKEN = String(process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN);
const BASIC = Buffer.from(
  `${String(process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID)}:${String(
    process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
  )}`,
).toString("base64");

export const gistInstance = axios.create({
  baseURL: GITHUB_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    Accept: "application/vnd.github+json",
  },
});

export const accessTokenInstance = axios.create({
  baseURL: SPOTIFY_ENDPOINTS.TOKEN,
  headers: {
    Authorization: `Basic ${BASIC}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
