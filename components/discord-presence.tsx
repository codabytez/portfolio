"use client";
import { NextPage } from "next";
import { motion } from "framer-motion";
import Image from "next/image";
import { useDiscordPresence } from "@/hooks/discord-presence";
import DiscordSkeleton from "./discord-skeleton";

const DiscordPresence: NextPage = () => {
  const { data, isLoading } = useDiscordPresence();

  const activityToDisplay: IActivity | undefined =
    data?.data?.activities.reduce((prev, curr) => {
      if (curr.type === 4) {
        return prev;
      }
      if (
        (curr.flags && prev.flags && curr.flags < prev.flags) ||
        !prev.flags
      ) {
        return curr;
      }
      return prev;
    }, {} as IActivity);

  const statusColor =
    data?.data?.discord_status === "online"
      ? "#43B581"
      : data?.data?.discord_status === "idle"
        ? "#FAA61A"
        : data?.data?.discord_status === "dnd"
          ? "#F04747"
          : "#747F8D";

  return (
    <>
      {isLoading ? (
        <DiscordSkeleton />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center w-full p-2 rounded-md gap-2 min-w-[300px] max-w-[500px] bg-[#010c15]"
        >
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full shrink-0 relative">
              <Image
                src={`https://cdn.discordapp.com/avatars/${data?.data?.discord_user?.id}/${data?.data?.discord_user?.avatar}.png`}
                alt="discord-avatar"
                width={40}
                height={40}
                className="rounded-full size-full object-cover"
              />
              <div
                className="absolute w-3 h-3 rounded-full bottom-0 right-0 z-10 border border-line"
                style={{ backgroundColor: statusColor }}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-secondary-400 font-bold">
                {data?.data?.discord_user?.global_name}
              </p>
              <p className="text-code-snippet">
                {data?.data?.discord_user?.username}
              </p>
              {data?.data?.activities[0]?.type === 4 && (
                <div className="flex items-center gap-1">
                  <span>{data?.data?.activities[0]?.emoji?.name}</span>
                  <p className="text-code-snippet">
                    {data?.data?.activities[0]?.state}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center p-2 gap-3 bg-primary-200 rounded-sm">
            {activityToDisplay?.assets && (
              <>
                <div className="w-14 h-14 relative shrink-0">
                  {activityToDisplay?.assets?.large_image && (
                    <div className="w-14 h-14 rounded-sm overflow-hidden">
                      <Image
                        alt="discord-activity"
                        src={
                          activityToDisplay?.assets.large_image.startsWith(
                            "mp:external/",
                          )
                            ? `https://media.discordapp.net/external/${activityToDisplay?.assets.large_image.replace(
                                "mp:external/",
                                "",
                              )}`
                            : activityToDisplay?.assets.large_image.startsWith(
                                  "spotify:",
                                )
                              ? `https://i.scdn.co/image/${activityToDisplay?.assets.large_image.replace(
                                  "spotify:",
                                  "",
                                )}`
                              : `https://cdn.discordapp.com/app-assets/${activityToDisplay?.application_id}/${activityToDisplay?.assets.large_image}.webp`
                        }
                        width={56}
                        height={56}
                        className="size-full object-cover rounded-sm"
                      />
                    </div>
                  )}
                  {activityToDisplay?.assets?.small_image && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary-200 border border-line">
                      <Image
                        alt="discord-activity"
                        src={
                          activityToDisplay?.assets.small_image.startsWith(
                            "mp:external/",
                          )
                            ? `https://media.discordapp.net/external/${activityToDisplay?.assets.small_image.replace(
                                "mp:external/",
                                "",
                              )}`
                            : `https://cdn.discordapp.com/app-assets/${activityToDisplay?.application_id}/${activityToDisplay?.assets.small_image}.webp`
                        }
                        width={24}
                        height={24}
                        className="rounded-lg size-full object-cover"
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <p className="text-secondary-400 font-bold">
                    {activityToDisplay?.name}
                  </p>
                  <p className="text-code-snippet">
                    {activityToDisplay?.details}
                  </p>
                  <p className="text-code-snippet">
                    {activityToDisplay?.state}
                  </p>
                </div>
              </>
            )}
            {!activityToDisplay?.assets && (
              <p className="w-full font-bold text-center py-5">
                Watching you {"<3"}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default DiscordPresence;
