import React, { createContext, useState } from 'react';
import { getIssuesApi, listReposIssueResponse } from '../apis/issues';

interface IssueContextType {
  issues: listReposIssueResponse['data'];
  getIssues: (page: number) => void;
  loading: boolean;
}

export const IssueContext = createContext<any | undefined>(undefined);
// export const IssueContext = createContext<
//   listReposIssueResponse['data'][] | undefined
// >(undefined);

interface ProviderProps {
  children: React.ReactNode;
}

export function IssueContextProvider({ children }: ProviderProps) {
  const [issues, setIssues] = useState<listReposIssueResponse['data']>([]);
  const [loading, setLoading] = useState(false);

  const getIssues = async (page: number) => {
    setLoading(true);
    try {
      const response = await getIssuesApi(page);
      setIssues((prev) => [...prev, ...response]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getIssue = (id: number) => issues.find((issue) => issue.id === id);

  return (
    <IssueContext.Provider value={{ issues, getIssues, loading, getIssue }}>
      {children}
    </IssueContext.Provider>
  );
}
