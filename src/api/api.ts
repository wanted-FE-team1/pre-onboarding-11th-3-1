import axios, { AxiosResponse } from "axios";
import { Endpoints } from "@octokit/types";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

type issueListResponseType =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["response"];

type issueResponseType =
  Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}"]["response"];

export const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});

export class RepositoryAPI {
  private static ISSUES_PATH = "/repos/facebook/react/issues";
  private static QUERY_SORT_COMMENT = "sort=comments";
  private static QUERY_PER_PAGE = "per_page=15";

  static async getIssueList(): Promise<issueListResponseType["data"]> {
    const URI = `${this.ISSUES_PATH}?${this.QUERY_SORT_COMMENT}&${this.QUERY_PER_PAGE}`;

    const result: AxiosResponse<issueListResponseType["data"]> =
      await axiosInstance.get(URI);

    return result.data;
  }

  static async getIssue(issueId: string): Promise<issueResponseType["data"]> {
    const response: AxiosResponse<issueResponseType["data"]> =
      await axiosInstance.get(`${this.ISSUES_PATH}/${issueId}`);

    return response.data;
  }
}
