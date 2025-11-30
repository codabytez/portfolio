import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  createGist,
  deleteGist,
  getGist,
  getGistsByUser,
  getMyGists,
  getPublicGists,
  getStarredGists,
  updateGist,
} from "@/api/gist";

export const useMyGists = () =>
  useQuery<IMyGistsResponse[]>({
    queryKey: ["myGists"],
    queryFn: getMyGists,
    placeholderData: keepPreviousData,
  });

export const useGistsByUser = (username: string) =>
  useQuery({
    queryKey: ["gistsByUser", username],
    queryFn: () => getGistsByUser(username),
    placeholderData: keepPreviousData,
  });

export const usePublicGists = () =>
  useQuery({
    queryKey: ["publicGists"],
    queryFn: getPublicGists,
    placeholderData: keepPreviousData,
  });

export const useStarredGists = () =>
  useQuery<IMyGistsResponse[]>({
    queryKey: ["starredGists"],
    queryFn: getStarredGists,
    placeholderData: keepPreviousData,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

export const useGist = (id: string) =>
  useQuery({
    queryKey: ["gist", id],
    queryFn: () => getGist(id),
    placeholderData: keepPreviousData,
  });

export const useCreateGist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: IGithubGistDataTypes) => createGist(data),
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ["gists"] });
      const previousGists = queryClient.getQueryData(["gists"]);
      queryClient.setQueryData(["gists"], (old: IGithubGistDataTypes[]) => [
        ...old,
        data,
      ]);
      return { previousGists };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(["gists"], context?.previousGists);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["gists"] });
    },
  });
};

export const useUpdateGist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: IGithubGistDataTypes) => updateGist(data.id!, data),
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ["gists"] });
      const previousGists = queryClient.getQueryData(["gists"]);
      queryClient.setQueryData(["gists"], (old: IGithubGistDataTypes[]) => {
        const index = old.findIndex(
          (gist: IGithubGistDataTypes) => gist.id === data.id
        );
        old[index] = data;
        return old;
      });
      return { previousGists };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(["gists"], context?.previousGists);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["gists"] });
    },
  });
};

export const useDeleteGist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteGist(id),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["gists"] });
      const previousGists = queryClient.getQueryData(["gists"]);
      queryClient.setQueryData(["gists"], (old: IGithubGistDataTypes[]) =>
        old.filter((gist: IGithubGistDataTypes) => gist.id !== id)
      );
      return { previousGists };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(["gists"], context?.previousGists);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["gists"] });
    },
  });
};
