import React, { createContext, useState } from 'react';
import { getIssuesApi, listReposIssueResponse } from '../apis/issues';

interface IssueContextType {
  issues: listReposIssueResponse['data'];
  getIssues: (page: number) => void;
  isLoading: boolean;
}

interface IssueContextProvider {
  children: React.ReactNode;
}

export const IssueContext = createContext<any | undefined>(undefined); // TODO context 타입 지정 필요

export function IssueContextProvider({ children }: IssueContextProvider) {
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

  const getIssue = (id: number) => issues.find((issue) => issue.id === id);

  return (
    <IssueContext.Provider value={{ issues, isLoading, getIssues, getIssue }}>
      {children}
    </IssueContext.Provider>
  );
}
