import { gistInstance } from "./axiosInstance";
import { GITHUB_GIST_ENDPOINTS } from "@/constants";

export const getMyGists = async () => {
  return (await gistInstance.get(GITHUB_GIST_ENDPOINTS.MY_GISTS)).data;
};

export const getGist = async (id: string) => {
  return (await gistInstance.get(GITHUB_GIST_ENDPOINTS.GET_GIST(id))).data;
};

export const createGist = async (data: IGithubGistDataTypes) => {
  return (await gistInstance.post(GITHUB_GIST_ENDPOINTS.CREATE_GIST, data))
    .data;
};

export const updateGist = async (id: string, data: IGithubGistDataTypes) => {
  return (await gistInstance.patch(GITHUB_GIST_ENDPOINTS.UPDATE_GIST(id), data))
    .data;
};

export const deleteGist = async (id: string) => {
  return (await gistInstance.delete(GITHUB_GIST_ENDPOINTS.DELETE_GIST(id)))
    .data;
};

export const starGist = async (id: string) => {
  return (await gistInstance.put(GITHUB_GIST_ENDPOINTS.STAR_GIST(id))).data;
};

export const getGistsByUser = async (username: string) => {
  return (await gistInstance.get(GITHUB_GIST_ENDPOINTS.GISTS_BY_USER(username)))
    .data;
};

export const getPublicGists = async () => {
  return (await gistInstance.get(GITHUB_GIST_ENDPOINTS.PUBLIC_GISTS)).data;
};

export const getStarredGists = async () => {
  return (await gistInstance.get(GITHUB_GIST_ENDPOINTS.STARRED_GISTS)).data;
};
