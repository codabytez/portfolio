import { createClient } from "contentful";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const client = createClient({
  space: String(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID),
  accessToken: String(process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN),
});

export const useProjects = () => {
  return useQuery<IContentfulResponse[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await client.getEntries({
        content_type: "projects",
      });
      return response.items as unknown as IContentfulResponse[];
    },
    placeholderData: keepPreviousData,
  });
};
