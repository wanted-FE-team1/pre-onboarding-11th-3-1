import { Octokit } from '@octokit/core';
import { Endpoints } from '@octokit/types';

const TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

// const owner = 'facebook';
// const repo = 'react';
const owner = 'wanted-FE-tea';
const repo = 'pre-onboarding-11th-3-1';

const octokit = new Octokit({
  auth: TOKEN,
});

export type listReposIssueResponse =
  Endpoints['GET /repos/{owner}/{repo}/issues']['response'];

export const getIssuesApi = async (
  page: number,
): Promise<listReposIssueResponse['data']> => {
  const res = await octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner,
    repo,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28', // latest
    },
    sort: 'comments',
    page,
    per_page: 10,
  });

  return res.data;
};
