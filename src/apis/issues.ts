import axios, { AxiosResponse } from 'axios';
import { Endpoints } from '@octokit/types';

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const OWNER = 'facebook';
const REPO = 'react';

export type issueListResponseType =
  Endpoints['GET /repos/{owner}/{repo}/issues']['response'];
export type issueResponseType =
  Endpoints['GET /repos/{owner}/{repo}/issues/{issue_number}']['response'];
export type issueListDataType = issueListResponseType['data'];
export type issueDataType = issueResponseType['data'];
type sortType = 'created' | 'updated' | 'comments';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

export class RepositoryAPI {
  private static PATH_ISSUES = `/repos/${OWNER}/${REPO}/issues`;
  private static QUERY_SORT_TYPE: sortType = 'comments';
  private static QUERY_PER_PAGE = '15';

  static async getIssueList(page: number): Promise<issueListDataType> {
    const URI = `${this.PATH_ISSUES}?sort=${this.QUERY_SORT_TYPE}&per_page=${this.QUERY_PER_PAGE}&page=${page}`;

    const result: AxiosResponse<issueListDataType> = await axiosInstance.get(
      URI,
    );

    return result.data;
  }

  static async getIssue(issueId: string): Promise<issueDataType> {
    const response: AxiosResponse<issueDataType> = await axiosInstance.get(
      `${this.PATH_ISSUES}/${issueId}`,
    );

    return response.data;
  }
}
