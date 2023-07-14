import axios, { AxiosResponse } from 'axios';
import { Endpoints } from '@octokit/types';

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const OWNER = 'facebook';
const REPO = 'react';

export type IssueListResponseType =
  Endpoints['GET /repos/{owner}/{repo}/issues']['response'];
export type IssueResponseType =
  Endpoints['GET /repos/{owner}/{repo}/issues/{issue_number}']['response'];
export type IssueListDataType = IssueListResponseType['data'];
export type IssueDataType = IssueResponseType['data'];
type SortType = 'created' | 'updated' | 'comments';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

export class RepositoryAPI {
  private static PATH_ISSUES = `/repos/${OWNER}/${REPO}/issues`;
  private static QUERY_SORT_TYPE: SortType = 'comments';
  private static QUERY_PER_PAGE = '15';

  static async getIssueList(page: number): Promise<IssueListDataType> {
    const result: AxiosResponse<IssueListDataType> = await axiosInstance.get(
      this.PATH_ISSUES,
      {
        params: {
          sort: this.QUERY_SORT_TYPE,
          per_page: this.QUERY_PER_PAGE,
          page: page,
        },
      },
    );

    return result.data;
  }

  static async getIssue(issueId: string): Promise<IssueDataType> {
    const response: AxiosResponse<IssueDataType> = await axiosInstance.get(
      `${this.PATH_ISSUES}/${issueId}`,
    );

    return response.data;
  }
}
