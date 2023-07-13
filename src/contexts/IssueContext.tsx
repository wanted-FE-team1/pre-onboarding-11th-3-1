import React, { createContext, useState } from 'react';
import { getIssuesApi, listReposIssueResponse } from '../apis/issues';

interface IssueContextType {
  issues: listReposIssueResponse['data'];
  isLoading: boolean;
  getIssues: (page: number) => void;
  getIssue: (id: number) => listReposIssueResponse['data'][number];
}

const defaultVlaue: IssueContextType = {
  issues: [],
  isLoading: false,
  getIssues: () => {
    throw new Error();
  },
  getIssue: () => {
    throw new Error();
  },
};

interface IssueContextProviderProps {
  children: React.ReactNode;
}

export const IssueContext = createContext<IssueContextType>(defaultVlaue);

export function IssueContextProvider({ children }: IssueContextProviderProps) {
  const [issues, setIssues] = useState<listReposIssueResponse['data']>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getIssues = async (page: number) => {
    setIsLoading(true);
    try {
      const response = await getIssuesApi(page);
      setIssues((prev) => [...prev, ...response]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getIssue = (id: number) => {
    const issue = issues.find((issue) => issue.id === id);
    if (!issue) {
      throw new Error('id에 해당하는 issue가 없습니다 ');
    }
    return issue;
  };

  return (
    <IssueContext.Provider value={{ issues, isLoading, getIssues, getIssue }}>
      {children}
    </IssueContext.Provider>
  );
}
