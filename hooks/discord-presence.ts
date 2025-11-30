import axios from "axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { LANYARD_API } from "@/constants";

export const useDiscordPresence = () => {
  return useQuery<ILanyardResponse>({
    queryKey: ["discordPresence"],
    queryFn: async () => {
      const response = await axios.get(LANYARD_API);
      return response.data;
    },
    refetchInterval: 10000,
    placeholderData: keepPreviousData,
  });
};
