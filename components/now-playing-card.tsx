/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import {
  useNowPlaying,
  useSpotifyAccessToken,
  useUserProfile,
} from "@/hooks/spotify";

const NowPlayingCard = () => {
  const { data: accessToken } = useSpotifyAccessToken();
  const { data: nowPlayingData, isLoading: nowPlayingLoading } = useNowPlaying(
    accessToken?.access_token || "",
  );
  const { data: userData, isLoading: userLoading } = useUserProfile(
    accessToken?.access_token || "",
  );
  const isNotPlaying = !nowPlayingData;
  const isPaused = nowPlayingData?.is_playing === false;
  const isLoading = nowPlayingLoading || userLoading;

  const background = `linear-gradient(90deg, rgb(122, 57, 1) 0%, rgb(13, 5, 2) 50%, rgb(162, 91, 0) 100%)`;

  return isLoading ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg shadow-lg p-4 flex flex-col items-center gap-2 h-max min-w-[300px] max-w-[500px] w-full"
      style={{ background: background }}
    >
      <motion.div
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="h-8 bg-line rounded-full w-full"
      />
      <motion.div
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
        className="h-6 bg-line rounded-full w-2/3"
      />
      <motion.div
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
        className="h-4 bg-line rounded-full w-1/3"
      />
    </motion.div>
  ) : (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="rounded-lg shadow-lg p-4 flex flex-col items-center gap-2 h-max min-w-[300px] max-w-[500px] w-full"
      style={{ background: background }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        className="flex justify-between gap-2 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          className="flex flex-col gap-1"
        >
          <motion.h2 className="text-white font-bold text-sm">
            {userData?.display_name}
          </motion.h2>
          <motion.p className="text-sm">
            {isNotPlaying
              ? "User is offline"
              : isPaused
                ? "Music is paused"
                : "Listening to music"}
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
          className="overflow-hidden w-14 h-14 shrink-0"
        >
          <img
            src={userData?.images.slice(-1)[0].url || ""}
            alt="Profile Picture"
            className="rounded-full w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      <div className="w-full h-0.5 bg-line" />
      {!isNotPlaying && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
          className="flex gap-3 items-stretch w-full"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
            className="overflow-hidden w-24 h-24 shrink-0"
          >
            <img
              src={nowPlayingData?.item?.album.images.slice(-1)[0].url || ""}
              alt="Artist Picture"
              width={nowPlayingData?.item?.album.images.slice(-1)[0].width}
              height={nowPlayingData?.item?.album.images.slice(-1)[0].height}
              className="rounded-lg w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1.2 }}
            className="flex flex-col gap-1 justify-between"
          >
            <motion.p className="uppercase">NOW PLAYING</motion.p>
            <motion.div className="flex flex-col">
              <motion.h2 className="text-white font-bold text-sm">
                {nowPlayingData?.item?.name}
              </motion.h2>
              <motion.p className="">
                {nowPlayingData?.item?.artists
                  .map((artist) => artist.name)
                  .join(", ")}{" "}
                - {nowPlayingData?.item?.album.name}
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default NowPlayingCard;
